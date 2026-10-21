export type ErrorLevel = "L" | "M" | "Q" | "H";

export interface QrStyle {
  fg: string;
  bg: string;
  margin: number;
  ecc: ErrorLevel;
  exportSize: 512 | 1024 | 2048;
}

export const DEFAULT_STYLE: QrStyle = {
  fg: "#0a0a0a",
  bg: "#ffffff",
  margin: 2,
  ecc: "M",
  exportSize: 1024,
};

export const PRESETS: { id: string; label: string; fg: string; bg: string }[] = [
  { id: "classic", label: "Clásico", fg: "#0a0a0a", bg: "#ffffff" },
  { id: "satcore", label: "SatCore", fg: "#132a8e", bg: "#ffffff" },
  { id: "graphite", label: "Grafito", fg: "#111418", bg: "#f6f9fc" },
];

export function qrOptions(style: QrStyle, width: number) {
  return {
    width,
    margin: style.margin,
    errorCorrectionLevel: style.ecc,
    color: { dark: style.fg, light: style.bg },
  } as const;
}

function luminance(hex: string): number {
  const n = parseInt(hex.slice(1), 16);
  const channels = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

/** Devuelve una advertencia si los colores pueden dificultar la lectura. */
export function readabilityWarning(fg: string, bg: string): string | null {
  const lf = luminance(fg);
  const lb = luminance(bg);
  if (lf > lb) {
    return "Colores invertidos: muchos lectores no los entienden. Usa el código oscuro sobre fondo claro.";
  }
  const ratio = (lb + 0.05) / (lf + 0.05);
  if (ratio < 4) {
    return "El contraste es bajo y el código puede costar leerse. Oscurece el código o aclara el fondo.";
  }
  return null;
}
