import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImage from '../../assets/hireme.png';
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section className='intro'>
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Chi Tech Industrial Limited</span> <br />Software Engineer</span>
            <p className="introPara">I am a skilled software engineer/web developer with experience in creating <br /> visually appealing and user friendly websites/applications</p>
            <Link><button className="btn"><img src={btnImage} alt="" className='btnImg' />Hire Me</button></Link>
        </div>
        <img src={bg} className='bg' alt="profile" />
    </section>
  )
}

export default Intro;