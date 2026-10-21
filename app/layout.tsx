import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Generador de QR · SatCore",
  description:
    "Crea códigos QR para WhatsApp, menús, redes sociales, pagos, ubicación y Wi-Fi. Descárgalos en PNG o SVG.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
