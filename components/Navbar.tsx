import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-arduino-600 via-blue-600 to-esp32-600 shadow-2xl backdrop-blur-sm border-b border-white/10">
      <div className="content-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo amélioré */}
          <Link href="/" className="nav-brand group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <span className="text-2xl">⚡</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Arduino Course
              </span>
            </div>
          </Link>

          {/* Navigation desktop améliorée */}
          <div className="hidden md:flex space-x-2">
            <Link href="/cours" className="nav-link group">
              <div className="flex items-center space-x-2">
                <span className="text-lg">📚</span>
                <span>Cours</span>
              </div>
            </Link>
            <Link href="/quiz" className="nav-link group">
              <div className="flex items-center space-x-2">
                <span className="text-lg">🧠</span>
                <span>Quiz</span>
              </div>
            </Link>
            <Link href="/projets" className="nav-link group">
              <div className="flex items-center space-x-2">
                <span className="text-lg">🔧</span>
                <span>Projets</span>
              </div>
            </Link>
            <Link href="/exercices" className="nav-link group">
              <div className="flex items-center space-x-2">
                <span className="text-lg">💻</span>
                <span>Exercices</span>
              </div>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link
              href="/cours"
              className="btn-secondary bg-white/20 border-white/30 text-white hover:bg-white/30 hover:border-white/50"
            >
              Commencer
            </Link>
          </div>

          {/* Menu mobile amélioré */}
          <div className="md:hidden">
            <button className="nav-link p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
