import React from "react";
import "./card.css";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="cardLeftGroup">
          <div className="timeLocationDetails">
            <span className="locationText">San-Diego</span>
            <span className="dateText">26 Sept 2023</span>
            <span className="timeText">10:30-11:30 Pacific Time</span>
          </div>
          <div className="title">
            Radio-labeled Mass Balance and Metabolite Profiling Studies:
            Fundamentals, Best Practices, Regulatory Requirements, Applications
            and Case Studies
          </div>
          <div className="description">
            This workshop will provide an overview of how clinical pharmacology
            contributes to key decision‑making milestones throughout the drug
            development process, from establishing a first-in-human dose to
            crafting the package insert for filing.
          </div>
        </div>
        <div className="cardRightGroup borderLeft">
          <button className="registerButton">Register</button>

          <div className="extraDetails">
            <span>In Person | Seminar Luncheon</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
