import { notFound } from "next/navigation";
import quizData from "../../../data/quiz.json";
import Quiz from "../../../components/Quiz";

export default function QuizDetailPage({ params }: { params: { id: string } }) {
  const quiz = quizData.find((q) => q.id === params.id);

  if (!quiz) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{quiz.title}</h1>
        <p className="text-xl text-gray-600 mb-4">{quiz.description}</p>
        <div className="flex gap-4">
          <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded">
            {quiz.questions.length} questions
          </span>
          <span className="text-sm text-gray-600">
            Difficulté: {quiz.difficulty}
          </span>
        </div>
      </div>

      <Quiz quiz={quiz} />
    </div>
  );
}
