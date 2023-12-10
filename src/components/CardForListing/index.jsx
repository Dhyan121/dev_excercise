import React from "react";
import "./cardForListing.css";

const CardForListing = ({ title, extraDetails, location }) => {
  return (
    <div className="cardForListing">
      <div className="col1">{title}</div>
      <div className="col2">
        <span>25 Sept 2023</span>
      </div>
      <div className="col3">
        <span>{extraDetails}</span>
      </div>
      <div className="col4">
        <span>{location}</span>
      </div>
      <div className="navigate">
        <svg
          width="28"
          height="16"
          viewBox="0 0 28 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M20.1813 0L18.5564 1.68364L23.5033 6.69797H0.321289V9.04043H23.5033L18.5564 14.0548L20.1813 15.7384L27.9447 7.8692L20.1813 0Z"
            fill="#2F57A4"
          />
        </svg>
      </div>
    </div>
  );
};

export default CardForListing;
