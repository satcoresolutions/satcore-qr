
import Image from "next/image";
import QrGenerator from "@/components/QrGenerator";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-8 sm:px-8 sm:pt-12">
      <header className="mb-10">
        {/* Identidad corporativa */}
        <div className="mb-10 flex flex-col items-start gap-3">
          <Image
            src="/logo.png"
            alt="SatCore Solutions"
            width={200}
            height={65}
            priority
            className="h-auto w-[160px] object-contain sm:w-[200px]"
          />

          <p className="max-w-md text-sm leading-relaxed text-muted">
            Soluciones digitales seguras, accesibles y funcionales para todos.
          </p>
        </div>

        {/* Encabezado de la aplicación */}
        <div className="max-w-2xl">
          <h1 className="mt-2 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Generador de QR
          </h1>

          <p className="mt-4 text-base leading-relaxed text-muted">
            Elige qué quieres compartir, llena los datos y descarga tu código
            al instante. Todo se genera en tu navegador: no guardamos nada.
          </p>
        </div>
      </header>

      <QrGenerator />
    </main>
  );
}
