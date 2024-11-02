import Image from 'next/image';
import Profile from '../../public/assets/home.jpg'
import  '../styles/page.css'
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';

export default function Home() {
  return (
   <section className="home section grid">
    <Image src={Profile} alt="Profile Image" className="home__img" />

    <div className="home-content">
      <div className="home-data">
        <h1 className="home-title">
          <span>I'm Kulsoom Adnan.</span> Web Developer
        </h1>
        <p className="home-description">
          Passionate about creating interactive, user-focused websites, I blend clean design with efficient code to deliver seamless digital experiences. With a focus on modern web standards, I strive to make each project intuitive and visually captivating.
        </p>
        <Link href='/about' className="button">
          More About Me 
          <span className="button__icon"><FaArrowRight/></span>
        </Link>
      </div>
    </div>
    <div className="color__block"></div>
   </section>
  );
}

