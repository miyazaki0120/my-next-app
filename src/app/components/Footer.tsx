// src/app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 py-4 text-center text-sm text-gray-600 dark:text-gray-300">
      &copy; {new Date().getFullYear()} My Next App. All rights reserved.
    </footer>
  );
}
