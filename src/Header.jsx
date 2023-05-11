import React from "react";
import {FaShoppingBag} from "react-icons/fa";
function Header(){
    return <section id = "header">
<a href = "#"><h2 className="logo">Klassic<span className = 'logo-span'>Kicks</span></h2></a>
<div>
    <ul id = 'navbar'>
      <li><a className = "active" href = "index.html">Home</a></li>
      <li><a href = "shop.html">Shop</a></li>
      <li><a href = "about.html">About</a></li>
      <li><a href = "#footer">Contact</a></li>
      <li><a href = "cart.html"><FaShoppingBag /></a></li>
    </ul>
</div>
    </section>
}

export default Header