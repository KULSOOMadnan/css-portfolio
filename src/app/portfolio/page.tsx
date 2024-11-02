import PortfolioItems from '@/components/PortfolioItems'
import React from 'react'
import { FaCode, FaFileCode } from 'react-icons/fa'
import { FiExternalLink, FiUser } from 'react-icons/fi'
import '../../styles/portfolio.css'

let portfolio =[
  {id : 1 , img : '' ,title : 'Tick Tac Toe', details : [ {icon : <FaFileCode /> , title : 'Project : ' , desc : 'Photo'},{icon : <FiUser /> , title : 'Practice : ' , desc : 'Project'},{icon : <FaCode  /> , title : 'Languages : ' , desc : 'Html Css Javascript'},{icon : <FiExternalLink/> , title : 'Preview : ' , desc : 'https://tic-tac-toe-game-phi-blond.vercel.app/'}],},
  {id : 2 , img : '' ,title : 'Tacos Shop', details : [ {icon : <FaFileCode /> , title : 'Project : ' , desc : 'Photo'},{icon : <FiUser /> , title : 'Practice : ' , desc : 'Project'},{icon : <FaCode  /> , title : 'Languages : ' , desc : 'Html Css '},{icon : <FiExternalLink/> , title : 'Preview : ' , desc : 'https://tacos-shop-five.vercel.app/about.html'}],},
  {id : 3 , img : '' ,title : 'Resume Builder', details : [ {icon : <FaFileCode /> , title : 'Project : ' , desc : 'Photo'},{icon : <FiUser /> , title : 'Practice : ' , desc : 'Project'},{icon : <FaCode  /> , title : 'Languages : ' , desc : 'Html Css '},{icon : <FiExternalLink/> , title : 'Preview : ' , desc : 'https://tacos-shop-five.vercel.app/about.html'}],},
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