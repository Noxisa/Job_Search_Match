'use client';

import { useState } from 'react';
import { matchResumeToJob } from '../services/api';

const InputForm = ({ onResult }) => {
  const [resume, setResume] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const result = await matchResumeToJob(resume, jobDescription);
      onResult(result);
    } catch (err) {
      console.error('API error:', err);
      setError('Failed to analyze resume. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 max-w-2xl mx-auto border border-gray-100">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-2">Resume Job Match Analyzer</h2>
        <p className="text-gray-600 text-center">Paste your resume and job description to get a match analysis</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="resume" className="block text-base font-semibold text-gray-700 mb-3">
            Resume
          </label>
          <textarea
            id="resume"
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical min-h-[120px] text-gray-700 placeholder-gray-400"
            rows={6}
            placeholder="Paste your resume here..."
            required
          />
        </div>

        <div>
          <label htmlFor="jobDescription" className="block text-base font-semibold text-gray-700 mb-3">
            Job Description
          </label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical min-h-[120px] text-gray-700 placeholder-gray-400"
            rows={6}
            placeholder="Paste the job description here..."
            required
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-4 px-4 sm:px-6 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200 font-semibold text-lg"
        >
          {loading ? 'Analyzing...' : 'Analyze Match'}
        </button>
      </form>
    </div>
  );
};

export default InputForm;