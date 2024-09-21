# Plantilla de Portafolio para Desarrolladores Backend

Este proyecto es una plantilla de portafolio web dirigido a desarrolladores backend, con el objetivo de ofrecer un recurso gratuito y personalizable para que todos los devs puedan utilizar.

## Installation

1 - Clona este repositorio:

```
  git clone https://github.com/lautiok/portfoliobackend.git
```

2 - Instala las dependencias:

```
npm install
```

3 - Ejecutar:

```
npm run dev
```

## Tecnologias usadas en este proyecto

Typescript, ReactJS, Nextjs

## Contenido del Proyecto

### Datos del Portafolio

Los datos que se mostrarán en el portafolio están almacenados en la carpeta `db/data.json`. Aquí puedes modificar toda la información relacionada con tu perfil, proyectos, habilidades y experiencia.

### Personalización del Nombre de la Aplicación

Para cambiar el nombre de la aplicación que aparece en las etiquetas meta, puedes modificarlo en el archivo `app/layout.tsx`:

### Ícono de la Aplicación

Si deseas reemplazar el ícono de la aplicación, puedes hacerlo en la ruta src/app/favicon.ico. Asegúrate de respetar el nombre del archivo y la extensión .ico.

### Fuente por Defecto

La fuente predeterminada utilizada en esta plantilla es Poppins, pero puedes cambiarla editando el archivo app/layout.tsx.

### Foto de Perfil

La foto de perfil se encuentra en public/images/avatar.webp. Puedes reemplazarla por la imagen que prefieras, pero asegúrate de mantener la extensión .webp

## Proyectos

Los proyectos se encuentran en db/projects.json y están estructurados de la siguiente manera:

```
{
  "projects": [
    {
      "title": "API de comercio electrónico",
      "description": "API RESTful escalable para una plataforma de comercio electrónico",
      "technologies": ["Node.js", "Express", "MongoDB"],
      "link": "https://github.com/lautiok/comercio-electrnico-api"
    }
  ]
}
```

Para agregar o modificar proyectos, simplemente sigue este formato, especificando el título, descripción, tecnologías utilizadas y el enlace al proyecto.

## Habilidades Tecnicas

Las habilidades están en db/habilidades.json y siguen la siguiente estructura:

```
{
  "habilidades": [
    {
      "title": "Node.js"
    },
    {
      "title": "Java"
    },
    {
      "title": "Express"
    },
    {
      "title": "MongoDB"
    }
  ]
}
```

Puedes agregar tantas habilidades como desees, respetando el formato del archivo.

## Experiencia

La experiencia laboral se encuentra en db/experiencia.json y tiene el siguiente formato:

```
{
  "experiencia": [
    {
      "title": "Desarrollador Backend Senior",
      "empresa": "Tech Innovators Inc.",
      "periodo": "2020 - Actualidad",
      "descripcion": "Desarrollador Backend Senior en una empresa de tecnología innovadora, enfocada en el desarrollo de soluciones digitales para mejorar la experiencia del usuario en sus productos y servicios."
    },
    {
      "title": "Ingeniero de Software Backend",
      "empresa": "Data Systems Co.",
      "periodo": "2017 - 2020",
      "descripcion": "Ingeniero de Software Backend en una empresa de tecnología innovadora, enfocada en el desarrollo de soluciones digitales para mejorar la experiencia del usuario en sus productos y servicios."
    }
  ]
}
```

Aquí puedes modificar el título del puesto, el nombre de la empresa, el período de trabajo y la descripción de tus responsabilidades.

## Contribuciones

Si quieres contribuir a este proyecto, no dudes en hacer un fork y crear un pull request. ¡Toda ayuda es bienvenida!

## Licencia

Este proyecto está licenciado bajo la MIT License. Puedes usar, modificar y distribuir libremente este portafolio.
