import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section avec gradient amélioré */}
      <div className="content-container text-center py-20 fade-in">
        <div className="animate-slide-up">
          <h1 className="section-header animate-scale-in">
            Cours Arduino & ESP32
          </h1>
          <p className="section-subtitle animate-fade-in">
            Apprenez la programmation Arduino et ESP32 avec des cours
            interactifs, des quiz et des projets pratiques. Maîtrisez
            l'électronique moderne !
          </p>
        </div>

        {/* Cartes de navigation améliorées */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <Link href="/cours" className="group">
            <div className="card-interactive glow-effect hover:shadow-glow">
              <div className="text-6xl mb-6 group-hover:animate-bounce-soft">
                📚
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-arduino-600 transition-colors">
                Cours
              </h3>
              <p className="text-gray-600 text-responsive group-hover:text-gray-700 transition-colors">
                Apprenez les bases et concepts avancés
              </p>
              <div className="mt-4 inline-block">
                <span className="badge-primary group-hover:scale-110 transition-transform">
                  Commencer →
                </span>
              </div>
            </div>
          </Link>

          <Link href="/quiz" className="group">
            <div className="card-interactive glow-effect hover:shadow-glow">
              <div className="text-6xl mb-6 group-hover:animate-bounce-soft">
                🧠
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-green-600 transition-colors">
                Quiz
              </h3>
              <p className="text-gray-600 text-responsive group-hover:text-gray-700 transition-colors">
                Testez vos connaissances
              </p>
              <div className="mt-4 inline-block">
                <span className="badge-success group-hover:scale-110 transition-transform">
                  Démarrer →
                </span>
              </div>
            </div>
          </Link>

          <Link href="/projets" className="group">
            <div className="card-interactive glow-effect hover:shadow-glow">
              <div className="text-6xl mb-6 group-hover:animate-bounce-soft">
                🔧
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-esp32-600 transition-colors">
                Projets
              </h3>
              <p className="text-gray-600 text-responsive group-hover:text-gray-700 transition-colors">
                Réalisez des projets concrets
              </p>
              <div className="mt-4 inline-block">
                <span className="badge-purple group-hover:scale-110 transition-transform">
                  Créer →
                </span>
              </div>
            </div>
          </Link>

          <Link href="/exercices" className="group">
            <div className="card-interactive glow-effect hover:shadow-glow">
              <div className="text-6xl mb-6 group-hover:animate-bounce-soft">
                💻
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors">
                Exercices
              </h3>
              <p className="text-gray-600 text-responsive group-hover:text-gray-700 transition-colors">
                Pratiquez avec des exercices
              </p>
              <div className="mt-4 inline-block">
                <span className="badge-warning group-hover:scale-110 transition-transform">
                  Pratiquer →
                </span>
              </div>
            </div>
          </Link>

          <Link href="/dashboard" className="group">
            <div className="card-interactive glow-effect hover:shadow-glow">
              <div className="text-6xl mb-6 group-hover:animate-bounce-soft">
                📊
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                Tableau de bord
              </h3>
              <p className="text-gray-600 text-responsive group-hover:text-gray-700 transition-colors">
                Suivez les scores des utilisateurs
              </p>
              <div className="mt-4 inline-block">
                <span className="badge-info group-hover:scale-110 transition-transform">
                  Voir →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Section statistiques */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="text-4xl font-bold text-arduino-600 mb-2">15+</div>
            <div className="text-gray-600">Cours disponibles</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">Quiz interactifs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-esp32-600 mb-2">20+</div>
            <div className="text-gray-600">Projets pratiques</div>
          </div>
        </div>
      </div>
    </div>
  );
}
