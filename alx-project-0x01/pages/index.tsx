import React from 'react';
import Header from '@/components/layout/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="flex justify-center items-center h-screen">
        <h1 className="text-7xl font-thin">[" Welcome to our Application!"]</h1>
      </main>
    </div>
  )
}

export default Home;