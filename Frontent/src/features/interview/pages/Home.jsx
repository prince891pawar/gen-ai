import React from "react";
import "../style/home.scss";

const Home = () => {
  return (
    <main className="home">
      <div className="container">
        
        {/* LEFT SECTION */}
        <div className="left">
          <h2>Job Description</h2>
          <textarea
            name="jobDescription"
            id="jobDescription"
            placeholder="Enter job description..."
          ></textarea>
        </div>

        {/* RIGHT SECTION */}
        <div className="right">
          <h2>Your Details</h2>

          <div className="input-group">
            <label htmlFor="resume">Upload Resume</label>
            <input
              type="file"
              name="resume"
              id="resume"
              accept=".pdf"
            />
          </div>

          <div className="input-group">
            <label htmlFor="selfDescription">
              Self Description
            </label>
            <textarea
              name="selfDescription"
              id="selfDescription"
              placeholder="Describe yourself in a few sentences..."
            ></textarea>
          </div>

          <button className="generate-btn">
            Generate Interview
          </button>
        </div>

      </div>
    </main>
  );
};

export default Home;