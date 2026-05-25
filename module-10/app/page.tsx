import {
  createPost,
  getAllPost,
  deletePostById,
} from "@/actions/post-action";

export default async function Home() {
  const posts = await getAllPost();

  return (
    <div className="min-h-screen from-slate-900 via-black to-slate-800 text-white p-10">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold mb-3">
            Post Manager
          </h1>

          <p className="text-gray-400">
            Create, manage and delete posts
          </p>
        </div>

        {/* FORM CARD */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">

          <h2 className="text-2xl font-semibold mb-5">
            Create New Post
          </h2>

          <form
            action={createPost}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="title"
              placeholder="Enter post title..."
              className="bg-black/30 border border-gray-700 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <textarea
              name="content"
              placeholder="Write your content..."
              rows={5}
              className="bg-black/30 border border-gray-700 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-all rounded-xl p-3 font-semibold"
            >
              Create Post
            </button>
          </form>
        </div>

        {/* POSTS */}
        <div className="mt-10">

          <h2 className="text-3xl font-bold mb-6">
            All Posts
          </h2>

          <div className="grid gap-6">

            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:scale-[1.01] transition-all"
              >
                <div className="flex justify-between items-start">

                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-300">
                      {post.content}
                    </p>
                  </div>

                  {/* DELETE */}
                  <form
                    action={async () => {
                      "use server";
                      await deletePostById(post.id);
                    }}
                  >
                    <button
                      type="submit"
                      className="bg-red-500 hover:bg-red-600 transition-all px-4 py-2 rounded-lg font-medium"
                    >
                      Delete
                    </button>
                  </form>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}