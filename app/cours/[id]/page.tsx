import { notFound } from "next/navigation";
import coursData from "../../../data/cours.json";
import SimpleCodeBlock from "../../../components/SimpleCodeBlock";

export default function CoursDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const cours = coursData.find((c) => c.id === params.id);

  if (!cours) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{cours.title}</h1>
        <p className="text-xl text-gray-600 mb-4">{cours.description}</p>
        <div className="flex gap-4">
          <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded">
            {cours.level}
          </span>
          <span className="text-sm text-gray-600">Durée: {cours.duration}</span>
        </div>
      </div>

      <div className="prose max-w-none">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Contenu du cours</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Objectifs</h3>
              <ul className="list-disc pl-6 space-y-1">
                {cours.objectives?.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Concepts abordés</h3>
              <div className="flex flex-wrap gap-2">
                {cours.concepts?.map((concept, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded text-sm"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>

            {cours.codeExample && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Exemple de code</h3>
                <SimpleCodeBlock code={cours.codeExample} language="cpp" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
