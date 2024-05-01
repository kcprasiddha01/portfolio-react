import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

export const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src='Profilephoto_Upload.jpg' alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a fullstack developer from Nepalgunj, Nepal currently studying BSc CSIT in Patan Multiple Campus, IOST, TU</p>
                    <p>My passion for fullstack development is not only for but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:'50%'}}/></div>
                    <div className="about-skill"><p>React JS</p> <hr style={{width:'70%'}}/></div>
                    <div className="about-skill"><p>JavaScript</p> <hr style={{width:'60%'}}/></div>
                    <div className="about-skill"><p>ExpressJS</p> <hr style={{width:'50%'}}/></div>
                    <div className="about-skill"><p>MongoDB</p> <hr style={{width:'75%'}}/></div>
                    <div className="about-skill"><p>Python</p> <hr style={{width:'60%'}}/></div>
                    <div className="about-skill"><p>Django</p> <hr style={{width:'70%'}}/></div>
                    <div className="about-skill"><p>Github/GitLab</p> <hr style={{width:'80%'}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>7+</h1>
                <p>SKILLS ACQUIRED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
        </div>
    </div>
  )
}
