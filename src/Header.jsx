import React, {useState} from "react";
import { FaShoppingBag } from "react-icons/fa";
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

function Header(){

    const [burgMenu, setBurgMenu] = useState(false)
    const handleClick = () => {setBurgMenu(!burgMenu)}

    return <section id = "header" >
<a href = "#"><h2 className="logo">Klassic<span className = 'logo-span'>Kicks</span></h2></a>
<div>
    <ul id = 'navbar' className={burgMenu ? 'active' : '' }>
    <li><a href="#" id='close'><AiOutlineClose id='close' onClick={handleClick} className={ !burgMenu ? 'closed' : '' }/></a></li>
      <li><a className = "active" href = "index.html">Home</a></li>
      <li><a href = "shop.html">Shop</a></li>
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

export default Header