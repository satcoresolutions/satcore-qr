import type {
  QrErrorLevel,
  QrExportSize,
  QrFormat,
} from "./types";

export const QR_FORMATS: QrFormat[] = ["png", "svg"];

export const QR_EXPORT_SIZES: QrExportSize[] = [
  512,
  1024,
  2048,
];

export const QR_ERROR_LEVELS: {
  value: QrErrorLevel;
  label: string;
}[] = [
  { value: "L", label: "Baja" },
  { value: "M", label: "Media" },
  { value: "Q", label: "Alta" },
  { value: "H", label: "Máxima" },
];

/** Clave utilizada para guardar la preferencia de tema. */
export const THEME_KEY = "satcore-generador-qr-theme";

/** Configuración de los formatos de descarga. */
export const QR_FORMAT_META: Record<
  QrFormat,
  { label: string; extension: string; mimeType: string }
> = {
  png: {
    label: "PNG",
    extension: ".png",
    mimeType: "image/png",
  },
  svg: {
    label: "SVG",
    extension: ".svg",
    mimeType: "image/svg+xml",
  },
};

/** Clases reutilizables de la interfaz. */
export { ui } from "./ui";
