# Guía del panel de administración — CIAVA Studio

Este panel permite editar las **fotos** y **textos** del sitio sin tocar código.
Vive en `ciavastudio.com/admin` y guarda los cambios en GitHub; Netlify reconstruye
el sitio solo (tarda 1–2 minutos en verse online).

La guía tiene dos partes:

- **Parte A — Puesta en marcha (Franco, una sola vez):** conectar el login de GitHub.
- **Parte B — Uso diario (para quien edita):** cómo cambiar fotos y textos.

---

## Parte A — Puesta en marcha (una sola vez)

> Esto lo hace Franco una vez. Después el panel queda funcionando para siempre.

### A.1 — Confirmar que la editora es colaboradora del repo ✅
Ya hecho: se la invitó por mail y aceptó. Para verificar:
GitHub → repo **CIAVA** → *Settings* → *Collaborators* → debe aparecer su usuario
con permiso de escritura (Write).

### A.2 — Crear una "OAuth App" en GitHub
Esto es lo que permite el botón *"Iniciar sesión con GitHub"* del panel.

1. Entrá a: GitHub → foto de perfil (arriba a la derecha) → **Settings**.
2. Bajá del todo a la izquierda: **Developer settings**.
3. **OAuth Apps** → botón **New OAuth App**.
4. Completá:
   - **Application name:** `CIAVA Admin` (el nombre que quieras).
   - **Homepage URL:** `https://ciavastudio.com`
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
     (⚠️ tiene que ser exactamente esa).
5. **Register application**.
6. Vas a ver un **Client ID** → copialo.
7. Hacé clic en **Generate a new client secret** → copiá el **Client Secret**
   (se muestra una sola vez; si lo perdés, generás otro).

### A.3 — Conectar esa app en Netlify
1. Entrá a tu panel de **Netlify** → elegí el sitio de CIAVA.
2. **Site configuration** → **Access & security** → **OAuth**
   (en algunas versiones: *Access control* → *OAuth*).
3. **Install provider** → elegí **GitHub**.
4. Pegá el **Client ID** y el **Client Secret** del paso anterior → **Install / Save**.

### A.4 — Publicar los cambios del proyecto
Subí a GitHub (rama `main`) los archivos nuevos del panel y del contenido.
Netlify va a redesplegar solo. Cuando termine, entrá a
**https://ciavastudio.com/admin** y probá el botón *Iniciar sesión con GitHub*.

Si iniciás sesión y ves las colecciones (Textos del sitio, Portfolio, Estudio),
¡ya está listo! Compartile el link a la editora.

---

## Parte B — Uso diario (para quien edita)

### B.1 — Entrar al panel
1. Abrí **https://ciavastudio.com/admin** en el navegador
   (recomendado: Chrome o Edge).
2. Tocá **Iniciar sesión con GitHub** y entrá con tu cuenta.
3. Vas a ver 3 secciones a la izquierda:
   - **Textos del sitio** — textos e imágenes de la portada.
   - **Portfolio** — las fotos, organizadas por categoría.
   - **Página del estudio (Nordelta)** — las fotos de esa página.

### B.2 — Cambiar un texto
Ejemplo: editar un servicio.
1. **Textos del sitio** → **Servicios**.
2. Cambiá el título o la descripción que quieras.
3. Arriba a la derecha, tocá **Publicar** (o *Save/Publish*).
4. Esperá 1–2 minutos y recargá la web para ver el cambio.

Lo mismo aplica para: **Portada (Hero)**, **Sección "El estudio"**,
**Equipo (Quiénes somos)** y **Contacto y datos generales**.

### B.3 — Agregar una foto al portfolio
1. **Portfolio** → elegí la categoría (ej. *Bikinis*).
2. En **Fotos**, tocá **Agregar** (el botón para sumar un ítem a la lista).
3. En **Imagen**, subí la foto desde tu compu (o elegí una ya subida).
4. *(Opcional)* En **Descripción** poné un texto corto de qué es
   (ayuda al SEO y a la accesibilidad).
5. **Publicar**.

### B.4 — Borrar o reordenar fotos
- **Borrar:** al lado de cada foto de la lista hay una opción para eliminarla (🗑 / *Delete*).
- **Reordenar:** arrastrá las fotos de la lista para cambiar el orden en que
  aparecen en la web.
- Acordate de **Publicar** al terminar.

### B.5 — Cambiar las fotos destacadas
- **Portada (Hero):** *Textos del sitio → Portada (Hero)* → cambiá la imagen de
  celular y/o escritorio.
- **Perfiles de Florencia / Valentina:** *Textos del sitio → Equipo* → campo
  *Foto de perfil*.
- **Fotos del estudio:** *Página del estudio* → reemplazá las Fotos 1 a 5.

### Consejos
- **Peso de las fotos:** subí buenas fotos sin problema — el sitio las optimiza solo.
- **Después de Publicar** el sitio tarda 1–2 minutos en actualizarse. Si no ves el
  cambio, esperá un momento y recargá con `Ctrl + F5`.
- Si algo sale mal, no pasa nada: cada cambio queda guardado en el historial de
  GitHub y se puede volver atrás.

---

## Preguntas frecuentes

**¿Los visitantes de la web tienen que loguearse?**
No. El login es únicamente para editar en `/admin`. Quien entra a la web normal
no ve ni necesita nada de esto.

**¿Puedo editar desde el celular?**
Sí, entrando a `ciavastudio.com/admin`. Para subir muchas fotos es más cómodo
desde la computadora.

**Perdí/olvidé cómo entra el login.**
Es con la cuenta de GitHub que fue invitada como colaboradora del repositorio.
