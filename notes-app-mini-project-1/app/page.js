"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const res = await fetch("/api/notes");
      const data = await res.json();

      console.log(data);

      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const onSubmit = async (e) => {
    if (!title || !content) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setIsLoading(true);

      const res = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
      if (res.ok) {
        fetchNotes();
        alert("Notes created successfully");
        setTitle("");
        setContent("");
      }
    } catch (error) {
      console.error("Error saving note:", error);

      alert("Error saving note");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = () => {}
  const handleDelete = () => {}

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 mb-2">My Notes</h1>

          <p className="text-gray-400">
            Create, read, update, and delete your notes
          </p>
        </div>

        {/* Form */}
        <div className="bg-gray-900 rounded-lg shadow-md p-6 mb-8 border border-gray-800">
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-yellow-400 mb-2">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter note title..."
                className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-yellow-400 mb-2">
                Content
              </label>
              <textarea
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter note title..."
                rows={"5"}
                className="w-full px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-500"
              />
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg hover:bg-yellow-600 disabled:bg-gray-600 transition font-semibold"
              >
                Add Note
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notes.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No notes yet. Create one to get started!
              </p>
            </div>
          ) : (
            notes.map((note) => (
              <div key={note._id} className="bg-gray-900 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-yellow-400 mb-2">{note.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{note.content}</p>
                <p className="text-sm text-gray-400 mb-4">
                  {new Date(note.createdAt).toLocaleDateString()}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(note)}
                    className="flex-1 bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600 transition text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(note._id)}
                    className="flex-1 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
