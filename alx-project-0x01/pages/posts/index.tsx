// File: pages/index.tsx
import React from 'react';
import Header from '@/components/layout/Header'; // <-- Importa il componente Header

const Home: React.FC = () => {
  return (
    <div>
      <Header /> {/* <-- Usa il componente Header */}
      <main className="flex justify-center items-center h-screen">
        {/* Testo del titolo modificato come richiesto */}
        <h1 className="text-7xl font-thin">Welcome to our Application!</h1>
      </main>
    </div>
  )
}

export default Home;