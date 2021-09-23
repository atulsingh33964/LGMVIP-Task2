import React from 'react'
import '../Hero/Hero.css'

export default function Hero()
{
    return(
        <section className="home">
            <div className="content">
                <h3>Welcome To My Task</h3>
                <p>Click Then "Get users" button to fetch</p> 
            </div>
            <div className="image">
                <image src={Hero} alt="Hero"></image>      
            </div>
            <footer className="footer">
          <h1>By<a href="www.linkedin.com/in/atul-vikram-singh-8b1b751a2/" target="_blank">Atul Vikram SIngh</a></h1>
        </footer>  
        </section>   
    )
}
 
