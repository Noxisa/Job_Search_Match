"use client";

import { useState } from "react";

export default function Home() {
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [error, setError] = useState("");

  const handleAnalyze = () => {
    if (!resumeText.trim() || !jobDescription.trim()) {
      setError("Please fill in both resume text and job description.");
      return;
    }

    setError("");
    console.log({ resumeText, jobDescription });
  };

  const isAnalyzeDisabled = !resumeText.trim() || !jobDescription.trim();

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-4xl rounded-[2rem] border border-zinc-200 bg-white p-10 shadow-xl shadow-zinc-200/70">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-600">
            Job Search Match
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Analyze your resume against a job description
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-600">
            Paste your resume and the job listing below, then click Analyze to begin matching your experience to the role.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-zinc-700">
              Resume text
            </label>
            <textarea
              id="resume"
              rows={8}
              value={resumeText}
              onChange={(event) => {
                setResumeText(event.target.value);
                if (error) setError("");
              }}
              className="mt-3 w-full rounded-3xl border border-zinc-200 bg-zinc-50 p-4 text-sm leading-6 text-zinc-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              placeholder="Paste your resume or CV here..."
            />
          </div>

          <div>
            <label htmlFor="jobDescription" className="block text-sm font-medium text-zinc-700">
              Job description
            </label>
            <textarea
              id="jobDescription"
              rows={8}
              value={jobDescription}
              onChange={(event) => {
                setJobDescription(event.target.value);
                if (error) setError("");
              }}
              className="mt-3 w-full rounded-3xl border border-zinc-200 bg-zinc-50 p-4 text-sm leading-6 text-zinc-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              placeholder="Paste the job description here..."
            />
          </div>

          {error ? (
            <p className="text-sm text-red-600">{error}</p>
          ) : null}

          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleAnalyze}
              disabled={isAnalyzeDisabled}
              className={`inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition ${
                isAnalyzeDisabled
                  ? "cursor-not-allowed bg-indigo-300"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              Analyze
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
