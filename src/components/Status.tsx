import React from 'react'

const Statsinfo= [
    {id : 1 , no : '6+' , title :<><span>Years of</span><br /><span>Experience</span></>},
    {id : 2 , no : '25+' , title : <><span>Completed</span><br /><span>Projects</span></>},
    {id : 3 , no : '6+' , title : <><span>Completed</span><br /><span>Projects</span></>},
    {id : 4 , no : '6+' , title : <><span>Completed</span><br /><span>Projects</span></>},
]

function Status() {
  return (
    <>
    {Statsinfo.map(({no , title} , index )=> {
        return (
            <div className="stats__box" key={index}>
                <h3 className='stats__no'>{no}</h3>
                <p className='stats__title'>{title}</p>
            </div>
        )
    })} 
    </>
  )
}

export default Status