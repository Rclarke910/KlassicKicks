import React from "react";
import {FaStar, FaShoppingCart} from "react-icons/fa";

function Feature(){
    return (
        <section id = "product1" className="section-p1">
         <h2>Featured Products</h2>
         <p>Some currently popular items</p>
         <div className = 'pro-container'>
            <div className = 'pro'>
                <img src = "/img/space-jams.webp" alt = ""></img>
                <div className = "des">
                    <span>Jordan</span>
                    <h5>Air Jordan 11 Retro 'Space Jam'</h5>
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
                <img src = "/img/flu-game.jpeg" alt = ""></img>
                <div className = "des">
                    <span>Jordan</span>
                    <h5>Air Jordan 12 'Flu Game'</h5>
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
                    <h5>Air Jordan 1 'Top 3'</h5>
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
                <img src = "/img/bred4.jpeg" alt = ""></img>
                <div className = "des">
                    <span>Jordan</span>
                    <h5>Air Jordan 4 'Bred'</h5>
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
                <img src = "/img/bape.webp" alt = ""></img>
                <div className = "des">
                    <span>Addidas x Bape</span>
                    <h5>A BATHING APE X NMD_R1 'OLIVE CAMO'</h5>
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

export default Feature