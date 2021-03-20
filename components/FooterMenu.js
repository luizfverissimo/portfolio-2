import React from 'react';
import Link from 'next/link';

function FooterMenu() {
  return (
    <nav className="w-full max-w-screen-xl h-auto flex fixed bottom-0 mb-20">
      <Link href="/projects">
        <a className="chromatic-box px-6 py-3 mr-8 bg-white-theme font-pop font-bold text-black-theme text-2xl transition-all transform hover:text-pink-theme hover:-translate-y-1">
          Projects
        </a>
      </Link>

      <Link href="/about">
        <a className="chromatic-box px-6 py-3 mr-8 bg-white-theme font-pop font-bold text-black-theme text-2xl transition-all transform hover:text-pink-theme hover:-translate-y-1">
          About
        </a>
      </Link>

      <Link href="/contact">
        <a className="chromatic-box px-6 py-3 mr-8 bg-white-theme font-pop font-bold text-black-theme text-2xl transition-all transform hover:text-pink-theme hover:-translate-y-1">
          Contact
        </a>
      </Link>

      
    </nav>
  );
}

export default FooterMenu;
