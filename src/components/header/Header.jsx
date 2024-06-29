import React from 'react'
import "./header.css"
import CTA from "./CTA"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header-inner-container">
        <h2>Hi, I'm</h2>
        <h1 className='my-name'>Hemant Jangid</h1>
        <h2 className='text-light'>I am a Web Developer and a Competitive Programmer, who loves to transform ideas into reality using code. I'm currently in my pre-final year, pursuing B.Tech in Electrical Engineering at IIT(ISM) Dhanbad. I like to learn about new technologies.</h2>
        <CTA />
        </div>

        <HeaderSocials />

        <a href="#skills" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header