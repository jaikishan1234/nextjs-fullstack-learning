"use client"

import React, { useEffect, useState } from "react"

const HomePage = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        )

        const res = await data.json()

        console.log(res)

        setTodos(res)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchTodos()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">
        Todos
      </h1>

      {todos.slice(0, 10).map((todo) => (
        <div
          key={todo.id}
          className="border p-3 mb-2 rounded"
        >
          <p>{todo.title}</p>

          <p>
            Status:{" "}
            {todo.completed
              ? "✅ Done"
              : "❌ Pending"}
          </p>
        </div>
      ))}
    </div>
  )
}

export default HomePage