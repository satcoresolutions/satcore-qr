 <div align="center">

<img src="./public/logo.png" alt="SatCore Solutions" width="220" />

# Generador de QR · SatCore

**Genera y descarga códigos QR personalizados directamente desde tu navegador.**

Microaplicación web para crear códigos QR a partir de diferentes tipos de información, como enlaces web, WhatsApp, redes sociales, pagos, ubicaciones, redes Wi-Fi y texto. Permite preparar el contenido y descargar el código generado sin necesidad de enviar los datos a un servidor.

---

### SOFTWARE AND TECHNOLOGY CORE SOLUTIONS

**SATCORE SOLUTIONS**

_Soluciones digitales seguras, accesibles y funcionales para todos._

[![License](https://img.shields.io/badge/License-SCSAL%201.0-000000.svg)](./LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-SatCore%20Solutions-181717?logo=github)](https://github.com/satcoresolutions)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=nodedotjs)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-Package_Manager-CB3837?logo=npm)](https://www.npmjs.com/)

</div>

---

# Sobre el proyecto

**Generador de QR · SatCore** es una microaplicación desarrollada por **SatCore Solutions**, dentro del ecosistema de herramientas digitales de **SOFTWARE AND TECHNOLOGY CORE SOLUTIONS**.

Su propósito es facilitar la creación de códigos QR para compartir información de manera rápida y práctica, sin necesidad de recurrir a plataformas externas para generar el código.

La aplicación procesa la información directamente en el navegador y permite descargar los códigos generados en formatos PNG y SVG.

Este repositorio forma parte de los proyectos tecnológicos de SatCore Solutions y se distribuye bajo los términos de la **SatCore Solutions Attribution License — SCSAL 1.0**.

---

# SatCore Solutions

**SOFTWARE AND TECHNOLOGY CORE SOLUTIONS**

**Nombre comercial:** SatCore Solutions

**Eslogan:**

> _Soluciones digitales seguras, accesibles y funcionales para todos._

SatCore Solutions desarrolla soluciones digitales orientadas al software, la automatización, la inteligencia artificial, la ciberseguridad, la formación tecnológica y las herramientas digitales.

El ecosistema se estructura alrededor de cinco áreas principales:

### Desarrollo

Creación de sitios web, aplicaciones, herramientas digitales, plataformas y soluciones de software.

### Automatizador

Automatización de procesos, agentes inteligentes, integración de APIs y sistemas capaces de ejecutar tareas de manera automatizada.

### Seguridad

Ciberseguridad, auditoría, análisis de vulnerabilidades, hardening, monitoreo y protección de sistemas.

### Estudio

Formación, documentación, recursos educativos, tutoriales y proyectos orientados al aprendizaje tecnológico.

### Marketing

Diseño de marca, presencia digital, contenido tecnológico, analítica y herramientas digitales para comunicación y posicionamiento.

---

# Características

- **Generación de códigos QR:** creación de códigos a partir de distintos tipos de información.
- **WhatsApp:** preparación de códigos para compartir enlaces de contacto o conversación.
- **Sitios web y menús digitales:** generación de QR a partir de direcciones web.
- **Redes sociales:** creación de códigos para compartir perfiles y enlaces.
- **Pagos:** preparación de códigos a partir de la información admitida por el formulario correspondiente.
- **Ubicaciones:** generación de códigos con información de localización.
- **Redes Wi-Fi:** creación de códigos con los datos necesarios para compartir una conexión compatible.
- **Texto:** conversión de contenido textual en un código QR.
- **Vista previa:** visualización del código generado antes de descargarlo.
- **Descargas:** exportación de los códigos en formatos PNG y SVG.
- **Procesamiento local:** generación en el navegador sin enviar el contenido a un servidor de generación.

Las opciones disponibles y sus campos específicos dependen de la implementación de cada formulario.

---

# Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- Next.js 15.
- React 19.
- TypeScript.
- Tailwind CSS v4.
- Node.js.
- npm.

### Tecnologías principales

**Next.js:** estructura de la aplicación web y gestión de sus componentes.

**React:** construcción de la interfaz de usuario y sus formularios interactivos.

**TypeScript:** definición de tipos y estructuras para los datos utilizados en la aplicación.

**Tailwind CSS v4:** diseño visual, estilos y adaptación a diferentes tamaños de pantalla.

**Generación de QR:** lógica para construir el contenido, configurar la presentación y preparar las descargas de los códigos.

---

# Requisitos

Antes de ejecutar el proyecto, asegúrate de contar con:

- Node.js 18 o superior, siempre que sea compatible con las dependencias instaladas.
- npm.
- Git.
- Un navegador web moderno.

Puedes comprobar las versiones instaladas mediante:

```bash
node -v
npm -v
git --version
```

---

# Instalación

Clona el repositorio:

```bash
git clone https://github.com/satcoresolutions/[REPOSITORIO].git
```

Accede al directorio del proyecto:

```bash
cd [NOMBRE-DEL-PROYECTO]
```

Instala las dependencias:

```bash
npm install
```

**Nota:** reemplaza `[REPOSITORIO]` y `[NOMBRE-DEL-PROYECTO]` por los valores reales del repositorio de GitHub.

---

# Configuración

La aplicación está diseñada para generar los códigos QR en el navegador y, según la configuración descrita, no requiere credenciales de servicios externos para su funcionamiento principal.

No se ha identificado una necesidad de variables de entorno en la configuración descrita.

Si en futuras versiones se incorporan APIs, servicios externos o funcionalidades que requieran credenciales, deberán documentarse las variables necesarias y su configuración.

**Nunca publiques credenciales, tokens, claves privadas, contraseñas u otros secretos en el repositorio.**

---

# Desarrollo

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

Después, abre la siguiente dirección en tu navegador:

```text
http://localhost:3000
```

Los cambios realizados en el código podrán visualizarse durante el desarrollo mediante el servidor local de Next.js.

---

# Producción

Genera la compilación:

```bash
npm run build
```

Inicia la aplicación:

```bash
npm start
```

El comando `npm start` requiere que la compilación se haya generado correctamente y que el script correspondiente esté definido en `package.json`.

---

# Estructura del proyecto

La estructura documentada del proyecto es la siguiente:

```text
generador-qr/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── QrGenerator.tsx
│   └── KindForm.tsx
│
├── lib/
│   ├── payloads.ts
│   └── qr.ts
│
├── public/
│   └── logo.png
│
├── LICENSE
├── README.md
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── ...
```

La estructura es orientativa. Los nombres y archivos deberán corresponder con los existentes en el repositorio, ya que pueden cambiar a medida que evolucione la aplicación.

---

# Arquitectura

La aplicación está organizada en módulos que separan la interfaz de usuario, la construcción de los datos del código QR y su configuración visual.

```text
Aplicación Next.js
       │
       ▼
app/page.tsx
       │
       ▼
components/QrGenerator.tsx
       │
       ├── Selección del tipo de QR
       │
       ├── components/KindForm.tsx
       │
       ▼
lib/payloads.ts
       │
       ▼
Contenido del código QR
       │
       ▼
lib/qr.ts
       │
       ├── Configuración visual
       ├── Presets
       └── Advertencias de contraste
       │
       ▼
Vista previa y descargas
       │
       ├── PNG
       └── SVG
```

### Módulos principales

**`app/page.tsx`**

Define la página principal, presenta la identidad de SatCore Solutions y carga el componente generador.

**`components/QrGenerator.tsx`**

Coordina la interfaz principal, los tipos de códigos disponibles, la vista previa y las opciones de descarga.

**`components/KindForm.tsx`**

Contiene los formularios asociados a los distintos tipos de información que se pueden codificar.

**`lib/payloads.ts`**

Construye el contenido correspondiente a cada tipo de código QR, incluidos formatos específicos como enlaces de WhatsApp y cadenas de configuración Wi-Fi.

**`lib/qr.ts`**

Centraliza la configuración visual, los presets y las advertencias relacionadas con el contraste del código.

---

# Cómo agregar un nuevo tipo de QR

Para incorporar una nueva categoría, sigue la organización modular del proyecto:

1. Añade el nuevo tipo a `QrKind`, `KINDS`, `FormState` e `INITIAL_FORM` en `lib/payloads.ts`.
2. Implementa su lógica dentro de `buildPayload`.
3. Incorpora el formulario correspondiente en `components/KindForm.tsx`.
4. Añade el icono y la opción de selección en `components/QrGenerator.tsx`.
5. Verifica que el contenido generado sea correcto y pueda escanearse con lectores compatibles.
6. Comprueba la vista previa y las descargas en PNG y SVG.

Mantén la lógica específica de cada tipo en los módulos correspondientes para facilitar el mantenimiento y la incorporación de futuras funcionalidades.

---

# Datos y privacidad

Uno de los principios de esta aplicación es procesar el contenido introducido por el usuario directamente en el navegador.

Según el funcionamiento previsto:

- Los datos se utilizan para construir el contenido del código QR.
- La generación se realiza localmente en el navegador.
- No se necesita enviar el contenido a un servidor de generación de QR.
- La aplicación no está diseñada para almacenar de forma centralizada los datos introducidos.

La privacidad efectiva también depende de las dependencias, del código implementado y de los servicios externos que pudieran añadirse en el futuro.

**Importante:** un código QR no cifra automáticamente la información que contiene. Cualquier persona que pueda escanearlo podrá leer el contenido codificado si el formato utilizado no incorpora mecanismos adicionales de protección.

Evita incluir contraseñas, credenciales, datos financieros confidenciales u otra información sensible en códigos QR que vayan a compartirse públicamente.

---

# Seguridad

La seguridad forma parte de los principios de desarrollo de SatCore Solutions.

Si encuentras una vulnerabilidad relacionada con este proyecto, evita publicar detalles técnicos sensibles de forma pública antes de que pueda ser evaluada.

Para reportar una vulnerabilidad:

**Email:** satcoresolutions@gmail.com

Incluye, cuando sea posible:

- Descripción del problema.
- Impacto potencial.
- Pasos generales para reproducirlo.
- Versión afectada.
- Información adicional relevante.

No incluyas credenciales reales ni información personal innecesaria.

---

# Desarrollo y contribuciones

Las contribuciones, correcciones, mejoras y adaptaciones son bienvenidas siempre que respeten la licencia del proyecto.

Antes de realizar cambios importantes, se recomienda:

- Revisar la arquitectura existente.
- Mantener los tipos de TypeScript actualizados.
- Separar la lógica de construcción del contenido de la interfaz.
- Probar los distintos formatos de QR.
- Verificar que los códigos se puedan escanear.
- Comprobar las exportaciones PNG y SVG.
- Actualizar el `CHANGELOG.md` cuando corresponda.

Las contribuciones no eliminan ni sustituyen la autoría original de SatCore Solutions.

---

# Proyectos derivados

Este proyecto puede utilizarse como base para desarrollar nuevas soluciones, de acuerdo con los términos de la licencia.

Se permite, conforme a sus condiciones:

- Copiar.
- Estudiar.
- Modificar.
- Adaptar.
- Ampliar.
- Integrar.
- Redistribuir.
- Utilizar comercialmente.
- Crear proyectos derivados.

Los proyectos derivados deberán reconocer claramente a **SatCore Solutions** como fuente original cuando corresponda según las condiciones de la SCSAL 1.0.

Ejemplo:

> Basado en Generador de QR · SatCore, desarrollado originalmente por SatCore Solutions.

Repositorio original:

```text
https://github.com/satcoresolutions/[REPOSITORIO]
```

---

# Atribución

La atribución constituye una condición de la licencia de este proyecto.

Cuando el código sea copiado, modificado, integrado o redistribuido sustancialmente, deberá conservarse una referencia razonablemente visible a **SatCore Solutions** como desarrollador original, de acuerdo con los términos de la SCSAL 1.0.

Una atribución válida puede adoptar la siguiente forma:

> Este proyecto está basado en Generador de QR · SatCore, desarrollado originalmente por SatCore Solutions.

**Proyecto original:**

```text
https://github.com/satcoresolutions/[REPOSITORIO]
```

**SatCore Solutions:**

```text
https://github.com/satcoresolutions
```

La atribución no deberá presentarse de manera que implique que SatCore Solutions respalda, patrocina, mantiene o garantiza un proyecto derivado cuando dicha relación no exista.

---

# Marca y propiedad intelectual

El código fuente de este proyecto está sujeto a la **SatCore Solutions Attribution License — SCSAL 1.0**.

La licencia del código no transfiere automáticamente derechos sobre:

- SatCore Solutions.
- SOFTWARE AND TECHNOLOGY CORE SOLUTIONS.
- Logotipos.
- Identidad visual.
- Nombres comerciales.
- Marcas.
- Dominios.
- Elementos gráficos.
- Otros signos distintivos asociados con SatCore Solutions.

El uso del código no constituye autorización para representar una relación oficial con SatCore Solutions.

La creación de un proyecto derivado tampoco otorga derechos para registrar o reclamar como propios los signos distintivos de SatCore Solutions.

---

# Dependencias de terceros

Este proyecto utiliza bibliotecas, frameworks y paquetes desarrollados por terceros.

Cada componente permanece sujeto a su propia licencia.

La **SCSAL 1.0** no modifica ni reemplaza las licencias de Next.js, React, TypeScript, Tailwind CSS ni de las demás dependencias incluidas en el proyecto.

Los usuarios y distribuidores deberán respetar las condiciones correspondientes a las dependencias utilizadas.

---

# Despliegue

Este proyecto puede desplegarse en plataformas compatibles con Next.js, como Vercel u otros proveedores que admitan su configuración.

El proceso general incluye:

1. Crear o seleccionar el repositorio de GitHub.
2. Importar el repositorio en la plataforma de despliegue.
3. Configurar las opciones de compilación.
4. Instalar las dependencias.
5. Ejecutar la compilación.
6. Publicar la aplicación.
7. Verificar que los códigos QR se generen y descarguen correctamente.

Como el contenido se genera en el navegador, no se necesita necesariamente un backend dedicado para la funcionalidad descrita.

La plataforma de despliegue y sus servicios permanecen sujetos a sus propios términos y condiciones.

---

# Estado del proyecto

**Estado:** En desarrollo.

**Versión:** 1.0.0 (por confirmar).

**Última actualización:** 2026-10-20.

---

# Roadmap

- [ ] Verificar todos los tipos de códigos QR disponibles.
- [ ] Comprobar la lectura de los códigos generados en diferentes dispositivos.
- [ ] Validar la exportación PNG y SVG.
- [ ] Revisar las advertencias de contraste y legibilidad.
- [ ] Mejorar la accesibilidad de los formularios.
- [ ] Completar las pruebas de compilación y despliegue.
- [ ] Mantener actualizados el README y el CHANGELOG.

---

# Licencia

Este proyecto se distribuye bajo:

## SatCore Solutions Attribution License — SCSAL 1.0

La licencia permite utilizar, estudiar, modificar, integrar y redistribuir el software, incluido su uso comercial, siempre que se respeten las condiciones de atribución y los demás términos establecidos en la licencia.

Consulta el archivo `LICENSE` para conocer los términos completos.

---

# Autoría

## SatCore Solutions

**SOFTWARE AND TECHNOLOGY CORE SOLUTIONS**

_Soluciones digitales seguras, accesibles y funcionales para todos._

**GitHub:**

https://github.com/satcoresolutions

**Email:**

satcoresolutions@gmail.com

---

<div align="center">

**Desarrollado originalmente por SatCore Solutions.**

© SatCore Solutions — Todos los derechos reservados, excepto los derechos concedidos mediante SCSAL 1.0.

</div>
