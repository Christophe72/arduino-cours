import Link from "next/link";
import coursData from "../../data/cours.json";

export default function CoursPage() {
  return (
    <div className="content-container py-12 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="section-header">Cours Arduino & ESP32</h1>
        <p className="section-subtitle">
          Découvrez nos cours progressifs pour maîtriser l'électronique moderne
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursData.map((cours, index) => (
          <Link key={cours.id} href={`/cours/${cours.id}`} className="group">
            <div
              className={`card-interactive glow-effect animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-6 group-hover:animate-float">
                {cours.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-arduino-600 transition-colors">
                {cours.title}
              </h3>

              <p className="text-gray-600 mb-6 text-responsive leading-relaxed">
                {cours.description}
              </p>

              <div className="flex justify-between items-center mb-4">
                <span
                  className={`badge-${getLevelColor(
                    cours.level
                  )} group-hover:scale-110 transition-transform`}
                >
                  {cours.level}
                </span>
                <div className="flex items-center space-x-1 text-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium">{cours.duration}</span>
                </div>
              </div>

              {/* Barre de progression fictive pour l'engagement */}
              <div className="progress-bar mb-4">
                <div className="progress-fill" style={{ width: "0%" }}></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {cours.objectives?.length || 0} objectifs
                </span>
                <div className="flex items-center space-x-1 text-arduino-600 group-hover:text-arduino-700 transition-colors font-semibold">
                  <span>Commencer</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Section statistiques des cours */}
      <div className="mt-20 text-center">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="card p-6">
            <div className="text-3xl font-bold text-arduino-600 mb-2">
              {coursData.length}
            </div>
            <div className="text-gray-600">Cours disponibles</div>
          </div>
          <div className="card p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {coursData.reduce(
                (acc, cours) => acc + (cours.objectives?.length || 0),
                0
              )}
            </div>
            <div className="text-gray-600">Objectifs d'apprentissage</div>
          </div>
          <div className="card p-6">
            <div className="text-3xl font-bold text-esp32-600 mb-2">
              {coursData.filter((cours) => cours.level === "Débutant").length}
            </div>
            <div className="text-gray-600">Cours débutant</div>
          </div>
          <div className="card p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {
                coursData.filter(
                  (cours) =>
                    cours.level === "Intermédiaire" || cours.level === "Avancé"
                ).length
              }
            </div>
            <div className="text-gray-600">Cours avancés</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fonction utilitaire pour les couleurs des badges de niveau
function getLevelColor(level: string): string {
  switch (level) {
    case "Débutant":
      return "success";
    case "Intermédiaire":
      return "warning";
    case "Avancé":
      return "purple";
    default:
      return "primary";
  }
}
