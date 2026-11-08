// Kit (antes ConvertKit): los formularios envían directo desde el navegador.
// El ID de cada formulario es el número que aparece en la URL al abrirlo en Kit
// (Grow → Landing Pages & Forms). No es secreto: es el mismo que va en el embed oficial.
// Los formularios de capítulo gratis de cada libro están en books.js (kitFormId).
export const KIT_FORMS = {
  newsletter: '10096714',
  lectorasBeta: '10096817',
};

// --- ANTI-BOTS ---
// 1. Trampa oculta (honeypot): un campo invisible que solo los bots llenan.
// 2. Tiempo mínimo: un bot envía en milisegundos; una persona tarda más en llegar al formulario y escribir.
// 3. reCAPTCHA v3 invisible: Kit puntúa a la visitante; a las personas reales no les pide nada.
// 4. CAPTCHA de Kit: si aun así Kit sospecha, responde "quarantined" y mostramos su verificación (ver showKitGuard).
// 5. Doble confirmación (se activa en Kit): un correo que nadie confirma nunca recibe campañas.
const MIN_FILL_MS = 3000;
const pageLoadedAt = Date.now();

export function looksLikeBot(honeypotValue) {
  return Boolean(honeypotValue) || Date.now() - pageLoadedAt < MIN_FILL_MS;
}

// Clave pública de reCAPTCHA v3 que usa el embed oficial de Kit (f.convertkit.com/ckjs/ck.5.js).
// Sin este token Kit manda TODOS los envíos a su CAPTCHA.
const KIT_RECAPTCHA_KEY = '6LdkIV0UAAAAABtNVAAP99TC6f_18LiETnPK6ziX';
let recaptchaReady;

function loadRecaptcha() {
  recaptchaReady ??= new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${KIT_RECAPTCHA_KEY}`;
    script.async = true;
    script.onload = () => window.grecaptcha.ready(resolve);
    script.onerror = reject;
    document.head.append(script);
  });
  return recaptchaReady;
}

function getRecaptchaToken() {
  return loadRecaptcha()
    .then(() => window.grecaptcha.execute(KIT_RECAPTCHA_KEY, { action: 'formsubmit' }))
    .catch(() => ''); // si Google no carga, Kit mostrará su CAPTCHA como respaldo
}

// Precarga reCAPTCHA en cuanto la lectora empieza a llenar cualquier formulario (no al cargar la página)
if (typeof document !== 'undefined') {
  document.addEventListener('focusin', (e) => {
    if (e.target instanceof Element && e.target.closest('form')) loadRecaptcha().catch(() => {});
  });
}

// formData debe traer `email_address` y opcionalmente `fields[first_name]` / `fields[<campo_personalizado>]`
export async function subscribeToKit(formId, formData) {
  formData.append('token', await getRecaptchaToken());
  const res = await fetch(`https://app.kit.com/forms/${formId}/subscriptions`, {
    method: 'POST',
    body: formData,
    headers: { Accept: 'application/json' },
  });
  const data = await res.json().catch(() => null);

  if (res.ok && data?.status === 'quarantined' && data.url) {
    await showKitGuard(data.url);
    return data;
  }
  if (!res.ok || data?.status !== 'success') throw new Error('Kit no aceptó la suscripción');
  return data;
}

// Muestra la verificación anti-bots de Kit en un iframe (igual que hace su embed oficial)
// y espera a que Kit avise por postMessage que la persona la superó.
function showKitGuard(url) {
  return new Promise((resolve, reject) => {
    const kitOrigin = new URL(url).origin;

    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:10000;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(0,0,0,.85)';

    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.title = 'Verificación anti-spam';
    iframe.style.cssText = 'width:100%;max-width:420px;height:560px;max-height:90vh;border:0;border-radius:12px;background:#fff';

    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.textContent = '✕';
    closeBtn.setAttribute('aria-label', 'Cerrar verificación');
    closeBtn.style.cssText = 'position:absolute;top:16px;right:16px;color:#fff;font-size:20px;background:none;border:0;cursor:pointer';

    const cleanup = () => {
      window.removeEventListener('message', onMessage);
      overlay.remove();
    };
    const onMessage = (e) => {
      if (e.origin !== kitOrigin) return;
      if (e.data?.name === 'ckjs:guard:size') {
        iframe.style.width = `${e.data.width}px`;
        iframe.style.height = `${e.data.height}px`;
      }
      if (e.data?.name === 'ckjs:guard:confirmed') { cleanup(); resolve(); }
      if (e.data?.name === 'ckjs:guard:failed') { cleanup(); reject(new Error('Verificación fallida')); }
    };
    closeBtn.addEventListener('click', () => { cleanup(); reject(new Error('Verificación cancelada')); });

    window.addEventListener('message', onMessage);
    overlay.append(iframe, closeBtn);
    document.body.append(overlay);
  });
}
