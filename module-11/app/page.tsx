import { createUser, getUsers } from "@/actions/user.action";
import UserCard from "@/components/UserCard";

export default async function Page() {
  const users = await getUsers();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold tracking-tight text-red-500">
            User Dashboard
          </h1>

          <p className="text-zinc-500 mt-3 text-lg">
            Next.js + Drizzle ORM + Server Actions
          </p>
        </div>

        {/* Create User */}
        <div className="bg-[#111111] border border-red-950 rounded-3xl p-8 shadow-2xl mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-red-400">
            Create User
          </h2>

          <form
            action={async (formData) => {
              "use server";

              await createUser({
                name: formData.get("name") as string,
                email: formData.get("email") as string,
                password: formData.get("password") as string,
              });
            }}
            className="grid md:grid-cols-2 gap-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="bg-[#1a1a1a] border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-red-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="bg-[#1a1a1a] border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-red-500 transition"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-[#1a1a1a] border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-red-500 transition md:col-span-2"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-red-500 hover:bg-red-600 transition rounded-2xl py-4 text-lg font-semibold"
            >
              Create User
            </button>
          </form>
        </div>

        {/* Users */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold text-red-400">
              Users
            </h2>

            <p className="text-zinc-500">
              {users.length} Users
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}