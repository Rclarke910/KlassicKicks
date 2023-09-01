import React, {useState} from "react";
import { FaShoppingBag } from "react-icons/fa";
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link, Route, Routes } from 'react-router-dom'

function Navbar(){

    const [burgMenu, setBurgMenu] = useState(false)
    const handleClick = () => {setBurgMenu(!burgMenu)}

    return <section id = "navbar" >
<a href = "#"><h2 className="logo">Klassic<span className = 'logo-span'>Kicks</span></h2></a>
<div>
    <ul id = 'nav' className={burgMenu ? 'active' : '' }>
    <li><a href="#" id='close'><AiOutlineClose id='close' onClick={handleClick} className={ !burgMenu ? 'closed' : '' }/></a></li>
      <li><Link to = "/" className = "active">Home</Link></li>
      <li><Link to = "/shop">Shop</Link></li>
      <li><a href = "about.html">About</a></li>
      <li><a href = "#footer">Contact</a></li>
      <li><a href = "cart.html"><FaShoppingBag /></a></li>
    </ul>
</div>
<div id='mobile'>

    <GiHamburgerMenu onClick={handleClick} id='bar' className="fas fa-outdent" />
</div>
    </section>
}

export default Navbar