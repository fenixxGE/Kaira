import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaira — Tu día a día, por fin en un solo lugar.",
  description:
    "Agenda, finanzas, ahorro y bienestar en una sola app. Únete a la lista de espera para ser de las primeras en usar Kaira.",
  openGraph: {
    title: "Kaira — Tu día a día, por fin en un solo lugar.",
    description:
      "Agenda, finanzas, ahorro y bienestar en una sola app. Sin saltar entre cinco apps.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
