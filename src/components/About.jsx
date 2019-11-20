import React from "react";

const About = ({ title, action, reaction }) => {
  return (
    <div className="content-container about-us">
      <div className="about">
        <div className="we-love-you">
          <h3>{title}</h3>
          <p>
            {action}
  <span>{reaction}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
