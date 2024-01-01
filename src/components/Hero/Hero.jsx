import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'

function Hero() {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>

                  
                    <motion.h1 initial={{y:"2rem", opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{
                        duration:2,
                        type:"spring"
                    }}>
                        Discover<br/> the Essence of <br/> Sri Lanka
                    </motion.h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className='secondaryText'>At Ceylon Spice Haven,<br/> we are passionate about introducing
the world to the authentic flavors of Sri Lankan spices.  </span>
                    <span className='secondaryText'>Our journey begins in
the heart of Sri Lanka, where spices are more than ingredients;<br/> they&#39;re a part
of our heritage and culture. </span>
                </div>
                
                <div className="flexCenter search-bar">
                    <HiLocationMarker color='var(--blue)' size={25}/>
                    <input type='text'/>
                    <button className='button'>Search</button> 
                </div>
                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span><CountUp start={8800} end={9000} duration={4}/>
                        <span>+</span></span>
                        <span className='secondaryText'>Happy Customers</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span><CountUp start={14950} end={15000} duration={4}/>
                        <span>+</span></span>
                        <span className='secondaryText'>Orders
                        </span>
                    </div>
                    <div className="flexColCenter stat">
                        <span><CountUp  end={30} />
                        <span>+</span></span>
                        <span className='secondaryText'>Countries</span>
                    </div>

               
                
                </div>
                
            </div>

            <div className="flexCenter hero-right">
                <motion.div
                initial={{x:"7rem", opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{
                    duration:2,
                    type:"spring"
                }}
                className="image-container">
                    <img src='../../../public/closeup-turkish-cinnamon-egyptian-bazaar.jpg' alt=''/>
                </motion.div>

            </div>

        </div>
    </section>
  )
}

export default Hero
