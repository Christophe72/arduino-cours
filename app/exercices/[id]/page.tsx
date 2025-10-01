export default function ExerciceDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Exercice {params.id}</h1>
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <p className="text-gray-600">
          Contenu de l'exercice {params.id} à développer...
        </p>
      </div>
    </div>
  );
}
