import React from "react";
import "../style/home.scss";

const Home = () => {
  return (
    <main className="home">

      {/* HEADER */}
      <div className="home-header">
        <h1>
          Create Your Custom <span>Interview Plan</span>
        </h1>
        <p>
          Let our AI analyze the job requirements and your profile to build a winning strategy.
        </p>
      </div>

      {/* MAIN CONTAINER */}
      <div className="container">

        {/* LEFT */}
        <div className="left">
          <div className="section-header">
            <h2>📌 Target Job Description</h2>
            <span className="required">Required</span>
          </div>

          <textarea placeholder="Paste full job description here..."></textarea>

          <div className="char-count">0 / 5000 chars</div>
        </div>

        {/* RIGHT */}
        <div className="right">
          <h2>👤 Your Profile</h2>

          {/* Upload Box */}
          <div className="input-group">
            <label>Upload Resume</label>

            <div className="upload-box">
              <input type="file" accept=".pdf,.docx" />

              <div className="upload-content">
                <div className="icon">⬆</div>
                <p>Click to upload or drag & drop</p>
                <span>PDF or DOCX (Max 5MB)</span>
              </div>
            </div>
          </div>

          <div className="divider">OR</div>

          {/* Self Description */}
          <div className="input-group">
            <label>Quick Self Description</label>
            <textarea placeholder="Briefly describe your experience..."></textarea>
          </div>

          <div className="info-box">
            Either Resume or Description is required
          </div>
        </div>

      </div>

      {/* FOOTER BUTTON */}
      <div className="footer">
        <button className="generate-btn">
          ✨ Generate My Interview Strategy
        </button>
      </div>

    </main>
  );
};

export default Home;