'use client'
import React, { useState } from 'react';

interface PORTFOLIOiTEMS{
    img : string ,
    title : string ,
    details : {icon : JSX.Element , title : string , desc : string}[]
}

function PortfolioItems({img , title , details} : PORTFOLIOiTEMS) {
    const [modal , setmodal] = useState(false);
    const toggleModal = () => {
        setmodal(!modal)
    }
  return (
    <div className='portfolio__item'>
        <img src={img} alt="" className="portfolio__img" />

        <div className="portfolio__hover" onClick={toggleModal}>
            <h3 className='portfolio__title'>{title}</h3>
        </div>

       {modal && ( <div className="portfolio__modal">
            <div className="portfolio__model-content">
                <img src='/assets/close.svg' alt="close" className="modal__close" onClick={toggleModal} />

                <h3 className="modal__title">{title}</h3>

                <ul className="modal__list grid">
                    {details.map(({icon , title , desc},index) => {
                        return (
                            <li className='modal__item' key={index}>
                                <span className="item__icon">{icon}</span>

                                <div>
                                    <span className="item__title">{title}</span>
                                    <a href={desc} className="item__details">{desc}</a>

                                </div>
                            </li>
                        )
                    })}
                </ul>
                <img src={img} alt="" className="modal__img" />
            </div>
        </div>)}
    </div>
  )
}

export default PortfolioItems