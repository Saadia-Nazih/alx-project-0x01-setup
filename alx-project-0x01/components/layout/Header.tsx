// File: components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';

// Aggiunto il tipo esplicito: React.FC
const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex space-x-4">
      {/* Aggiunta la classe "hover:underline" a ogni link */}
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/posts" className="hover:underline">Posts</Link>
      <Link href="/users" className="hover:underline">Users</Link>
    </header>
  );
};

export default Header;