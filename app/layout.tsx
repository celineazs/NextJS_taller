import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notas.com",
  description: "Página de notas Celine Diaz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-custom antialiased bg-pastelPink text-pastelPurple`}
      >
        <header className="p-4 bg-pastelBlue text-pastelYellow text-center">
          <h1 className="text-3xl font-bold">Bienvenid@ a tus notas </h1>
          <p className="text-xl">¡Organiza tu vida en tiempos! </p>
        </header>
        <main className="p-6">{children}</main>
        <footer className="p-4 bg-lightGray text-pastelBlue text-center">
          <p>NotasCelineDíaz.com </p>
        </footer>
      </body>
    </html>
  );
}
