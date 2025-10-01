"use client";

import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizData {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  questions: Question[];
}

interface QuizProps {
  quiz: QuizData;
}

export default function Quiz({ quiz }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  if (showResults) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center">Résultats</h2>
        <div className="text-center mb-6">
          <div className="text-6xl font-bold text-blue-600 mb-2">
            {score}/{quiz.questions.length}
          </div>
          <p className="text-xl text-gray-600">
            Vous avez obtenu {Math.round((score / quiz.questions.length) * 100)}
            %
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {quiz.questions.map((question, index) => (
            <div key={question.id} className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-2">{question.question}</h3>
              <p
                className={`text-sm ${
                  selectedAnswers[index] === question.correctAnswer
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                Votre réponse:{" "}
                {question.options[selectedAnswers[index]] || "Non répondu"}
              </p>
              <p className="text-sm text-green-600">
                Bonne réponse: {question.options[question.correctAnswer]}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                {question.explanation}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={resetQuiz}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Recommencer le quiz
        </button>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];

  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">
            Question {currentQuestion + 1} sur {quiz.questions.length}
          </span>
          <div className="w-full bg-gray-200 rounded-full h-2 ml-4">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${
                  ((currentQuestion + 1) / quiz.questions.length) * 100
                }%`,
              }}
            />
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-6">{question.question}</h2>
      </div>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
              selectedAnswers[currentQuestion] === index
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <button
        onClick={handleNextQuestion}
        disabled={selectedAnswers[currentQuestion] === undefined}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        {currentQuestion < quiz.questions.length - 1
          ? "Question suivante"
          : "Voir les résultats"}
      </button>
    </div>
  );
}
