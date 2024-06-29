import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/hemant-jangid-9a4b93255/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/hemantjangid-001" target='_blank'><BsGithub/></a>
      <a href="https://www.instagram.com/itz.he.mn.t/" target='_blank'><FaInstagram /></a>
      <a href="mailto:jangid.h4004@gmail.com" target='_blank'><FiMail /></a>
    </div>
  )
}

export default HeaderSocials
