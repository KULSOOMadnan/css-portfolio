import React from 'react';
import { FaEnvelopeOpen , FaPhoneSquareAlt , FaFacebookF ,FaTwitter , FaYoutube , FaLinkedin  , FaGithub  } from 'react-icons/fa';
import { VscGithub } from "react-icons/vsc";
import { FiSend } from 'react-icons/fi';
import '../../styles/contact.css'

function Contact() {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get in <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be shy!</h3>

          <p className="contact__description">
            Feel free to get touch with me . I am always open to discussing 
            new projects , creative ideas or oppoetunities to be part of your visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon '/>

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">adnanirfan282@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon '/>

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+92 3443 343435</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href='https://facebook.com' className="contact__social-link"> <FaFacebookF/></a>
            <a href='https://linkedin.com' className="contact__social-link"> <FaLinkedin/></a>
            <a href='https://github.com' className="contact__social-link"> <FaGithub/></a>
            <a href='https://twitter.com' className="contact__social-link"> <FaTwitter/></a>
          </div>
        </div>

        <form  className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" className="form__control" placeholder='Your Good Name' />
            </div>

            <div className="form__input-div">
              <input type="email" className="form__control" placeholder='Your Email' />
            </div>

            <div className="form__input-div">
              <input type="text" className="form__control" placeholder='Your Subject' />
            </div>
            
          </div>

          <div className="form__input-div">
            <textarea name="" className="form__control textarea" placeholder='Your Message'></textarea>
          </div>

          <button className='button '>
            Send Message <span className="button__icon contact__button-icon">
              <FiSend/>
            </span>
          </button>
        </form>
      </div>

    </section>
  )
}

export default Contact