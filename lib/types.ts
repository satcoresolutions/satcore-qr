import type { LucideIcon } from "lucide-react";

/** Formatos disponibles para descargar el código QR. */
export type QrFormat = "png" | "svg";

/** Tamaños disponibles para exportar el PNG. */
export type QrExportSize = 512 | 1024 | 2048;

/** Niveles de corrección de errores del código QR. */
export type QrErrorLevel = "L" | "M" | "Q" | "H";

/** Datos de presentación de cada tipo de código QR. */
export interface QrKindOption {
  id: import("@/lib/payloads").QrKind;
  label: string;
  hint: string;
}

/** Icono asociado a un tipo de código QR. */
export type QrIconMap = Record<
  import("@/lib/payloads").QrKind,
  LucideIcon
>;

/** Resultado de la construcción del contenido del QR. */
export interface QrPayload {
  value: string;
  issue?: string;
}
