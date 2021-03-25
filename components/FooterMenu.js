import React from 'react';
import Link from 'next/link';

function FooterMenu() {
  return (
    <nav className="w-full h-auto flex justify-center sm:justify-start fixed bottom-0 mb-0 bg-gradient-to-t from-black-theme via-black-theme sm:from-transparent py-3 sm:mb-10 sm:max-w-screen-xl sm:py-0 sm:px-4 xl:px-0 ">
      <Link href="/projects">
        <a className="chromatic-box px-6 py-3 mr-2 sm:mr-8 bg-white-theme font-pop font-bold text-black-theme text-lg sm:text-2xl transition-all transform hover:text-pink-theme hover:-translate-y-1">
          Projects
        </a>
      </Link>

      <Link href="/about">
        <a className="chromatic-box px-3 sm:px-6 py-3 mr-2 sm:mr-8 bg-white-theme font-pop font-bold text-black-theme text-lg sm:text-2xl transition-all transform hover:text-pink-theme hover:-translate-y-1">
          About
        </a>
      </Link>

      <Link href="/contact">
        <a className="chromatic-box px-6 py-3 bg-white-theme font-pop font-bold text-black-theme text-lg sm:text-2xl transition-all transform hover:text-pink-theme hover:-translate-y-1">
          Contact
        </a>
      </Link>

      
    </nav>
  );
}

export default FooterMenu;
