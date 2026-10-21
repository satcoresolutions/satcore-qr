"use client";

import { useEffect, useMemo, useState } from "react";
import QRCode from "qrcode";
import {
  Check,
  Copy,
  Download,
  Link2,
  MapPin,
  MessageCircle,
  Share2,
  Type,
  Wallet,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import KindForm from "./KindForm";
import { Segmented } from "./fields";
import {
  INITIAL_FORM,
  KINDS,
  buildPayload,
  type FormState,
  type QrKind,
} from "@/lib/payloads";
import {
  DEFAULT_STYLE,
  PRESETS,
  qrOptions,
  readabilityWarning,
  type ErrorLevel,
  type QrStyle,
} from "@/lib/qr";

const ICONS: Record<QrKind, LucideIcon> = {
  whatsapp: MessageCircle,
  link: Link2,
  social: Share2,
  payment: Wallet,
  location: MapPin,
  wifi: Wifi,
  text: Type,
};

function triggerDownload(href: string, filename: string) {
  const a = document.createElement("a");
  a.href = href;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export default function QrGenerator() {
  const [kind, setKind] = useState<QrKind>("whatsapp");
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [style, setStyle] = useState<QrStyle>(DEFAULT_STYLE);
  const [preview, setPreview] = useState("");
  const [renderError, setRenderError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const payload = useMemo(() => buildPayload(kind, form), [kind, form]);
  const warning = useMemo(() => readabilityWarning(style.fg, style.bg), [style.fg, style.bg]);
  const current = KINDS.find((k) => k.id === kind)!;

  function updateForm<K extends QrKind>(k: K, patch: Partial<FormState[K]>) {
    setForm((prev) => ({ ...prev, [k]: { ...prev[k], ...patch } }));
  }

  useEffect(() => {
    if (!payload.value) {
      setPreview("");
      setRenderError(null);
      return;
    }
    let cancelled = false;
    QRCode.toDataURL(payload.value, qrOptions(style, 640))
      .then((url) => {
        if (cancelled) return;
        setPreview(url);
        setRenderError(null);
      })
      .catch(() => {
        if (cancelled) return;
        setPreview("");
        setRenderError("Hay demasiado contenido para un solo QR. Acórtalo o baja la corrección de errores.");
      });
    return () => {
      cancelled = true;
    };
  }, [payload.value, style]);

  async function download(format: "png" | "svg") {
    if (!payload.value) return;
    const name = `qr-${kind}`;
    if (format === "png") {
      const url = await QRCode.toDataURL(payload.value, qrOptions(style, style.exportSize));
      triggerDownload(url, `${name}.png`);
      return;
    }
    const svg = await QRCode.toString(payload.value, {
      type: "svg",
      margin: style.margin,
      errorCorrectionLevel: style.ecc,
      color: { dark: style.fg, light: style.bg },
    });
    const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
    triggerDownload(url, `${name}.svg`);
    URL.revokeObjectURL(url);
  }

  async function copyContent() {
    if (!payload.value) return;
    await navigator.clipboard.writeText(payload.value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  const ready = Boolean(preview);

  return (
    <div>
      <div role="tablist" aria-label="Tipo de código QR" className="-mx-1 flex flex-wrap gap-2">
        {KINDS.map((k) => {
          const Icon = ICONS[k.id];
          const active = k.id === kind;
          return (
            <button
              key={k.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setKind(k.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active
                  ? "border-neon bg-neon/10 text-ink"
                  : "border-line text-muted hover:border-muted/60 hover:text-ink"
              }`}
            >
              <Icon className={`size-4 ${active ? "text-neon" : ""}`} aria-hidden />
              {k.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
        <div>
          <h2 className="font-display text-xl font-semibold">{current.label}</h2>
          <p className="mt-1 text-sm text-muted">{current.hint}</p>

          <div className="mt-7 max-w-xl" role="tabpanel">
            <KindForm kind={kind} form={form} onChange={updateForm} />
          </div>

          <div className="mt-12 max-w-xl border-t border-line pt-8">
            <h3 className="font-display text-base font-semibold">Estilo del código</h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {PRESETS.map((p) => {
                const active = style.fg === p.fg && style.bg === p.bg;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setStyle((s) => ({ ...s, fg: p.fg, bg: p.bg }))}
                    aria-pressed={active}
                    className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors ${
                      active ? "border-neon text-ink" : "border-line text-muted hover:text-ink"
                    }`}
                  >
                    <span
                      aria-hidden
                      className="size-4 rounded-sm border border-line"
                      style={{ background: `linear-gradient(135deg, ${p.fg} 50%, ${p.bg} 50%)` }}
                    />
                    {p.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-5">
              <label className="flex items-center gap-3 text-sm">
                <input
                  type="color"
                  value={style.fg}
                  onChange={(e) => setStyle((s) => ({ ...s, fg: e.target.value }))}
                  className="size-9 cursor-pointer rounded-md border border-line bg-surface p-0.5"
                />
                Código
              </label>
              <label className="flex items-center gap-3 text-sm">
                <input
                  type="color"
                  value={style.bg}
                  onChange={(e) => setStyle((s) => ({ ...s, bg: e.target.value }))}
                  className="size-9 cursor-pointer rounded-md border border-line bg-surface p-0.5"
                />
                Fondo
              </label>
            </div>

            {warning ? (
              <p role="status" className="mt-4 text-sm text-yellow">
                {warning}
              </p>
            ) : null}

            <div className="mt-6">
              <label className="flex items-center justify-between text-sm font-medium">
                Margen blanco
                <span className="text-muted">{style.margin}</span>
              </label>
              <input
                type="range"
                min={1}
                max={6}
                step={1}
                value={style.margin}
                onChange={(e) => setStyle((s) => ({ ...s, margin: Number(e.target.value) }))}
                className="mt-2 w-full accent-[var(--neon)]"
                aria-label="Margen blanco"
              />
            </div>

            <div className="mt-6">
              <p className="mb-2 text-sm font-medium">Corrección de errores</p>
              <Segmented<ErrorLevel>
                label="Corrección de errores"
                value={style.ecc}
                onChange={(ecc) => setStyle((s) => ({ ...s, ecc }))}
                options={[
                  { value: "L", label: "Baja" },
                  { value: "M", label: "Media" },
                  { value: "Q", label: "Alta" },
                  { value: "H", label: "Máxima" },
                ]}
              />
              <p className="mt-2 text-xs text-muted">
                Más corrección soporta golpes y rayones, pero el código se ve más denso.
              </p>
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-8 lg:self-start">
          <div
            className={`rounded-2xl border p-5 transition-colors ${
              ready ? "border-neon/60" : "border-line"
            }`}
          >
            <div
              className="mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-xl"
              style={{ background: style.bg }}
            >
              {ready ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={preview} alt={`Código QR de ${current.label}`} className="size-full" />
              ) : (
                <div className="flex size-full items-center justify-center bg-surface p-8 text-center text-sm text-muted">
                  {renderError ?? payload.issue ?? "Tu código aparecerá aquí cuando llenes los datos."}
                </div>
              )}
            </div>

            {ready ? (
              <p className="mt-4 break-all text-xs text-muted line-clamp-2" title={payload.value}>
                {payload.value}
              </p>
            ) : null}

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                type="button"
                disabled={!ready}
                onClick={() => download("png")}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-neon px-4 py-2.5 text-sm font-semibold text-base transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <Download className="size-4" aria-hidden />
                Descargar PNG
              </button>
              <button
                type="button"
                disabled={!ready}
                onClick={() => download("svg")}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-muted/60 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <Download className="size-4" aria-hidden />
                Descargar SVG
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-muted">
                Tamaño PNG
                <Segmented<QrStyle["exportSize"]>
                  label="Tamaño del PNG"
                  value={style.exportSize}
                  onChange={(exportSize) => setStyle((s) => ({ ...s, exportSize }))}
                  options={[
                    { value: 512, label: "512" },
                    { value: 1024, label: "1024" },
                    { value: 2048, label: "2048" },
                  ]}
                />
              </div>
              <button
                type="button"
                disabled={!ready}
                onClick={copyContent}
                className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink disabled:cursor-not-allowed disabled:opacity-30"
              >
                {copied ? <Check className="size-4 text-success" aria-hidden /> : <Copy className="size-4" aria-hidden />}
                {copied ? "Copiado" : "Copiar contenido"}
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
