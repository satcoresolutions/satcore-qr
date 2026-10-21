import { Field, Segmented, inputCls } from "./fields";
import {
  SOCIAL_NETWORKS,
  type FormState,
  type QrKind,
  type SocialNetwork,
} from "@/lib/payloads";

type Change = <K extends QrKind>(kind: K, patch: Partial<FormState[K]>) => void;

export default function KindForm({
  kind,
  form,
  onChange,
}: {
  kind: QrKind;
  form: FormState;
  onChange: Change;
}) {
  switch (kind) {
    case "whatsapp": {
      const f = form.whatsapp;
      return (
        <div className="space-y-5">
          <Field label="Número de WhatsApp" hint="Con indicativo del país, sin el signo +.">
            <input
              className={inputCls}
              inputMode="tel"
              autoComplete="tel"
              placeholder="57 300 123 4567"
              value={f.phone}
              onChange={(e) => onChange("whatsapp", { phone: e.target.value })}
            />
          </Field>
          <Field label="Mensaje inicial (opcional)" hint="Aparece escrito cuando la persona abre el chat.">
            <textarea
              className={`${inputCls} min-h-24 resize-y`}
              placeholder="Hola, quiero hacer un pedido."
              value={f.message}
              onChange={(e) => onChange("whatsapp", { message: e.target.value })}
            />
          </Field>
        </div>
      );
    }

    case "link":
      return (
        <Field label="Enlace" hint="Puedes escribirlo sin https://.">
          <input
            className={inputCls}
            inputMode="url"
            placeholder="mirestaurante.com/menu"
            value={form.link.url}
            onChange={(e) => onChange("link", { url: e.target.value })}
          />
        </Field>
      );

    case "social": {
      const f = form.social;
      return (
        <div className="space-y-5">
          <Field label="Red social">
            <select
              className={inputCls}
              value={f.network}
              onChange={(e) => onChange("social", { network: e.target.value as SocialNetwork })}
            >
              {SOCIAL_NETWORKS.map((n) => (
                <option key={n.id} value={n.id}>
                  {n.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Usuario o enlace" hint="Con o sin @. También puedes pegar el enlace completo.">
            <input
              className={inputCls}
              placeholder="@satcore.solutions"
              value={f.handle}
              onChange={(e) => onChange("social", { handle: e.target.value })}
            />
          </Field>
        </div>
      );
    }

    case "payment": {
      const f = form.payment;
      const placeholders = {
        link: "pay.tuempresa.com/cobro",
        paypal: "tuusuario",
        text: "Nequi 300 123 4567 · Nombre Apellido",
      } as const;
      return (
        <div className="space-y-5">
          <Segmented
            label="Tipo de pago"
            value={f.mode}
            onChange={(mode) => onChange("payment", { mode })}
            options={[
              { value: "link", label: "Link de pago" },
              { value: "paypal", label: "PayPal.me" },
              { value: "text", label: "Datos de cuenta" },
            ]}
          />
          <Field
            label={f.mode === "paypal" ? "Usuario de PayPal.me" : f.mode === "link" ? "Link de pago" : "Datos para transferir"}
            hint={
              f.mode === "text"
                ? "Se muestra como texto. Útil para Nequi, Daviplata o una llave."
                : undefined
            }
          >
            {f.mode === "text" ? (
              <textarea
                className={`${inputCls} min-h-24 resize-y`}
                placeholder={placeholders.text}
                value={f.value}
                onChange={(e) => onChange("payment", { value: e.target.value })}
              />
            ) : (
              <input
                className={inputCls}
                placeholder={placeholders[f.mode]}
                value={f.value}
                onChange={(e) => onChange("payment", { value: e.target.value })}
              />
            )}
          </Field>
          {f.mode === "paypal" ? (
            <Field label="Monto (opcional)" hint="Si lo dejas vacío, la persona escribe el valor.">
              <input
                className={inputCls}
                inputMode="decimal"
                placeholder="25.50"
                value={f.amount}
                onChange={(e) => onChange("payment", { amount: e.target.value })}
              />
            </Field>
          ) : null}
        </div>
      );
    }

    case "location": {
      const f = form.location;
      return (
        <div className="space-y-5">
          <Segmented
            label="Cómo indicar el lugar"
            value={f.mode}
            onChange={(mode) => onChange("location", { mode })}
            options={[
              { value: "address", label: "Dirección" },
              { value: "coords", label: "Coordenadas" },
            ]}
          />
          {f.mode === "address" ? (
            <Field label="Dirección o nombre del lugar">
              <input
                className={inputCls}
                placeholder="Carrera 7 #32-16, Bogotá"
                value={f.address}
                onChange={(e) => onChange("location", { address: e.target.value })}
              />
            </Field>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Latitud">
                <input
                  className={inputCls}
                  inputMode="decimal"
                  placeholder="4.6097"
                  value={f.lat}
                  onChange={(e) => onChange("location", { lat: e.target.value })}
                />
              </Field>
              <Field label="Longitud">
                <input
                  className={inputCls}
                  inputMode="decimal"
                  placeholder="-74.0817"
                  value={f.lng}
                  onChange={(e) => onChange("location", { lng: e.target.value })}
                />
              </Field>
            </div>
          )}
        </div>
      );
    }

    case "wifi": {
      const f = form.wifi;
      return (
        <div className="space-y-5">
          <Field label="Nombre de la red (SSID)">
            <input
              className={inputCls}
              autoComplete="off"
              placeholder="Hotel-Huespedes"
              value={f.ssid}
              onChange={(e) => onChange("wifi", { ssid: e.target.value })}
            />
          </Field>
          <Segmented
            label="Seguridad"
            value={f.security}
            onChange={(security) => onChange("wifi", { security })}
            options={[
              { value: "WPA", label: "WPA/WPA2" },
              { value: "WEP", label: "WEP" },
              { value: "nopass", label: "Sin contraseña" },
            ]}
          />
          {f.security !== "nopass" ? (
            <Field label="Contraseña">
              <input
                className={inputCls}
                autoComplete="off"
                value={f.password}
                onChange={(e) => onChange("wifi", { password: e.target.value })}
              />
            </Field>
          ) : null}
          <label className="flex items-center gap-2.5 text-sm text-ink">
            <input
              type="checkbox"
              className="size-4 accent-[var(--neon)]"
              checked={f.hidden}
              onChange={(e) => onChange("wifi", { hidden: e.target.checked })}
            />
            Es una red oculta
          </label>
        </div>
      );
    }

    case "text":
      return (
        <Field label="Texto">
          <textarea
            className={`${inputCls} min-h-32 resize-y`}
            placeholder="Escribe lo que quieras codificar."
            value={form.text.text}
            onChange={(e) => onChange("text", { text: e.target.value })}
          />
        </Field>
      );
  }
}
