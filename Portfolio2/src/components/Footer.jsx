import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-[#002a32] text-[#e6ff2b] p-4 text-center">
        <p>© 2025 Ignacio de Loyola Díaz Jiménez. Todos los derechos reservados.</p>
        <p>Email: ignaciodeloyoladiazjimenez@gmail.com</p>
        <div class="flex justify-center gap-4 mt-2">
          <a href="www.linkedin.com/in/ignacio-de-loyola-díaz-jiménez" class="hover:text-white">LinkedIn</a>
          <a href="https://github.com/ignaciodiazjimenez" class="hover:text-white">GitHub</a>
          <a href="https://x.com/IgnacioDiazDev" class="hover:text-white">Twitter</a>
          <a href="https://mnf.red/ignaciodeloyoladiazjimenez/timeline" class="hover:text-white">SoyManfredita</a>
        </div>
      </footer>
    );
}

export default Footer;
