import React from 'react';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <main className="w-full min-h-full flex flex-col items-center">
      <Navbar />
      <h1 className="font-pop text-white">Olá Mundo</h1>
    </main>
  );
}

export default Home;
