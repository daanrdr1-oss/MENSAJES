# Mi Galaxia ✨

Proyecto HTML listo para personalizar y **compartir**.

## Cómo usar
1. Abre esta carpeta en **Visual Studio Code**.
2. (Opcional) Instala la extensión **Live Server** para ver en local.
3. Pon tus archivos en `assets/`:
   - `mi-cancion.mp3` → tu canción.
   - `btn.png` → imagen del botón de inicio (opcional).
   - `halo1.png` ... `halo5.png` → sprites opcionales.
   - `favicon.png`, `og-cover.png` → icono y previa social.
4. Abre `index.html` y edita dentro del script la sección `CONFIG`:
   - `AUDIO_URL`, `BTN_IMAGE`, `OVERLAY_IMAGE`, `RING_IMAGES`, `PHRASES`.
5. Botón derecho sobre `index.html` → **Open with Live Server**.

## Cómo compartir
### Opción 1: GitHub Pages
1. Crea un repo en GitHub (por ejemplo `mi-galaxia`).
2. Sube estos archivos (`index.html` y la carpeta `assets/`).
3. En GitHub → Settings → **Pages** → Deploy from branch → `main` → `/root`.
4. Te dará una URL del tipo `https://TU_USUARIO.github.io/mi-galaxia/` para enviar a cualquiera.

### Opción 2: Netlify (muy fácil)
1. Ve a https://app.netlify.com y crea cuenta.
2. Arrastra y suelta esta carpeta; Netlify te da un dominio público al instante.

### Opción 3: Enviar como archivo
- Comprime la carpeta y envíala por WhatsApp/Telegram/Drive. Quien la reciba debe abrir `index.html` en un navegador (mejor con Live Server o alojado en un servidor simple).

### Consejos para compartir
- Genera un **QR** con tu URL (ej. generadores online) y compártelo en físico.
- Añade parámetros a la URL como `?de=TuNombre` y en el JS lee `new URLSearchParams(location.search)` para mostrar mensajes personalizados.

¡Disfruta creando! 💜
