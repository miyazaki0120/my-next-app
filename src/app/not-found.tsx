// src/app/not-found.tsx
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
        お探しのページは見つかりませんでした。
      </p>
      <Link
        href="/"
        className="text-blue-600 hover:underline dark:text-blue-400"
      >
        ホームに戻る
      </Link>
    </main>
  );
}
