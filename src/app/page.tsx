export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4 animate-pulse">
          Hello World
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-md mx-auto">
          Welcome to your simple Next.js application!
        </p>
        <div className="mt-8">
          <div className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200">
            🚀 Ready to build something amazing
          </div>
        </div>
      </div>
    </main>
  )
}