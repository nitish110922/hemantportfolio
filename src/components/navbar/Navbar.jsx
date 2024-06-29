import React from 'react'
import "./navbar.css"
import { useState } from 'react'

import {AiOutlineHome} from 'react-icons/ai'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import {AiFillBook} from 'react-icons/ai'
import {MdSchool} from 'react-icons/md'
import {AiOutlineMessage} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'

const Navbar = () => {

  const [activeClass, setActiveClass] = useState("#");

  return (
    <nav>
      <a href="#" onClick={()=>setActiveClass("#")} className={activeClass === "#" ? "active": " "}><AiOutlineHome/></a>
      <a href="#skills" onClick={()=>{setActiveClass("#skills")}} className={activeClass === "#skills" ? 'active': ""}><BsFillBookmarkStarFill/></a>
      <a href="#projects" onClick={()=>{setActiveClass("#projects")}} className={activeClass === "#projects" ? 'active': ""}><AiFillBook/></a>
      <a href="#achievements" onClick={()=>{setActiveClass("#achievements")}} className={activeClass === "#achievements" ? 'active': ""}><RiServiceLine/></a>
      <a href="#education" onClick={()=>{setActiveClass("#education")}} className={activeClass === "#education" ? 'active': ""}><MdSchool/></a>
      <a href="#contact" onClick={()=>{setActiveClass("#contact")}} className={activeClass === "#contact" ? 'active': ""}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Navbar