import Link from "next/link";
import { FENIXX_URL, HENKOGEN_URL } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-ink2/10 bg-cream py-10">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-5 sm:px-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <span
              className="block h-7 w-7 rounded-md"
              style={{ background: "linear-gradient(135deg, #95BC9F 0%, #5B8B6A 100%)" }}
            />
            <span className="text-[17px] font-semibold text-ink">Kaira</span>
          </div>
          <p className="max-w-[280px] text-[13px] leading-[1.6] text-ink3">
            Tu día a día, por fin en un solo lugar.
          </p>
        </div>

        {/* Legales */}
        <div className="md:mx-auto">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-ink3">
            Enlaces
          </p>
          <ul className="space-y-2 text-[13px]">
            <li>
              <Link href="#waitlist" className="text-ink2 hover:text-salvia-dark">
                Lista de espera
              </Link>
            </li>
            <li>
              <a href="mailto:hola@kaira.app" className="text-ink2 hover:text-salvia-dark">
                Contacto
              </a>
            </li>
            <li>
              <Link href="/privacidad" className="text-ink2 hover:text-salvia-dark">
                Privacidad
              </Link>
            </li>
          </ul>
        </div>

        {/* Ecosistema */}
        <div className="md:text-right">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-ink3">
            Ecosistema
          </p>
          <ul className="space-y-2 text-[13px]">
            <li>
              <a
                href={FENIXX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink2 hover:text-salvia-dark"
              >
                Bienestar impulsado por Fenixx →
              </a>
            </li>
            <li>
              <a
                href={HENKOGEN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink3 hover:text-ink2"
              >
                Creado por el equipo de Henkogen
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-[1200px] px-5 text-center text-[11px] text-ink3 sm:px-8">
        © {new Date().getFullYear()} Kaira
      </p>
    </footer>
  );
}
