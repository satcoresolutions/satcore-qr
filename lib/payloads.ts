export type QrKind =
  | "whatsapp"
  | "link"
  | "social"
  | "payment"
  | "location"
  | "wifi"
  | "text";

export const KINDS: { id: QrKind; label: string; hint: string }[] = [
  { id: "whatsapp", label: "WhatsApp", hint: "Abre un chat con tu número y un mensaje listo." },
  { id: "link", label: "Menú o web", hint: "Lleva a cualquier enlace: carta, catálogo, sitio." },
  { id: "social", label: "Redes", hint: "Perfil de Instagram, TikTok, Facebook y más." },
  { id: "payment", label: "Pagos", hint: "Link de pago, PayPal.me o los datos de tu cuenta." },
  { id: "location", label: "Ubicación", hint: "Abre tu punto exacto en Google Maps." },
  { id: "wifi", label: "Wi-Fi", hint: "Conecta a tus clientes sin dictar la clave." },
  { id: "text", label: "Texto", hint: "Cualquier texto libre." },
];

export type SocialNetwork =
  | "instagram"
  | "tiktok"
  | "facebook"
  | "x"
  | "linkedin"
  | "youtube";

export const SOCIAL_NETWORKS: { id: SocialNetwork; label: string }[] = [
  { id: "instagram", label: "Instagram" },
  { id: "tiktok", label: "TikTok" },
  { id: "facebook", label: "Facebook" },
  { id: "x", label: "X" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "youtube", label: "YouTube" },
];

export interface FormState {
  whatsapp: { phone: string; message: string };
  link: { url: string };
  social: { network: SocialNetwork; handle: string };
  payment: {
    mode: "link" | "paypal" | "text";
    value: string;
    amount: string;
  };
  location: {
    mode: "address" | "coords";
    address: string;
    lat: string;
    lng: string;
  };
  wifi: {
    ssid: string;
    password: string;
    security: "WPA" | "WEP" | "nopass";
    hidden: boolean;
  };
  text: { text: string };
}

export const INITIAL_FORM: FormState = {
  whatsapp: { phone: "", message: "" },
  link: { url: "" },
  social: { network: "instagram", handle: "" },
  payment: { mode: "link", value: "", amount: "" },
  location: { mode: "address", address: "", lat: "", lng: "" },
  wifi: { ssid: "", password: "", security: "WPA", hidden: false },
  text: { text: "" },
};

export interface Payload {
  /** Contenido final que se codifica en el QR. Vacío si aún no se puede generar. */
  value: string;
  /** Qué falta o qué está mal, en lenguaje simple. */
  issue?: string;
}

const EMPTY: Payload = { value: "" };

function normalizeUrl(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const withScheme = /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;
  try {
    const url = new URL(withScheme);
    if (!url.hostname.includes(".")) return null;
    return url.toString();
  } catch {
    return null;
  }
}

function cleanHandle(raw: string): string {
  return raw.trim().replace(/^@+/, "").replace(/\s+/g, "");
}

function escapeWifi(value: string): string {
  return value.replace(/([\\;,:"])/g, "\\$1");
}

export function buildPayload(kind: QrKind, form: FormState): Payload {
  switch (kind) {
    case "whatsapp": {
      const { phone, message } = form.whatsapp;
      if (!phone.trim()) return EMPTY;
      const digits = phone.replace(/\D/g, "");
      if (digits.length < 8) {
        return {
          value: "",
          issue: "Incluye el indicativo del país. Ejemplo: 57 300 123 4567.",
        };
      }
      const text = message.trim();
      return {
        value: `https://wa.me/${digits}${text ? `?text=${encodeURIComponent(text)}` : ""}`,
      };
    }

    case "link": {
      if (!form.link.url.trim()) return EMPTY;
      const url = normalizeUrl(form.link.url);
      return url
        ? { value: url }
        : { value: "", issue: "Ese enlace no parece válido. Ejemplo: mirestaurante.com/menu." };
    }

    case "social": {
      const { network, handle } = form.social;
      if (!handle.trim()) return EMPTY;
      if (/^https?:\/\//i.test(handle.trim())) {
        const url = normalizeUrl(handle);
        return url ? { value: url } : { value: "", issue: "Ese enlace no parece válido." };
      }
      const user = cleanHandle(handle);
      const urls: Record<SocialNetwork, string> = {
        instagram: `https://instagram.com/${user}`,
        tiktok: `https://www.tiktok.com/@${user}`,
        facebook: `https://facebook.com/${user}`,
        x: `https://x.com/${user}`,
        linkedin: `https://www.linkedin.com/in/${user}`,
        youtube: `https://www.youtube.com/@${user}`,
      };
      return { value: urls[network] };
    }

    case "payment": {
      const { mode, value, amount } = form.payment;
      if (!value.trim()) return EMPTY;
      if (mode === "link") {
        const url = normalizeUrl(value);
        return url
          ? { value: url }
          : { value: "", issue: "Pega el link de pago completo." };
      }
      if (mode === "paypal") {
        const user = cleanHandle(value).replace(/^.*paypal\.me\//i, "");
        const amt = amount.trim().replace(",", ".");
        if (amt && !/^\d+(\.\d{1,2})?$/.test(amt)) {
          return { value: "", issue: "El monto debe ser un número. Ejemplo: 25.50." };
        }
        return { value: `https://paypal.me/${user}${amt ? `/${amt}` : ""}` };
      }
      return { value: value.trim() };
    }

    case "location": {
      const { mode, address, lat, lng } = form.location;
      if (mode === "address") {
        if (!address.trim()) return EMPTY;
        return {
          value: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.trim())}`,
        };
      }
      if (!lat.trim() && !lng.trim()) return EMPTY;
      const la = Number(lat.replace(",", "."));
      const lo = Number(lng.replace(",", "."));
      if (
        !Number.isFinite(la) ||
        !Number.isFinite(lo) ||
        Math.abs(la) > 90 ||
        Math.abs(lo) > 180
      ) {
        return {
          value: "",
          issue: "Latitud entre -90 y 90, longitud entre -180 y 180.",
        };
      }
      return { value: `https://www.google.com/maps?q=${la},${lo}` };
    }

    case "wifi": {
      const { ssid, password, security, hidden } = form.wifi;
      if (!ssid.trim()) return EMPTY;
      if (security !== "nopass" && !password) {
        return { value: "", issue: "Escribe la contraseña o elige «Sin contraseña»." };
      }
      const parts = [
        `T:${security}`,
        `S:${escapeWifi(ssid)}`,
        security !== "nopass" ? `P:${escapeWifi(password)}` : "",
        hidden ? "H:true" : "",
      ].filter(Boolean);
      return { value: `WIFI:${parts.join(";")};;` };
    }

    case "text": {
      return form.text.text.trim() ? { value: form.text.text } : EMPTY;
    }
  }
}
