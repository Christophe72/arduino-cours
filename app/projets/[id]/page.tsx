import { notFound } from "next/navigation";
import projetsData from "../../../data/projets.json";
import SimpleCodeBlock from "../../../components/SimpleCodeBlock";

export default function ProjetDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const projet = projetsData.find((p) => p.id === params.id);

  if (!projet) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{projet.title}</h1>
        <p className="text-xl text-gray-600 mb-4">{projet.description}</p>
        <div className="flex gap-4">
          <span className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded">
            {projet.difficulty}
          </span>
          <span className="text-sm text-gray-600">
            Durée: {projet.duration}
          </span>
        </div>
      </div>

      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">
            Composants nécessaires
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            {projet.components?.map((component, index) => (
              <li key={index}>{component}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
          <div className="space-y-4">
            {projet.instructions?.map((instruction, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Étape {index + 1}</h3>
                <p className="text-gray-600">{instruction}</p>
              </div>
            ))}
          </div>
        </div>

        {projet.code && (
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Code complet</h2>
            <SimpleCodeBlock code={projet.code} language="cpp" />
          </div>
        )}

        {projet.circuit && (
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Schéma du circuit</h2>
            <img
              src={projet.circuit}
              alt="Schéma du circuit"
              className="w-full rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
