/**
 * Configuración central de SEO.
 * Define NEXT_PUBLIC_SITE_URL en producción.
 */
export const SITE = {
  name: "Generador de QR",
  brand: "SatCore Solutions",

  description:
    "Crea códigos QR para WhatsApp, sitios web, redes sociales, pagos, menús, ubicaciones, redes Wi-Fi y texto. Descárgalos en PNG o SVG de forma sencilla.",

  shortDescription:
    "Genera y descarga códigos QR personalizados para compartir información y enlaces.",

  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
    /\/+$/,
    "",
  ),

  locale: "es_CO",
  language: "es-CO",
  themeColor: "#132a8e",

  keywords: [
    "generador de QR",
    "crear código QR",
    "generador de códigos QR gratis",
    "código QR para WhatsApp",
    "código QR para redes sociales",
    "código QR para sitios web",
    "código QR para Wi-Fi",
    "código QR para menús digitales",
    "código QR para pagos",
    "código QR de ubicación",
    "descargar código QR PNG",
    "descargar código QR SVG",
    "SatCore Solutions",
    "PWA",
  ],
} as const;

/**
 * Construye una URL absoluta a partir de una ruta.
 */
export const absoluteUrl = (path = "/") =>
  `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
