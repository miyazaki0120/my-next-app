// src/app/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-base font-normal ${
            pathname === item.href
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-700 dark:text-gray-200 hover:underline'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
