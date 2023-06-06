import React from "react";
import {FaStar, FaShoppingCart} from "react-icons/fa";
function Exclusive(){
    return(
            <section id = "product1" className="section-p1">
                
         <h2>Rarest Of The Rare</h2>
         <p>our most exclusive collection </p>
         <div className = 'pro-container'>
            <div className = 'pro'>
                <img src = "/img/freddy-kruger-dunks.webp" alt = ""></img>
                <div className = "des">
                    <span>Nike</span>
                    <h5>SB Dunk Low 'Freddy Krueger'</h5>
                    <div className = "star">
                       <FaStar className = "stars"/>
                       <FaStar className = "stars" />
                       <FaStar className = "stars"/>
                       <FaStar className = "stars"/>
                       <FaStar className = "stars"/>
                    </div>
                    <h4>$150</h4>
                </div>
                <a href = "/"><FaShoppingCart className = "fal fa-shopping-cart"/></a>
            </div>

            <div className = 'pro'>
                <img src = "/img/eminem4.webp" alt = ""></img>
                <div className = "des">
                    <span>Jordan</span>
                    <h5>Air Jordan 4 Retro 'Eminem x Carhartt' </h5>
                    <div className = "star">
                       <FaStar className = "stars"/>
                       <FaStar className = "stars" />
                       <FaStar className = "stars"/>
                       <FaStar className = "stars"/>
                       <FaStar className = "stars"/>
                    </div>
                    <h4>$170</h4>
                </div>
                <a href = "/"><FaShoppingCart className = "fal fa-shopping-cart"/></a>
            </div>

            <div className = 'pro'>
                <img src = "/img/top-three.jpeg" alt = ""></img>
                <div className = "des">
                    <span>Jordan</span>
                    <h5>Top 3 Jordan 1s</h5>
                    <div className = "star">
                       <FaStar className = "stars"/>
                       <FaStar className = "stars" />
                       <FaStar className = "stars"/>
                       <FaStar className = "stars"/>
                       <FaStar className = "stars"/>
                    </div>
                    <h4>$200</h4>
                </div>
                <a href = "/"><FaShoppingCart className = "fal fa-shopping-cart"/></a>
            </div>

            <div className = 'pro'>
                <img src = "/img/mags.webp" alt = ""></img>
                <div className = "des">
                    <span>Nike</span>
                    <h5>Nike Mag 'Back to the Future'</h5>
                    <div className = "star">
                       <FaStar className = "stars"/>
                       <FaStar className = "stars" />
                       <FaStar className = "stars"/>
                       <FaStar className = "stars"/>
                       <FaStar className = "stars"/>
                    </div>
                    <h4>$350</h4>
                </div>
                <a href = "/"><FaShoppingCart className = "fal fa-shopping-cart"/></a>
            </div>

            <div className = 'pro'>
                <img src = "/img/red-october.jpeg" alt = ""></img>
                <div className = "des">
                    <span>Nike</span>
                    <h5>Nike Air Yeexy 2 'Red October'</h5>
                    <div className = "star">
                       <FaStar className = "stars"/>
                       <FaStar className = "stars" />
                       <FaStar className = "stars"/>
                       <FaStar className = "stars"/>
                       <FaStar className = "stars"/>
                    </div>
                    <h4>$300</h4>
                </div>
                <a href = "/"><FaShoppingCart className = "fal fa-shopping-cart"/></a>
            </div>

            <div className = 'pro'>
                <img src = "/img/boost.webp" alt = ""></img>
                <div className = "des">
                    <span>Adidas</span>
                    <h5>Yeezy Wave Runners</h5>
                    <div className = "star">
                       <FaStar className = "stars"/>
                       <FaStar className = "stars" />
                       <FaStar className = "stars"/>
                       <FaStar className = "stars"/>
                       <FaStar className = "stars"/>
                    </div>
                    <h4>$160</h4>
                </div>
                <a href = "/"><FaShoppingCart className = "fal fa-shopping-cart"/></a>
            </div>

            <div className = 'pro'>
                <img src = "/img/questions.webp" alt = ""></img>
                <div className = "des">
                    <span>Reebok</span>
                    <h5>Question Mid</h5>
                    <div className = "star">
                       <FaStar className = "stars"/>
                       <FaStar className = "stars" />
                       <FaStar className = "stars"/>
                       <FaStar className = "stars"/>
                       <FaStar className = "stars"/>
                    </div>
                    <h4>$220</h4>
                </div>
                <a href = "/"><FaShoppingCart className = "fal fa-shopping-cart"/></a>
            </div>

            <div className = 'pro'>
                <img src = "/img/dunks.webp" alt = ""></img>
                <div className = "des">
                    <span>Nike</span>
                    <h5>Ben and Jerry Dunks</h5>
                    <div className = "star">
                       <FaStar className = "stars"/>
                       <FaStar className = "stars" />
                       <FaStar className = "stars"/>
                       <FaStar className = "stars"/>
                       <FaStar className = "stars"/>
                    </div>
                    <h4>$140</h4>
                </div>
                <a href = "/"><FaShoppingCart className = "fal fa-shopping-cart"/></a>
            </div>
         </div>
        </section>

        
    )
}

export default Exclusive;