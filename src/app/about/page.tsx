import React from "react";
import "../../styles/about.css";
import Info from "../../components/Info";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";
import Status from "@/components/Status";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import { FaBriefcase } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

const resume = [
  {
    id: 1, category: "Experience",icon: <FaBriefcase />,year: " 2024 - present",
    title: ( <>
        Web Developer <span>-</span>
      </>
    ),
    desc: "Responsible for building and maintaining websites, ensuring mobile responsiveness, and optimizing user experience. Actively involved in debugging and improving code quality.",
  },
  {
    id: 2,
    category: "Experience",
    icon: <FaBriefcase />,
    year: " 2024",
    title: (<>
       
        UI/UX Designer <span> Learning</span>
      </>
    ),
    desc: "Currently gaining hands-on experience in UI/UX design principles, focusing on user-centered design, wireframing, and creating prototypes. Developing skills in user research, interface design, and improving usability to create engaging digital experiences."

  },
  {
    id: 3,
    category: "Experience",
    icon: <FaBriefcase />,
    year: " 2023",
    title: (<>
       
        Junior Web Developer <span>-</span>
      </>
    ),
    desc: "Assisted in developing client websites, collaborating closely with the design team to implement new features and improve front-end performance.",
  },
  {
    id:6,
    category: "Education",
    icon: <FaGraduationCap />,
    year: " 2024 - present",
    title: (
      <>
        {" "}
        Generative AI Course <span>Governor House</span>
      </>
    ),
    desc: "Enrolled in a specialized course in Generative AI, focusing on the fundamentals of machine learning and hands-on projects for real-world AI solutions.",
  },
  {
    id: 5,
    category: "Education",
    icon: <FaGraduationCap />,
    year: " 2023",
    title: (
      <>
        {" "}
        Intermadiate <span>Governmnet College for Women Korangi 4 </span>
      </>
    ),
    desc: "Studied arts, developing skills in communication, critical thinking, and cultural studies. This program built a solid foundation for creative and analytical skills.",
  },
  {
    id: 4,
    category: "Education",
    icon: <FaGraduationCap />,
    year: " 2021",
    title: (
      <>
        {" "}
        Matriculation <span>Three Star Grammer School</span>
      </>
    ),
    desc: "Completed high school with a strong focus on science subjects, securing a solid foundation in mathematics and basic programming principles.",
  },
  
  
];

function page() {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personl Infos</h3>

            <ul className="info__list grid">
              <Info />
            </ul>
            <Link href="/" download="" className="button">
              Download Cv
              <span className="button__icon">
                <FaDownload />
              </span>
            </Link>
          </div>
          <div className="stats grid">
            <Status />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>
        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="section__subtitle subtitle__center">
          Experience & Education
        </h3>
        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "Experience") {
                return <Resume key={val.id} {...val} />;
              }
            })}
          </div>

          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "Education") {
                return <Resume key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
