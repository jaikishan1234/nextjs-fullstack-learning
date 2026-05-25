import { createUser, getAllUsers } from "@/actions/action";


export default async function Home() {

  const data = await getAllUsers()

  console.log(data)
  return (
  <div>
    <h1>Create User</h1>

    <form action={createUser}>
       <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />

        <button type="submit">Create User</button>
    </form>
  </div>
  );
}