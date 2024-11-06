'use client'
import ProgressBar from "@ramonak/react-progress-bar";
import { FaHtml5 } from "react-icons/fa";

const skills = [
    {
      id: 1,
      title: "Html",
      percentage: "90",
      logo : <> <FaHtml5/></>
    },
    {
      id: 2,
      title: "Css",
      percentage: "85",
      logo : <></>
    },
    {
      id: 3,
      title: "Javascript",
      percentage: "70",
      logo : <></>
    },
    {
      id: 4,
      title: "TypeScript",
      percentage: "95",
      logo : <></>
    },
    {
      id: 5,
      title: "React",
      percentage: "70",
      logo : <></>
    },
    {
      id: 6,
      title: "Next js",
      percentage: "50",
      logo : <></>
    },
    {
      id: 7,
      title: "Bootstrap",
      percentage: "60",
      logo : <></>
    },
    {
      id: 8,
      title: "Tailwind",
      percentage: "65",
      logo : <></>
    },
    {
      id: 9,
      title: "Figma",
      percentage: "20",
      logo : <></>
    },
  ];
  

function Skills() {
  return (
    <>
     {skills.map(({title , percentage} , index) => {
        return(
            <div className='progress__box' key={index}>
                <h3 className="skills__title" >{title}</h3>
                <div className="progress_bar" >
                    {/* <ProgressBar  completed={percentage} maxCompleted={100} 
                    bgColor="var(--first-color)" height="25px" labelClassName="bar__color" labelAlignment='center' 
                     customLabel={`${percentage}%`} transitionDuration="5s" transitionTimingFunction='ease-in'/> */}
                     <ProgressBar
    completed={percentage}
    maxCompleted={100}
    bgColor="var(--first-color)"
    height="25px"
    labelAlignment="center"
    customLabel={`${percentage}%`}
    transitionDuration="5s" // Controls the speed of the animation
    transitionTimingFunction="ease-in" // Controls the easing effect
    labelClassName="bar__color"
/>

                </div>

            </div>
        )
     })}
    </>
  )
}

// function Skills() {
//     const [animatedPercentage, setAnimatedPercentage] = useState('0');
  
//     useEffect(() => {
//       // Update the animated percentage to the actual percentage with a delay
//       skills.forEach((skill) => {
//         setTimeout(() => setAnimatedPercentage(skill.percentage), 500);
//       });
//     }, []);
  
//     return (
//       <>
//        {skills.map(({title, percentage, id }) => (
//           <div className='progress__box' key={id}>
//               <h3 className="skills__title">{title}</h3>
//               <div className="progress_bar">
//                   <ProgressBar
//                       completed={animatedPercentage}
//                       maxCompleted={100}
//                       bgColor="var(--first-color)"
//                       height="25px"
//                       customLabel={`${animatedPercentage}%`}
//                       labelAlignment="center"
//                       labelClassName="bar__color"
//                   />
//               </div>
//           </div>
//        ))}
//       </>
//     );
//   }
  

export default Skills