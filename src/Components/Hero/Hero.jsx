import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <img src="Profilephoto_Upload.jpg" alt="" />
        <h1><span>I'm Prasiddha Jung K.C.,</span> fullstack developer based in Nepal.</h1>
        <p>I am a fullstack developer from Nepalgunj, Nepal currently studying BSc CSIT in Patan Multiple Campus, IOST, TU</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero