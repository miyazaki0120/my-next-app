// src/app/components/Header.tsx
'use client';

import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 py-4 shadow">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          My Next App
        </h1>
        <Navbar />
      </div>
    </header>
  );
}
