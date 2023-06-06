import React from "react";

function BannerBox(){
    return (
        <section className='sm-banner'>
            <div className='banner-box'>
                <h2>Our Latest Drops</h2>
                <span>see our newest additions</span>
                <button>Learn More</button>
            </div>
            <div className=' banner-box banner-box2'>
                <h2>Upcoming Drops</h2>
                <span>see what we have on the way</span>
                <button>Learn More</button>
            </div>
        </section>
    )
}

export default BannerBox;