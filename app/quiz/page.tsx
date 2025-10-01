import Link from 'next/link'
import quizData from '../../data/quiz.json'

export default function QuizPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Quiz Arduino & ESP32</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizData.map((quiz) => (
          <Link key={quiz.id} href={`/quiz/${quiz.id}`}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 cursor-pointer">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-2">{quiz.title}</h3>
              <p className="text-gray-600 mb-4">{quiz.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
                  {quiz.questions.length} questions
                </span>
                <span className="text-sm text-gray-500">
                  {quiz.difficulty}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}