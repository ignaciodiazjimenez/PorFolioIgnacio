import React from 'react';

const Header = () => {
    return (
        <header class="flex justify-between items-center p-4 bg-[#00444f] text-[#e6ff2b] shadow-lg">
        <h1 class="text-3xl font-bold">ILDJ</h1>
        <nav>
          <ul class="flex gap-4">
            <li><a href="/#proyectos" class="hover:underline">Proyectos</a></li>
            <li><a href="/#trayectoria" class="hover:underline">Trayectoria</a></li>
            <li><a href="/#sobre-mi" class="hover:underline">Sobre Mí</a></li>
            <li><a href="/contacto" class="hover:underline">Contacto</a></li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;
