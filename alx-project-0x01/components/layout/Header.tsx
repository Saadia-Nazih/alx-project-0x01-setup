import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex space-x-4">
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/users">Users</Link>
    </header>
  );
};

export default Header;