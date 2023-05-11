import React from "react";
import {FaTwitter, FaFacebookF, FaInstagram, FaPinterest, FaYoutube} from "react-icons/fa"
function Footer(){
    return (
        <section>
            <div id = 'footer'>
            <div className = 'colom'>
            <h4>Contact</h4>
            <p><strong>Address:</strong> 1443 Elson Rd BrookHaven Pa</p>
            <p><strong>Phone:</strong> 215-268-4336</p>
            <p><strong>Hours:</strong> 10:00 am to 7:00 pm Mon - Sat</p>
            <div className = 'follow'>
                <h4>Follow Us</h4>
                <div className = 'icon'>
                 <FaTwitter />
                 <FaFacebookF />
                 <FaInstagram />
                <FaPinterest />
                <FaYoutube />
                </div>
            </div>
            </div>

            <div className = 'colom'>
                <h4>About</h4>
                <a href = '/'>About Us</a>
                <a href = '/'>Delivery Information</a>
                <a href = '/'>Privacy Policy</a>
                <a href = '/'>Terms And Conditions</a>
            </div>
            
            
            <div className="col install">
                <h4>Install App</h4>
                <p>From App Store or Google Play</p>
                <div className='row'>
                    <img src="/img/appstore.png" className='appstore'/>
                    <img src='/img/googleplay.png' className='appstore playstore'/>
                    </div> 
                    <p>Secured Payment Gateways</p>
                    <div className="payments">
                    <img src='/img/visa.jpeg' className='card' />
                    <img src='/img/mastercard.jpeg' className='card' />
                    <img src='/img/paypal.jpeg' className='card' />
                    <img src='/img/americanex.jpeg' className='card' />
                    </div>           
                </div>
                </div>
                <div className='copyright'>© 2023 Klassic Kicks, Inc. All Rights Reserved</div>
        </section>
    )
}

export default Footer;