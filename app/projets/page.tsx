import Link from 'next/link'
import projetsData from '../../data/projets.json'

export default function ProjetsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Projets Arduino & ESP32</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetsData.map((projet) => (
          <Link key={projet.id} href={`/projets/${projet.id}`}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 cursor-pointer">
              <div className="text-3xl mb-4">{projet.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{projet.title}</h3>
              <p className="text-gray-600 mb-4">{projet.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded">
                  {projet.difficulty}
                </span>
                <span className="text-sm text-gray-500">
                  {projet.duration}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}