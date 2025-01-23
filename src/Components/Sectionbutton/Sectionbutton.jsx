import React from 'react';
import '../Sectionbutton/Sectionbutton.css';

const Sectionbutton = ({ buttonText, style }) => {
  return (
    <button className="sectionbutton" style={style}>
      <span>{buttonText}</span>
    </button>
  );
};

export default Sectionbutton;
