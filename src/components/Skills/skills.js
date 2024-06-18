import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ux-design.png';
import WebDesign from '../../assets/webdesign-icon.png';
import AppDesign from '../../assets/react-icon.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled and passionate software engineer with experince in creating visually appealing and user-friedly websites and applications. I have a strong understanding of design and a keen eye for details. I am proficient in HTML, CSS, JavaScript, React js, Hooks, Node.js as well as design such as Canva and Figma</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p> We ensure that the website, mobile app, or software is user-friendly and visually appealing to our users</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={WebDesign} alt="Web Design" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p> We plan, create, and code web apps, using both technical and non-technical skills to produce functional, user-friendly websites and web applications.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={AppDesign} alt="App Design" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>We are involved in the software development life cycle, build, design and maintain applications. We translate software requirements into programming codes to use for client and business needs</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills