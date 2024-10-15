Latinad Player
Un reproductor de anuncios simple desarrollado con Electron, que muestra imágenes y videos desde una carpeta local. El reproductor simula la funcionalidad de un reproductor de anuncios real, permitiendo la gestión y visualización de contenido multimedia.

Tabla de Contenidos
Características
Estructura del Proyecto
Instalación
Uso
Configuración del Backend
Dependencias
Características
Reproducción de anuncios en bucle (imágenes y videos).
Control de duración de cada anuncio.
Oculte el cursor del mouse cuando está sobre el reproductor.
Fácil de configurar y extender.
Estructura del Proyecto
challenge-player/
│
├── assets/                  # Contiene archivos multimedia (imágenes y videos)
│   ├── imagen-cuadrada-00001.jpg
│   ├── imagen-cuadrada-00002.jpg
│   ├── imagen-cuadrada-00003.jpg
│   ├── imagen-cuadrada-00004.jpg
│   ├── video-cuadrado-00001.mp4
│   ├── video-cuadrado-00002.mp4
│   └── video-cuadrado-00005.mp4
│
├── database/                # Contiene el archivo de base de datos o mock de la base de datos
│   └── ads.db               # Base de datos para almacenar anuncios (usando NeDB)
│
├── src/                     # Código fuente
│   ├── main.js              # Código principal de Electron (gestión de ventana)
│   ├── player.js            # Lógica de reproducción de anuncios
│   ├── contentManager.js     # Descarga, gestión de contenido y consultas al backend
│   ├── db.js                # Funciones para la base de datos (NeDB)
│   └── utils.js             # Funciones auxiliares (helpers)
│
├── index.html               # Página principal del reproductor
├── style.css                # Estilos para el reproductor
├── app.js                   # Archivo de script para inicializar el reproductor
├── package.json             # Archivo de configuración de Node.js
└── README.md                # Documentación del proyecto

Instalación
Clona el repositorio
Instala Node.js

Instala las dependencias:
Instala Electron


Inicia la aplicación: En la raíz del proyecto, ejecuta:
npm start

Uso
Al iniciar la aplicación, el reproductor comenzará a mostrar anuncios de forma cíclica. La duración de cada anuncio y el tipo de contenido (imagen o video) se define en el archivo app.js, donde se encuentran configurados los anuncios.

Pasos para usar el reproductor:
Ejecuta la aplicación: Asegúrate de seguir los pasos en la sección de instalación y luego ejecutar npm start en tu terminal.

Visualiza el contenido: El reproductor mostrará automáticamente los anuncios disponibles en la carpeta assets. Los anuncios se reproducen uno tras otro en bucle.

Interacción con el reproductor: El reproductor tiene la capacidad de ocultar el cursor del mouse cuando está sobre la ventana del reproductor, lo que proporciona una experiencia más inmersiva.

Configuración del Backend
Este proyecto simula la funcionalidad de un backend utilizando Mockoon. 
(http://localhost:3001/ads)

Dependencias:

electron: Para crear aplicaciones de escritorio con JavaScript.
nedb: Base de datos en memoria para almacenamiento de anuncios.
