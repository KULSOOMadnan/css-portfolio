import PortfolioItems from '@/components/PortfolioItems'
import React from 'react'
import { FaCode, FaFileCode } from 'react-icons/fa'
import { FiExternalLink, FiUser } from 'react-icons/fi'
import '../../styles/portfolio.css'

const portfolio =[
  {id : 6 , img : '/assets/portfolio.png' ,title : 'Portfolio Website', details : [ {icon : <FaFileCode /> , title : 'Project : ' , desc : 'Personal Portfolio'},{icon : <FiUser /> , title : 'Practice : ' , desc : 'Project'},{icon : <FaCode  /> , title : 'Languages : ' , desc : 'Next.js Tailwind css'},{icon : <FiExternalLink/> , title : 'Preview : ' , desc : 'https://portfolio-of-kulsoom.vercel.app/'}],},
  {id : 5 , img : '/assets/todo2.png' ,title : ' To do list ', details : [ {icon : <FaFileCode /> , title : 'Project : ' , desc : 'Photo'},{icon : <FiUser /> , title : 'Practice : ' , desc : 'Project'},{icon : <FaCode  /> , title : 'Languages : ' , desc : 'Html Css Typescript Javascript '},{icon : <FiExternalLink/> , title : 'Preview : ' , desc : 'https://todo-list-sandy-xi.vercel.app/?vercelToolbarCode=KCteo2VDiyyLA5-'}],},
  {id : 1 , img : '/assets/tic.png' ,title : 'Tick Tac Toe', details : [ {icon : <FaFileCode /> , title : 'Project : ' , desc : 'Tic Tac Toe'},{icon : <FiUser /> , title : 'Practice : ' , desc : 'Project'},{icon : <FaCode  /> , title : 'Languages : ' , desc : 'Html Css Javascript'},{icon : <FiExternalLink/> , title : 'Preview : ' , desc : 'https://tic-tac-toe-game-phi-blond.vercel.app/'}],},
  {id : 2 , img : '/assets/tacos.png' ,title : 'Tacos Shop', details : [ {icon : <FaFileCode /> , title : 'Project : ' , desc : 'Tacos Shop'},{icon : <FiUser /> , title : 'Practice : ' , desc : 'Project'},{icon : <FaCode  /> , title : 'Languages : ' , desc : 'Html Css '},{icon : <FiExternalLink/> , title : 'Preview : ' , desc : 'https://tacos-shop-five.vercel.app/about.html'}],},
  {id : 3 , img : '/assets/resume3.png' ,title : 'Resume Builder', details : [ {icon : <FaFileCode /> , title : 'Project : ' , desc : 'Static Resume'},{icon : <FiUser /> , title : 'Practice : ' , desc : 'Project'},{icon : <FaCode  /> , title : 'Languages : ' , desc : 'Html Css '},{icon : <FiExternalLink/> , title : 'Preview : ' , desc : 'https://resume-builder-kulsoom.vercel.app/'}],},
  {id : 4 , img : '/assets/resume.png' ,title : ' My Resume ', details : [ {icon : <FaFileCode /> , title : 'Project : ' , desc : 'Resume Builder'},{icon : <FiUser /> , title : 'Practice : ' , desc : 'Project'},{icon : <FaCode  /> , title : 'Languages : ' , desc : 'Html Css Typescript Javascript '},{icon : <FiExternalLink/> , title : 'Preview : ' , desc : 'https://resume-builder-by-kulsoom.vercel.app/'}],},
]
function Portfolio() {
  return (
    <section className="portfolio section">
      <h2 className="section__title">My <span>Projects</span></h2>
      <div className="portfolio__container container grid">
      {portfolio.map((item) => {
        return <PortfolioItems key={item.id} {...item}/>
      })}
      </div>
    </section>
  )
}

export default Portfolio