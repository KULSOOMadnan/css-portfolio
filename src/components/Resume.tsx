import React from "react";

interface ResumeInfo {
    icon : JSX.Element,
    year : string,
    title : JSX.Element ,
    desc : string
}

function Resume({icon , year , title , desc} : ResumeInfo) {
  return (
   <div className="resume__item">
        <div className="resume__icon">{icon}</div>
       <span className="resume__date">{year}</span>
       <h3 className="resume__subtitle">{title}</h3>
       <p className="resume__description">{desc}</p>
       
   </div>
  );
}

export default Resume;
