import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, company, address, username }) => {
  return (
    <div className="border p-4 my-2 rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow">
      <h2 className="text-xl font-bold text-blue-700">{name}</h2>
      <p className="text-gray-500">@{username}</p>
      <div className="mt-2">
        <p className="text-gray-700">{email}</p>
        <p className="text-gray-700">{address.city}, {address.street}</p>
      </div>
      <div className="mt-2 pt-2 border-t">
        <p className="text-sm font-semibold text-gray-800">{company.name}</p>
      </div>
    </div>
  );
};

export default UserCard;