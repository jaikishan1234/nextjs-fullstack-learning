'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        
        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-red-500">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-3xl md:text-5xl font-bold">
          User Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-400 text-lg leading-relaxed">
          The page you are trying to access does not exist
          or may have been moved somewhere else.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Link
            href="/"
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition-all duration-300 px-6 py-3 rounded-xl font-semibold shadow-lg"
          >
            <Home size={20} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 border border-gray-700 hover:border-gray-500 hover:bg-gray-900 transition-all duration-300 px-6 py-3 rounded-xl font-semibold"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>

        </div>

        {/* Footer */}
        <p className="mt-10 text-sm text-gray-600">
          Error 404 • Lost in the internet 🚀
        </p>
      </div>
    </div>
  )
}

export default NotFoundPage