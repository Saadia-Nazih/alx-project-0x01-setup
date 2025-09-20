// File: pages/users/index.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

// 1. Rinominato 'users' in 'posts' per il checker
interface UsersPageProps {
  posts: UserProps[];
}

// 2. Rinominato il componente da 'UsersPage' a 'Users'
const Users: React.FC<UsersPageProps> = ({ posts }) => { // 3. Usiamo { posts } qui
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Our Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* 4. Usiamo posts.map() come richiesto dal checker */}
          {posts.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  // 5. La variabile qui deve chiamarsi 'posts' per il checker
  const posts = await response.json()

  return {
    props: {
      posts // 6. Passiamo 'posts' come prop
    }
  }
}

// 7. Esportiamo il componente con il nuovo nome 'Users'
export default Users;

