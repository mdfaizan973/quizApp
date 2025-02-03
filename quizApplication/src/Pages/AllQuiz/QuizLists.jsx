import React, { useEffect, useState } from "react";

export default function QuizLists() {
  // -
  const user = {
    id: "user_123456789",
    name: "Md Faizan",
    email: "faizan.md9735@gmail.com",
  };

  const quiz = {
    id: "6860e140e59bbf12faa6a23a",
    title: "JavaScript Fundamentals",
    description: "Test your knowledge of basic JavaScript concepts and syntax",
    category: "technology",
    difficulty: "medium",
    time_limit: 20, // seconds
    questions: [
      {
        question:
          "What is the correct way to declare a variable in JavaScript?",
        options: [
          "var myVar = 'hello';",
          "variable myVar = 'hello';",
          "v myVar = 'hello';",
          "declare myVar = 'hello';",
        ],
        correct_answer: 0,
      },
      {
        question:
          "Which method is used to add an element to the end of an array?",
        options: ["append()", "push()", "add()", "insert()"],
        correct_answer: 1,
      },
      {
        question: "What does '===' check in JavaScript?",
        options: [
          "Value only",
          "Type only",
          "Both value and type",
          "Reference only",
        ],
        correct_answer: 2,
      },
    ],
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [startTime, setStartTime] = useState(null);
  const [timeLeft, setTimeLeft] = useState(quiz.time_limit);
  const [canSubmit, setCanSubmit] = useState(false);

  const handleStartQuiz = () => {
    setShowModal(true);
    setSelectedAnswers({});
    setStartTime(Date.now());
    setTimeLeft(quiz.time_limit);
    setCanSubmit(false);
  };

  const handleSelect = (qIndex, optIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [qIndex]: {
        selected_answer: optIndex,
        time_to_answer: ((Date.now() - startTime) / 1000).toFixed(2),
        timestamp: new Date().toISOString(),
      },
    }));
  };

  const handleSubmit = () => {
    if (!canSubmit) return;

    const answers = quiz.questions.map((q, i) => {
      const answer = selectedAnswers[i] || {};
      const selected = answer.selected_answer ?? null;
      return {
        question_index: i,
        selected_answer: selected,
        is_correct: selected === q.correct_answer,
        time_to_answer: parseFloat(answer.time_to_answer || 0),
        timestamp: answer.timestamp || new Date().toISOString(),
      };
    });

    const result = {
      user_id: user.id,
      user_name: user.name,
      user_email: user.email,
      quiz_id: quiz.id,
      score: answers.filter((a) => a.is_correct).length,
      total_questions: quiz.questions.length,
      answers,
    };

    console.log("✅ Quiz Submission:", result);
    alert("Quiz submitted! Check console for result.");
    setShowModal(false);
  };

  useEffect(() => {
    if (!showModal) return;
    if (timeLeft <= 0) {
      setCanSubmit(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, showModal]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">
        🎯 Available Quiz
      </h1>

      <div className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition">
        <h2 className="text-xl font-bold text-purple-800">{quiz.title}</h2>
        <p className="text-sm text-gray-600 mt-1 mb-2 capitalize">
          {quiz.category} • {quiz.difficulty} • ⏱ {quiz.time_limit}s
        </p>
        <p className="text-gray-700 mb-3">{quiz.description}</p>
        <button
          onClick={handleStartQuiz}
          className="px-6 py-2 bg-purple-700 text-white font-semibold rounded-xl hover:bg-purple-800"
        >
          🧠 Try Quiz
        </button>
      </div>

      {/* Modal (without black bg) */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10 bg-white/95">
          <div className="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-purple-100 via-white to-pink-50 rounded-3xl shadow-xl p-8 relative border border-purple-200">
            <button
              className="absolute top-4 right-6 text-gray-600 hover:text-red-600 text-2xl"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold text-purple-700 mb-1">
              {quiz.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{quiz.description}</p>
            <p className="mb-6 font-semibold text-purple-600">
              ⏳ Time Remaining: {timeLeft}s
            </p>

            <div className="space-y-6">
              {quiz.questions.map((q, qIndex) => (
                <div
                  key={qIndex}
                  className="bg-white p-5 rounded-2xl border border-gray-200 shadow"
                >
                  <p className="font-semibold mb-3">
                    {qIndex + 1}. {q.question}
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {q.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelect(qIndex, i)}
                        className={`text-left px-4 py-2 border rounded-xl transition duration-200 text-sm font-medium ${
                          selectedAnswers[qIndex]?.selected_answer === i
                            ? "bg-purple-100 border-purple-500"
                            : "hover:bg-purple-50 border-gray-300"
                        }`}
                      >
                        {String.fromCharCode(65 + i)}. {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className={`mt-8 w-full py-3 rounded-xl font-bold transition text-lg ${
                canSubmit
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              {canSubmit ? "✅ Submit Quiz" : "⏳ Wait for Time to End"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
