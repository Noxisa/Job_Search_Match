import React from 'react';

const ResultCard = ({ matchScore, matchedSkills, missingSkills }) => {
  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Match Result</h2>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Match Score</h3>
        <div className={`text-3xl font-bold text-center ${getScoreColor(matchScore)}`}>
          {matchScore}%
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2 text-green-700">Matched Skills</h3>
        <ul className="list-disc list-inside">
          {matchedSkills.map((skill, index) => (
            <li key={index} className="text-green-600">{skill}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-red-700">Missing Skills</h3>
        <ul className="list-disc list-inside">
          {missingSkills.map((skill, index) => (
            <li key={index} className="text-red-600">{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultCard;