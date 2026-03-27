import React, { useState } from "react";
import "../style/interview.scss";

const Interview = () => {

  // 🔥 SAMPLE DATA (API se aayega future me)
  const data = {
    technicalQuestions: [],
    behavioralQuestions: [],
    preparationPlan: [],
    skillGaps: []
  };

  const [activeTab, setActiveTab] = useState("technical");

  const getContent = () => {
    switch (activeTab) {
      case "technical":
        return data.technicalQuestions;
      case "behavioral":
        return data.behavioralQuestions;
      case "roadmap":
        return data.preparationPlan;
      default:
        return [];
    }
  };

  const content = getContent();

  return (
    <main className="interview">
      <div className="interview-container">

        {/* LEFT SIDEBAR */}
        <div className="sidebar-left">
          <button onClick={() => setActiveTab("technical")}>
            Technical questions
          </button>
          <button onClick={() => setActiveTab("behavioral")}>
            Behavioral questions
          </button>
          <button onClick={() => setActiveTab("roadmap")}>
            Road Map
          </button>
        </div>

        {/* CENTER CONTENT */}
        <div className="main-content">
          {content.length === 0 ? (
            <div className="empty">
              No data available
            </div>
          ) : (
            content.map((item, index) => (
              <div key={index} className="card">
                {item}
              </div>
            ))
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="sidebar-right">
          <h3>Skill Gaps</h3>

          <div className="tags">
            {data.skillGaps.length === 0 ? (
              <p className="empty">No skills found</p>
            ) : (
              data.skillGaps.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))
            )}
          </div>
        </div>

      </div>
    </main>
  );
};

export default Interview;