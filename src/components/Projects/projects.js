import React from 'react'
import './projects.css'
import Portfolio1 from '../../assets/e-commerce.png';
import Portfolio2 from '../../assets/booking.png';
import Portfolio3 from '../../assets/foodDel.PNG';
import Portfolio4 from '../../assets/portfolio.PNG';
// import Portfolio5 from '../../assets/portfolio-5.png';
// import Portfolio6 from '../../assets/portfolio-6.png';

const Projects = () => {
  return (
    <section id='projects'>
        <h2 className='projectsTitle'>My Portfolio</h2>
        <span className="projectsDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel prefect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>

        <div className="projectsImgs">
          <a href='https://frontend-zpv2.onrender.com/'><img src={Portfolio1} alt="" className="projectsImg" /></a>
          <a href='https://airline-booking-system.onrender.com/'> <img src={Portfolio2} alt="" className="projectsImg" /></a>
          <a href='https://online-food-delivery-f2tc.onrender.com/'> <img src={Portfolio3} alt="" className="projectsImg" /></a>
          <a href='https://portfolio-7jwu.onrender.com/'><img src={Portfolio4} alt="" className="projectsImg" /></a>
            
            
            {/* <img src={Portfolio5} alt="" className="projectsImg" />
            <img src={Portfolio6} alt="" className="projectsImg" /> */}
        </div>

        <button className="projectBtn">See More</button>
    </section>
  )
}

export default Projects