export default function ExercicesPage() {
  const exercices = [
    {
      id: 1,
      title: "LED Clignotante",
      description: "Faites clignoter une LED avec Arduino",
      difficulty: "Débutant",
    },
    {
      id: 2,
      title: "Lecture de capteur",
      description: "Lisez les valeurs d'un capteur analogique",
      difficulty: "Intermédiaire",
    },
    {
      id: 3,
      title: "Communication série",
      description: "Communiquez avec l'ordinateur via le port série",
      difficulty: "Débutant",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Exercices Arduino & ESP32</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercices.map((exercice) => (
          <div
            key={exercice.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
          >
            <div className="text-3xl mb-4">💻</div>
            <h3 className="text-xl font-semibold mb-2">{exercice.title}</h3>
            <p className="text-gray-600 mb-4">{exercice.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-orange-600 bg-orange-100 px-2 py-1 rounded">
                {exercice.difficulty}
              </span>
              <button className="text-blue-600 hover:text-blue-800">
                Commencer →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
