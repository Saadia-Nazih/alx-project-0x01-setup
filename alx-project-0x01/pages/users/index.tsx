// File: pages/users/index.tsx
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import UserModal from '@/components/common/UserModal'; // Importa il nuovo modal
import { UserProps, UserData } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users: initialUsers }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState<UserProps[]>(initialUsers);

  const handleAddUser = (newUser: UserData) => {
    // Aggiungiamo il nuovo utente alla lista (simulando i dati mancanti)
    const userWithFullData: UserProps = {
      ...newUser,
      id: users.length + 1,
      address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } },
      phone: '',
      website: '',
      company: { name: 'New Company', catchPhrase: '', bs: '' },
    };
    setUsers([userWithFullData, ...users]);
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Our Users</h1>
          <button onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add User
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
      {/* Mostra il modal solo se isModalOpen è true */}
      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}

// Ho rinominato 'posts' in 'users' per coerenza con il resto del codice
export default Users;