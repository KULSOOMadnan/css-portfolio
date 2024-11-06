import Image from 'next/image';
import Profile from '../../public/assets/profile3.png'
import Profile2 from '../../public/assets/profile2.png'
import  '../styles/page.css'
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';

export default function Home() {
  return (
   <section className="home section grid">
    <Image src={Profile} alt="Profile Image" className="home__img large-img " />
    <Image src={Profile2} alt="Profile Image" className="home__img small-img rounded-circle" />

    <div className="home-content">
      <div className="home-data">
        <h1 className="home-title">
          <span>I&apos;m Kulsoom Adnan.</span> <br/> Web Developer
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

