// File: components/common/UserModal.tsx
import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input type="text" name="name" value={user.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
            <input type="text" name="username" value={user.username} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" name="email" value={user.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
          </div>
          <div className="flex justify-end items-center gap-4 mt-4">
            <button type="button" onClick={onClose} className="text-gray-600">Cancel</button>
            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;