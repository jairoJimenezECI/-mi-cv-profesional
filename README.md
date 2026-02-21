# Jairo Jiménez - Sitio Web Portfolio

Sitio web portfolio interactivo, bilingüe (Inglés/Español) con soporte de tema claro/oscuro, presentando una animación de red neuronal temática de ciencia de datos.

## 🌐 URL del Sitio Publicado

**Sitio en Azure**: `https://[tu-nombre-app].azurewebsites.net`

> **Nota**: Después de desplegar en Azure, reemplaza esta URL con la URL real de tu sitio.

---

## 📋 Descripción del Proyecto

Este es un sitio web portfolio profesional de una sola página (single-page) completamente estático, diseñado para mostrar la experiencia, habilidades y proyectos de Jairo Jiménez, un Sr. Data Scientist con más de 10 años de experiencia en Machine Learning, Deep Learning y Análisis Estadístico.

### Características Principales

- 🌓 **Modo Claro/Oscuro**: Alterna entre temas con almacenamiento persistente de preferencias
- 🌍 **Bilingüe**: Cambia entre Inglés y Español sin problemas
- 🎨 **Diseño Interactivo**: Animación de red neuronal en el fondo representando ciencia de datos
- 📱 **Responsive**: Diseño completamente adaptable que funciona en todos los dispositivos
- ⚡ **Alto Rendimiento**: HTML/CSS/JavaScript puro - sin frameworks, carga rápida (~45 KB total)
- 🎯 **Accesibilidad**: HTML semántico y etiquetas ARIA
- 🔒 **100% Estático**: Sin dependencias externas, funciona offline

### Secciones Incluidas

1. **Header con Foto**: Información personal y foto profesional
2. **Resumen Profesional**: Objetivo de carrera y highlights
3. **Habilidades Técnicas**: Tecnologías y lenguajes con barras de progreso animadas
4. **Proyectos Destacados**: 8 proyectos profesionales y académicos
5. **Experiencia Profesional**: Timeline completo de experiencia laboral
6. **Educación**: Formación académica completa
7. **Contacto**: Información de contacto y CTA

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: 
  - Variables CSS para theming
  - Flexbox y Grid para layouts
  - Animaciones y transiciones
  - Media queries para responsive design
- **JavaScript (Vanilla ES6+)**:
  - Canvas API para animación de red neuronal
  - LocalStorage para persistencia de preferencias
  - Intersection Observer para animaciones on-scroll
  - Event listeners para interactividad

### Características Técnicas
- **Single-Page Application (SPA)**: Navegación por anclas sin recarga
- **Progressive Enhancement**: Funciona sin JavaScript habilitado
- **Mobile-First Design**: Optimizado para dispositivos móviles
- **Cross-Browser Compatible**: Funciona en todos los navegadores modernos

### Sin Dependencias
- ✅ Sin frameworks (React, Vue, Angular)
- ✅ Sin librerías (jQuery, Bootstrap)
- ✅ Sin CDNs externos
- ✅ Sin llamadas a APIs
- ✅ 100% código propio

---

## 📁 Estructura del Proyecto

```
.
├── index.html                  # Estructura HTML principal
├── styles.css                  # Estilos y variables de tema
├── script.js                   # Funcionalidad interactiva y animaciones
├── README.md                   # Este archivo (documentación)
```

---

## 🚀 Desarrollo Local

Simplemente abre `index.html` en tu navegador. ¡No se requiere proceso de compilación ni dependencias!

```bash
# Opción 1: Apertura directa de archivo
# Doble clic en index.html

# Opción 2: Usando el servidor integrado de Python
python -m http.server 8000

# Opción 3: Usando http-server de Node.js
npx http-server

# Opción 4: Usando Live Server de VS Code
# Clic derecho en index.html → "Open with Live Server"
```

Luego navega a `http://localhost:8000` en tu navegador.

---

## 📤 Despliegue en Azure App Service

### Prerrequisitos

- Una cuenta de Azure ([Crear cuenta gratuita](https://azure.microsoft.com/free/))
- Azure CLI instalado ([Guía de instalación](https://docs.microsoft.com/cli/azure/install-azure-cli))

### Método 1: Despliegue vía Azure Portal (Más Fácil)

1. **Prepara tus archivos**
   - Comprime todos los archivos (index.html, styles.css, script.js) en un archivo ZIP

2. **Crea un App Service**
   - Ve al [Portal de Azure](https://portal.azure.com)
   - Haz clic en "Crear un recurso" → "Aplicación web"
   - Completa los detalles:
     - **Suscripción**: Selecciona tu suscripción
     - **Grupo de recursos**: Crea uno nuevo o usa uno existente
     - **Nombre**: Elige un nombre único (ej: `jairo-jimenez-portfolio`)
     - **Publicar**: Código
     - **Pila del entorno de ejecución**: Node 18 LTS (o cualquier runtime - servimos archivos estáticos)
     - **Sistema operativo**: Linux
     - **Región**: Elige la más cercana a tu audiencia
     - **Plan de precios**: F1 Gratis o B1 Básico

3. **Despliega tu código**
   - Una vez creado, ve a tu App Service
   - Navega a "Centro de implementación" en el menú izquierdo
   - Elige "Git local" o "Implementación ZIP"
   - Para Implementación ZIP: Sube tu archivo zip
   - Haz clic en "Implementar"

4. **Accede a tu sitio**
   - Tu sitio estará disponible en: `https://[nombre-de-tu-app].azurewebsites.net`

### Método 2: Despliegue vía Azure CLI

1. **Inicia sesión en Azure**
   ```bash
   az login
   ```

2. **Crea un Grupo de Recursos**
   ```bash
   az group create --name portfolio-rg --location eastus
   ```

3. **Crea un Plan de App Service**
   ```bash
   az appservice plan create --name portfolio-plan --resource-group portfolio-rg --sku F1 --is-linux
   ```

4. **Crea la Aplicación Web**
   ```bash
   az webapp create --resource-group portfolio-rg --plan portfolio-plan --name jairo-jimenez-portfolio --runtime "NODE:18-lts"
   ```

5. **Despliega usando ZIP**
   ```bash
   # Primero, crea un archivo zip de tu proyecto
   zip -r portfolio.zip index.html styles.css script.js
   
   # Despliega el archivo zip
   az webapp deployment source config-zip --resource-group portfolio-rg --name jairo-jimenez-portfolio --src portfolio.zip
   ```

6. **Accede a tu sitio**
   ```bash
   az webapp browse --resource-group portfolio-rg --name jairo-jimenez-portfolio
   ```

### Método 3: Despliegue vía GitHub Actions (CI/CD)

1. **Sube tu código a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tuusuario/portfolio.git
   git push -u origin main
   ```

2. **Configura el despliegue en Azure Portal**
   - Ve a tu App Service
   - Navega a "Centro de implementación"
   - Selecciona "GitHub" como fuente
   - Autoriza y selecciona tu repositorio
   - Azure creará automáticamente un workflow de GitHub Actions

3. **Despliegues automáticos**
   - Cada push a la rama main activará un despliegue automático

### Método 4: Despliegue vía FTP

1. **Obtén las credenciales FTP**
   ```bash
   az webapp deployment list-publishing-credentials --name jairo-jimenez-portfolio --resource-group portfolio-rg
   ```

2. **Conéctate vía cliente FTP**
   - Usa FileZilla o cualquier cliente FTP
   - Host: `ftp://[nombre-de-tu-app].azurewebsites.net`
   - Usuario: De las credenciales anteriores
   - Contraseña: De las credenciales anteriores

3. **Sube los archivos**
   - Sube index.html, styles.css y script.js a `/site/wwwroot/`

---

## 🌐 Dominio Personalizado (Opcional)

1. **Compra un dominio** (de GoDaddy, Namecheap, etc.)

2. **Agrega el dominio personalizado en Azure**
   ```bash
   az webapp config hostname add --webapp-name jairo-jimenez-portfolio --resource-group portfolio-rg --hostname www.tudominio.com
   ```

3. **Configura el DNS**
   - Agrega un registro CNAME: `www` → `jairo-jimenez-portfolio.azurewebsites.net`
   - O un registro A apuntando a la IP del App Service

4. **Habilita HTTPS**
   - Azure proporciona certificados SSL gratuitos
   - Ve a "Dominios personalizados" → "Agregar enlace" → "Certificado administrado de App Service"

---

## ⚙️ Configuración de Entorno

Para producción, puedes agregar un archivo `web.config` para mejor rendimiento:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <staticContent>
      <mimeMap fileExtension=".json" mimeType="application/json" />
      <clientCache cacheControlMode="UseMaxAge" cacheControlMaxAge="7.00:00:00" />
    </staticContent>
    <httpCompression>
      <dynamicTypes>
        <add mimeType="text/*" enabled="true" />
        <add mimeType="application/javascript" enabled="true" />
        <add mimeType="application/json" enabled="true" />
      </dynamicTypes>
      <staticTypes>
        <add mimeType="text/*" enabled="true" />
        <add mimeType="application/javascript" enabled="true" />
        <add mimeType="application/json" enabled="true" />
      </staticTypes>
    </httpCompression>
  </system.webServer>
</configuration>
```

---

## 📊 Monitoreo y Mantenimiento

### Ver Logs
```bash
az webapp log tail --name jairo-jimenez-portfolio --resource-group portfolio-rg
```

### Monitorear Rendimiento
- Ve al Portal de Azure → Tu App Service → "Supervisión" → "Métricas"
- Configura alertas para tiempo de inactividad o problemas de rendimiento

### Escalar tu Aplicación
```bash
# Escalar verticalmente (mejor hardware)
az appservice plan update --name portfolio-plan --resource-group portfolio-rg --sku B1

# Escalar horizontalmente (más instancias)
az appservice plan update --name portfolio-plan --resource-group portfolio-rg --number-of-workers 2
```

---

## 💰 Optimización de Costos

### Nivel Gratuito (F1)
Perfecto para portfolios personales, incluye:
- 60 minutos de CPU/día
- 1 GB de RAM
- 1 GB de almacenamiento
- Soporte de dominio personalizado (sin SSL)
- **Costo**: Gratis

### Nivel Básico (B1)
~$13/mes, incluye:
- Tiempo de CPU ilimitado
- 1.75 GB de RAM
- 10 GB de almacenamiento
- Dominio personalizado con SSL
- **Costo**: ~$13 USD/mes

### Azure Static Web Apps (Alternativa Recomendada)
Para sitios completamente estáticos como este:
- **Nivel gratuito**: Perfecto para este proyecto
- SSL automático
- CDN global incluido
- Despliegue automático desde GitHub
- **Costo**: Gratis

```bash
# Crear Static Web App
az staticwebapp create \
  --name jairo-portfolio \
  --resource-group portfolio-rg \
  --source https://github.com/tuusuario/portfolio \
  --location "eastus2" \
  --branch main \
  --app-location "/" \
  --login-with-github
```

---

## 🔧 Solución de Problemas

### El sitio no carga
- Verifica los logs de despliegue en Azure Portal
- Asegúrate de que todos los archivos estén en `/site/wwwroot/`
- Revisa Application Insights para errores

### Rendimiento lento
- Habilita Application Insights
- Considera actualizar al nivel Básico
- Habilita CDN para recursos estáticos

### Dominio personalizado no funciona
- Verifica la propagación de DNS (puede tomar 24-48 horas)
- Revisa la configuración del registro CNAME/A
- Asegúrate de que el dominio esté verificado en Azure

---

## 📚 Recursos Adicionales

- [Documentación de Azure App Service](https://docs.microsoft.com/azure/app-service/)
- [Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/)
- [Soporte de Azure](https://azure.microsoft.com/support/)
- [Precios de Azure](https://azure.microsoft.com/pricing/details/app-service/)

---

## 🎨 Personalización

### Agregar tu Foto
Consulta `INSTRUCCIONES_FOTO.md` para instrucciones detalladas sobre cómo agregar tu foto profesional.

### Modificar Contenido
- **Experiencia/Proyectos**: Edita los objetos de datos en `script.js`
- **Colores**: Modifica las variables CSS en `:root` en `styles.css`
- **Secciones**: Agrega o elimina secciones en `index.html`

### Agregar Redes Sociales
Agrega enlaces a LinkedIn, GitHub, etc. en la sección de contacto:

```html
<div class="social-links">
  <a href="https://linkedin.com/in/tu-perfil" target="_blank">LinkedIn</a>
  <a href="https://github.com/tu-usuario" target="_blank">GitHub</a>
</div>
```

---

## 📝 Licencia

Este es un sitio web portfolio personal. Siéntete libre de usar la estructura del código como inspiración para tu propio portfolio.

---

## 👤 Autor

**Jairo Jiménez**
- Email: jairo.jimenez-f@mail.escuelaing.edu.co
- Ubicación: Zipaquirá, Colombia
- Rol: Sr Data Scientist

---

## 🙏 Agradecimientos

Construido con ❤️ usando HTML, CSS y JavaScript puros.

**Última actualización**: Febrero 2026
