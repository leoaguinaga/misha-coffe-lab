import React from "react";

export default function Header() {
  return (
    <section className="w-full p-4 md:p-3 bg-background/75 backdrop-blur-3xl text-black sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5" aria-label="MISHA, inicio">
          <img src="/misha.png" className="size-9" alt="" />
          <span className="text-2xl font-extrabold tracking-[-0.035em] text-secondary">MISHA COFFE LAB</span>
        </a>
        <nav className="flex gap-3 lg:gap-4 items-center">
          <a href="/#nosotros" className="max-md:hidden hover:underline underline-offset-4">Nosotros</a>
          <a href="/#especialidades" className="max-md:hidden hover:underline underline-offset-4">Especialidades</a>
          <a href="/#sedes" className="max-md:hidden hover:underline underline-offset-4">Sedes</a>
          <a href="/#experiencias" className="max-md:hidden hover:underline underline-offset-4">Experiencias</a>
          {/* <a href="/#delivery" className="max-md:hidden hover:underline underline-offset-4">Delivery</a> */}
          <a
            href="/carta"
            className="bg-primary text-white rounded-xl px-4 py-1.5 font-medium"
          >
            Carta
          </a>
        </nav>
      </div>
    </section>
  );
}
