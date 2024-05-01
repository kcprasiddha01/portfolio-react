import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

export const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-details">
                        <img src={mail_icon} alt="" /> <p>kcprasiddha01@gmail.com</p>
                    </div>
                    <div className="contact-details">
                        <img src={call_icon} alt="" /> <p>+977-981*****70</p>
                    </div>
                    <div className="contact-details">
                        <img src={location_icon} alt="" /> <p>Nepalgunj, Nepal</p>
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea type="message" placeholder='Enter your message' name='message' rows='8'/>
                <button type='submit' className='contact-submit'>Submit now</button>
            </div>
        </div>
    </div>
  )
}
