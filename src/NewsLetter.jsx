import React from "react";

function NewsLetter(){
    return (
        <section id = 'newsletter'>
            <div className = 'newstext'>
                <h2>Sign Up For Newsletters</h2>
                <p>Get E-mail updates on our latest drops and <span>special offers</span>
                </p>

            </div>
            <div className = 'form'>
                <input type = 'text' placeholder="Your E-mail address"></input>
                <button>Sign Up</button>
            </div>
        </section>
    )
}

export default NewsLetter;