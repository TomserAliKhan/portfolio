
// src/pages/Class12.jsx

import { questionPapers } from "./data.js";

const subjects = [
  "English",
  "Assamese",
  "History",
  "Political Science",
  "Education",
  "Advance Assamese",
  "Arabic",
];

function Class12() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-white  ">
        Class 12 Arts Question Papers
      </h1>

      {subjects.map((subject) => {
        const papers = questionPapers[subject] || {};
        const years = Object.keys(papers).sort();

        return (
          <div
            key={subject}
            className="bg-white rounded-xl shadow mb-6 p-4"
          >
            <h2 className="text-xl font-semibold mb-4">{subject}</h2>

            {years.length ? (
              <div className="space-y-2">
                {years.map((year) => (
                  <div
                    key={year}
                    className="flex justify-between items-center border rounded-lg p-3"
                  >
                    <span>{year}</span>

                    <a
                      href={papers[year]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                      Download PDF
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                Papers will be added soon.
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Class12;
