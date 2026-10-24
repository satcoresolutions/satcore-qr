# Changelog

Todos los cambios importantes de este proyecto serán documentados en este archivo.

El formato sigue una estructura basada en versiones y categorías de cambios.

---

## [Unreleased]

### Added

- Pendiente de nuevas funcionalidades.

### Changed

- Pendiente de mejoras en la experiencia de usuario y la interfaz.

### Fixed

- Pendiente de correcciones.

### Removed

- Sin cambios registrados.

### Security

- Pendiente de mejoras o actualizaciones de seguridad.

---

## [1.2.0] - 2026-10-24

### Added

- Incorporación de `lucide-react` para los iconos de la interfaz.
- Incorporación de `qrcode` y `@types/qrcode` para la generación de códigos QR y el soporte de TypeScript.
- Definición de tipos para los formatos de descarga PNG y SVG, los tamaños de exportación y los niveles de corrección de errores.
- Centralización de clases reutilizables mediante `lib/ui.ts`.

### Changed

- Actualización de `components/QrGenerator.tsx` para utilizar los estilos y tokens visuales de SatCore Solutions.
- Adaptación de botones, pestañas, paletas de colores, controles de configuración y panel de vista previa al sistema de estilos compartido.
- Reutilización de las clases de interfaz definidas en `lib/ui.ts` para mantener la coherencia visual.
- Actualización de los estilos de bordes, fondos, textos, botones y controles de rango.
- Organización de las constantes de configuración relacionadas con los formatos y tamaños de exportación y los niveles de corrección de errores.

### Fixed

- Corrección de la dependencia faltante `qrcode` que impedía compilar el componente `QrGenerator`.
- Incorporación de `@types/qrcode` para resolver las definiciones de tipos de TypeScript.

### Removed

- Eliminación de referencias a clases visuales antiguas como `border-line`, `text-ink` y `bg-neon` en el componente actualizado.

### Security

- Se mantiene la generación de códigos QR en el navegador, sin incorporar una base de datos para la funcionalidad principal.
- Se mantiene la advertencia sobre la ausencia de cifrado en los datos codificados en un QR.

---

## [1.1.0] - 2026-10-20

### Added

- Lanzamiento inicial de **Generador de QR · SatCore**.
- Generación de códigos QR para WhatsApp, enlaces web, menús digitales, redes sociales, pagos, ubicaciones, redes Wi-Fi y texto.
- Formularios adaptados al tipo de contenido que se desea compartir.
- Vista previa de los códigos QR generados.
- Opciones de descarga de códigos QR en formatos PNG y SVG.
- Configuración de estilos y ajustes visuales del código QR.
- Presets de diseño y advertencias relacionadas con el contraste.
- Construcción del contenido QR mediante módulos reutilizables en `lib/payloads.ts`.
- Configuración de estilos y opciones de generación mediante `lib/qr.ts`.
- Interfaz desarrollada con Next.js, React, TypeScript y Tailwind CSS.
- Incorporación de la identidad visual de SatCore Solutions y su eslogan: «Soluciones digitales seguras, accesibles y funcionales para todos».
- Procesamiento local en el navegador, sin necesidad de una base de datos para la funcionalidad principal.

### Security

- La generación de códigos QR se realiza localmente en el navegador, según la arquitectura documentada.
- Se informa al usuario de que los códigos QR no cifran la información que contienen.
