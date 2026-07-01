import { useNavigate } from "react-router-dom";

 function Home() {
  const navigate = useNavigate();

  return (
    <section className="relative min- mb-6 overflow-hidden bg-gray-50">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#15422D]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#15422D]/5 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        <div className="mb-6 rounded-full border border-[#15422D]/20 bg-white px-5 py-2 text-sm font-medium text-[#15422D] shadow-sm">
          AI Clinical Intelligence Platform
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-5xl font-bold leading-tight text-gray-900 md:text-7xl">
          Transform Clinical
          <span className="block text-[#15422D]">
            Documents Into Insights
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
          Upload medical reports, discharge summaries, laboratory
          results, and clinical notes. Our AI extracts key findings,
          highlights important information, and helps you understand
          complex healthcare documents in seconds.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button
            onClick={() => navigate("/chat-with-medical-assistant")}
            className="rounded-2xl bg-[#15422D] px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Analyze Clinical Documents
          </button>

          <button className="rounded-2xl border border-gray-300 bg-white px-8 py-4 text-lg font-medium text-gray-700 transition hover:bg-gray-100">
            Learn More
          </button>
        </div>

        {/* Floating Cards */}
        <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2">
            <div className="mb-4 text-3xl">📄</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Upload Reports
            </h3>
            <p className="text-gray-600">
              Upload PDFs and clinical documents securely.
            </p>
          </div>

          <div className="rounded-3xl bg-[#15422D] p-6 text-white shadow-xl transition hover:-translate-y-2">
            <div className="mb-4 text-3xl">🤖</div>
            <h3 className="mb-2 text-xl font-semibold">
              AI Analysis
            </h3>
            <p className="text-green-100">
              Extract findings, diagnoses, and key medical insights.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2">
            <div className="mb-4 text-3xl">⚡</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Instant Results
            </h3>
            <p className="text-gray-600">
              Receive structured summaries within seconds.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 text-center">
          <div>
            <h4 className="text-3xl font-bold text-[#15422D]">99%</h4>
            <p className="text-gray-600">Analysis Accuracy</p>
          </div>

          <div>
            <h4 className="text-3xl font-bold text-[#15422D]">&lt;10s</h4>
            <p className="text-gray-600">Processing Time</p>
          </div>

          <div>
            <h4 className="text-3xl font-bold text-[#15422D]">24/7</h4>
            <p className="text-gray-600">AI Availability</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home