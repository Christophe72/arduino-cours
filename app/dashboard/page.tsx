"use client";

import { useEffect, useState } from "react";

const Dashboard = () => {
  const [userScores, setUserScores] = useState<
    Record<string, Record<string, number>>
  >({});
  const [newUser, setNewUser] = useState("");
  const [exercises, setExercises] = useState<string[]>([]);
  const [newExercise, setNewExercise] = useState("");

  useEffect(() => {
    // Charger les scores depuis localStorage
    const scores = localStorage.getItem("userScores");
    if (scores) {
      setUserScores(JSON.parse(scores));
    }
  }, []);

  const addUser = () => {
    if (newUser.trim() && !userScores[newUser]) {
      const updatedScores = { ...userScores, [newUser]: {} };
      setUserScores(updatedScores);
      localStorage.setItem("userScores", JSON.stringify(updatedScores));
      setNewUser("");
    }
  };

  const updateScore = (user: string, increment: number) => {
    const updatedScores = {
      ...userScores,
      [user]: {
        ...(userScores[user] || {}),
        total: (userScores[user]?.total || 0) + increment,
      },
    };
    setUserScores(updatedScores);
    localStorage.setItem("userScores", JSON.stringify(updatedScores));
  };

  const addExercise = () => {
    if (newExercise.trim() && !exercises.includes(newExercise)) {
      setExercises([...exercises, newExercise]);
      setNewExercise("");
    }
  };

  const updateExerciseScore = (
    user: string,
    exercise: string,
    increment: number
  ) => {
    const updatedScores = {
      ...userScores,
      [user]: {
        ...(userScores[user] || {}),
        [exercise]: (userScores[user]?.[exercise] || 0) + increment,
      },
    };
    setUserScores(updatedScores);
    localStorage.setItem("userScores", JSON.stringify(updatedScores));
  };

  const resetScores = () => {
    localStorage.removeItem("userScores");
    setUserScores({});
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tableau de bord des scores</h1>

      <div className="mb-4">
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Nom de l'utilisateur"
          className="border border-gray-300 px-4 py-2 rounded mr-2"
        />
        <button
          onClick={addUser}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Ajouter utilisateur
        </button>
      </div>

      <div className="mb-4">
        <select
          value={newExercise}
          onChange={(e) => setNewExercise(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded mr-2"
        >
          <option value="">Sélectionnez un exercice</option>
          <option value="LED Clignotante">LED Clignotante</option>
          <option value="Capteur de température">Capteur de température</option>
          <option value="Servo-moteur">Servo-moteur</option>
          <option value="Afficheur LCD">Afficheur LCD</option>
          <option value="Capteur ultrason">Capteur ultrason</option>
        </select>
        <button
          onClick={addExercise}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Ajouter exercice
        </button>

        <div className="mt-3">
          <h3 className="text-sm font-semibold mb-2">Exercices existants:</h3>
          <div className="flex flex-wrap gap-2">
            {exercises.length > 0 ? (
              exercises.map((exercise) => (
                <span
                  key={exercise}
                  className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                >
                  {exercise}
                </span>
              ))
            ) : (
              <span className="text-gray-500 text-sm">
                Aucun exercice ajouté
              </span>
            )}
          </div>
        </div>
      </div>

      {Object.keys(userScores).length > 0 ? (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Utilisateur</th>
              <th className="border border-gray-300 px-4 py-2">Score</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(userScores).map(([user, score]) => (
              <tr key={user}>
                <td className="border border-gray-300 px-4 py-2">{user}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {score.total}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => updateScore(user, 1)}
                    className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
                  >
                    +1
                  </button>
                  <button
                    onClick={() => updateScore(user, -1)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    -1
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Aucun score enregistré.</p>
      )}

      {exercises.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Exercices</h2>
          {exercises.map((exercise) => (
            <div key={exercise} className="mb-4">
              <h3 className="text-lg font-semibold">{exercise}</h3>
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">
                      Utilisateur
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Score</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(userScores).map(([user, scores]) => (
                    <tr key={user}>
                      <td className="border border-gray-300 px-4 py-2">
                        {user}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {scores[exercise] || 0}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          onClick={() => updateExerciseScore(user, exercise, 1)}
                          className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
                        >
                          +1
                        </button>
                        <button
                          onClick={() =>
                            updateExerciseScore(user, exercise, -1)
                          }
                          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          -1
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={resetScores}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Réinitialiser les scores
      </button>
    </div>
  );
};

export default Dashboard;
