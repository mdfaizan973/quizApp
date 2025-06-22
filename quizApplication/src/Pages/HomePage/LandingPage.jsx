import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-purple-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Create, Share, and Take <br className="hidden md:block" />
            <span className="text-yellow-300">Interactive Quizzes</span> 🎯
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Challenge yourself and others with beautifully crafted questions
            across multiple categories.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-yellow-300 text-purple-800 px-6 py-3 rounded-xl font-semibold shadow hover:bg-yellow-400 transition duration-200">
              🚀 Get Started
            </button>
            <button className="bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold border border-purple-300 shadow hover:bg-purple-50 transition duration-200">
              🧪 Try Sample Quiz
            </button>
          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-14 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">
          Everything You Need to <br />{" "}
          <span className="text-yellow-400">Create & Learn</span>
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-700 mb-10">
          Our platform provides all the tools you need to create engaging
          quizzes and track learning progress effectively.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
          {[
            {
              title: "📚 Create Custom Quizzes",
              desc: "Build engaging quizzes with multiple-choice questions across various categories and difficulty levels.",
            },
            {
              title: "🧠 Interactive Experience",
              desc: "Take quizzes with real-time feedback, timer functionality, and smooth animations.",
            },
            {
              title: "📊 Track Performance",
              desc: "Monitor your progress with detailed results, scores, and performance analytics.",
            },
            {
              title: "🌍 Share & Discover",
              desc: "Share your quizzes with others and discover new challenges from the community.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-200"
            >
              <h3 className="text-lg font-bold text-purple-700 mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-14 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10 text-purple-700">
          Why QuizLand?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ["Fun Questions 🎯", "Engaging & colorful content for all ages."],
            ["Instant Results ⚡", "Know your score immediately!"],
            ["Track Progress 📊", "See how you're improving over time."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="p-6 bg-purple-100 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-purple-800 mb-2">
                {title}
              </h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quiz Categories */}
      <section className="py-14 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10 text-purple-700">
          Explore Categories 🧠
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {["Math", "Science", "English", "Animals", "Flags", "Sports"].map(
            (cat) => (
              <div
                key={cat}
                className="p-5 bg-white rounded-lg text-purple-800 font-semibold shadow hover:bg-yellow-100 transition"
              >
                {cat}
              </div>
            )
          )}
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section className="py-14 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8 text-purple-700">
          🏆 Top Scorers
        </h2>
        <div className="max-w-md mx-auto bg-purple-50 rounded-xl shadow p-6">
          <ul className="space-y-3 text-left">
            {["👧 Aisha - 980", "🧒 Rohan - 950", "👦 Aryan - 940"].map(
              (entry, i) => (
                <li
                  key={i}
                  className="flex justify-between border-b pb-2 text-lg font-medium"
                >
                  <span>{entry.split(" - ")[0]}</span>
                  <span>{entry.split(" - ")[1]} pts</span>
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-700 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to get smarter while having fun?
        </h2>
        <p className="mb-6 text-lg">
          Join thousands of young learners on QuizLand!
        </p>
        <button className="bg-yellow-300 text-purple-800 px-6 py-3 rounded-lg font-semibold shadow hover:bg-yellow-400 transition">
          🎮 Play Now
        </button>
      </section>
    </div>
  );
}
