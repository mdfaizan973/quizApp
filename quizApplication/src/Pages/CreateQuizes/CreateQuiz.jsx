import React, { useState } from "react";

export default function CreateQuiz() {
  const [quizData, setQuizData] = useState({
    title: "",
    description: "",
    category: "",
    difficulty: "",
    time_limit: "",
    questions: [],
  });

  const [questionInput, setQuestionInput] = useState({
    question: "",
    options: ["", ""],
    correct_answer: 0,
  });

  const handleQuizChange = (e) => {
    const { name, value } = e.target;
    setQuizData({ ...quizData, [name]: value });
  };

  const handleQuestionChange = (e, index) => {
    const newOptions = [...questionInput.options];
    newOptions[index] = e.target.value;
    setQuestionInput({ ...questionInput, options: newOptions });
  };

  const handleAddOption = () => {
    if (questionInput.options.length < 6) {
      setQuestionInput({
        ...questionInput,
        options: [...questionInput.options, ""],
      });
    }
  };

  const handleRemoveOption = (index) => {
    const newOptions = questionInput.options.filter((_, i) => i !== index);
    setQuestionInput({ ...questionInput, options: newOptions });
  };

  const handleAddQuestion = () => {
    if (questionInput.question && questionInput.options.length >= 2) {
      setQuizData({
        ...quizData,
        questions: [...quizData.questions, questionInput],
      });
      setQuestionInput({ question: "", options: ["", ""], correct_answer: 0 });
    } else {
      alert("Each question must have at least 2 options.");
    }
  };

  const handleSaveQuiz = () => {
    if (!quizData.title.trim()) {
      alert("Please enter a quiz title before saving.");
      return;
    }

    const finalQuiz = {
      ...quizData,
      time_limit: quizData.time_limit
        ? parseInt(quizData.time_limit, 10) * 60
        : 1,
      difficulty: quizData.difficulty || "low",
    };

    console.log("✅ Saved Quiz Data:", finalQuiz);
    alert("Quiz saved to console!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl p-10 space-y-8 border border-purple-200">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-purple-700">
            📝 Create New Quiz
          </h1>
          <button
            onClick={handleSaveQuiz}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-xl shadow transition duration-200"
          >
            💾 Save Quiz
          </button>
        </div>

        {/* Quiz Meta Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="title"
            placeholder="Enter quiz title (e.g., JavaScript Basics)"
            value={quizData.title}
            onChange={handleQuizChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm hover:shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
          />

          <input
            type="text"
            name="category"
            placeholder="Category (e.g., Sports, Tech, Religion)"
            value={quizData.category}
            onChange={handleQuizChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm hover:shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
          />

          <select
            name="difficulty"
            value={quizData.difficulty}
            onChange={handleQuizChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm hover:shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
          >
            <option value="">Select Difficulty</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <input
            type="number"
            name="time_limit"
            placeholder="Time Limit (minutes)"
            value={quizData.time_limit}
            onChange={handleQuizChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm hover:shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
          />
        </div>

        <textarea
          name="description"
          placeholder="Describe what this quiz is about..."
          value={quizData.description}
          onChange={handleQuizChange}
          className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm hover:shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200 h-24 resize-none"
        />

        {/* Question Form */}
        <div className="pt-6">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            ➕ Add Question
          </h2>

          <input
            type="text"
            placeholder="Enter your question here"
            value={questionInput.question}
            onChange={(e) =>
              setQuestionInput({ ...questionInput, question: e.target.value })
            }
            className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm hover:shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
          />

          <div className="space-y-3 mt-4">
            {questionInput.options.map((opt, index) => (
              <div key={index} className="flex gap-2 items-center">
                <input
                  type="text"
                  value={opt}
                  placeholder={`Option ${String.fromCharCode(65 + index)}`}
                  onChange={(e) => handleQuestionChange(e, index)}
                  className="flex-1 border border-gray-300 rounded-xl px-4 py-2 shadow-sm hover:shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
                />
                {questionInput.options.length > 2 && (
                  <button
                    onClick={() => handleRemoveOption(index)}
                    className="text-red-500 hover:text-red-700 text-lg font-bold"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={handleAddOption}
            disabled={questionInput.options.length >= 6}
            className="mt-2 text-sm text-blue-600 hover:underline"
          >
            + Add Option (Max 6)
          </button>

          <div className="mt-4">
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Select Correct Answer
            </label>
            <select
              value={questionInput.correct_answer}
              onChange={(e) =>
                setQuestionInput({
                  ...questionInput,
                  correct_answer: parseInt(e.target.value, 10),
                })
              }
              className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm hover:shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
            >
              {questionInput.options.map((_, idx) => (
                <option key={idx} value={idx}>{`Option ${String.fromCharCode(
                  65 + idx
                )}`}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleAddQuestion}
            className="mt-6 bg-green-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-green-700 shadow transition duration-200"
          >
            Save Question
          </button>
        </div>

        {/* Preview Questions */}
        {quizData.questions.length > 0 && (
          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-purple-800 mb-4">
              📋 Preview Added Questions:
            </h3>
            <ul className="space-y-4">
              {quizData.questions.map((q, i) => (
                <li
                  key={i}
                  className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                >
                  <p className="font-medium">{`Q${i + 1}: ${q.question}`}</p>
                  <p className="text-sm text-gray-600">
                    Correct Answer:{" "}
                    <strong>
                      Option {String.fromCharCode(65 + q.correct_answer)}
                    </strong>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
