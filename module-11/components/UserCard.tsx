"use client";

import { useState } from "react";
import { deleteUser, updateUser } from "@/actions/user.action";

interface UserCardProps {
  user: {
    id: number;
    name: string;
    email: string;
  };
}

export default function UserCard({ user }: UserCardProps) {
  const [editing, setEditing] = useState(false);

  return (
    <div className="bg-[#111111] border border-zinc-900 hover:border-red-900 rounded-3xl p-6 transition-all duration-300">
      
      {/* Avatar */}
      <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-xl font-bold text-red-400 mb-5">
        {user.name.charAt(0)}
      </div>

      {!editing ? (
        <>
          {/* User Info */}
          <h3 className="text-2xl font-semibold">
            {user.name}
          </h3>

          <p className="text-zinc-500 mt-2 break-all">
            {user.email}
          </p>

          <p className="text-sm text-zinc-600 mt-4">
            User ID: #{user.id}
          </p>
        </>
      ) : (
        <form
          action={async (formData) => {
            await updateUser(user.id, {
              name: formData.get("name") as string,
              email: formData.get("email") as string,
            });

            setEditing(false);
          }}
          className="space-y-3"
        >
          <input
            type="text"
            name="name"
            defaultValue={user.name}
            className="w-full bg-[#1a1a1a] border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-red-500"
          />

          <input
            type="email"
            name="email"
            defaultValue={user.email}
            className="w-full bg-[#1a1a1a] border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-red-500"
          />

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 transition py-3 rounded-xl font-medium"
          >
            Save Changes
          </button>
        </form>
      )}

      {/* Buttons */}
      <div className="flex gap-3 mt-6">
        <button
          onClick={() => setEditing(!editing)}
          className="flex-1 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 py-2 rounded-xl transition"
        >
          {editing ? "Cancel" : "Edit"}
        </button>

        <form
          action={async () => {
            await deleteUser(user.id);
          }}
          className="flex-1"
        >
          <button
            type="submit"
            className="w-full bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition py-2 rounded-xl text-red-400"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}