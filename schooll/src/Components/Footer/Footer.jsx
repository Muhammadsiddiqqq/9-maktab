import React from 'react'
import s from './Footer.module.css'
const Footer = () => {
  return (
   <div>
    <footer>
       <div className={s.footer1}>
           <h1>Educationpower</h1>
           <div>
               <img src="" alt="" />
               <img src="" alt="" />
               <img src="" alt="" />
               <img src="" alt="" />
               <img src="" alt="" />   
           </div>
       </div> 
       <div className={s.div2}>
           <div className={s.div1}></div>
           <div></div>
       </div>
       <div className={s.footer2}> 
           <div>
               <h2>Our Products</h2> 
               <p>The Support Suite</p>
               <p>The Sales Suite</p>
               <p>Support</p>
               <p>Guide</p>
           </div>
           <div>
               <h2>Top Features</h2>
               <p>Ticketing System</p>
               <p>Knowledge Base</p>
               <p>Community Forums</p>
               <p>Help Desk Software</p>
           </div>
           <div>
               <h2>Resources</h2>
               <p>Product Support</p>
               <p>Request Demo</p>
               <p>Library</p>
               <p>Coffeshop Blog</p>
           </div>
           <div>
               <h2>Company</h2>
               <p>About Us</p>
               <p>Press</p>
               <p>Investors</p>
               <p>Events</p>
           </div>
           <div>
               <h2>Favourite Things</h2>
               <p>For Enterprise</p>
               <p>For Startups</p>
               <p>For Benchmark</p>
               <p>For Small Business</p>
           </div>
       </div>
       <div className={s.footer4}>
           <div></div>
           <p className={s.footer3}>© Peoplepower 2020 - All Rights Reserved</p>
           </div>
   </footer>
       <div className={s.footer5}>
           <div className={s.footer1}>
               <h1>Educationpower</h1>
               <div>
                   <img src="" alt="" />
                   <img src="" alt="" />
                   <img src="" alt="" />
                   <img src="" alt="" />
                   <img src="" alt="" />   
               </div>
           </div>  
           <div className={s.div2}>
               <div></div>
           <div className={s.div1}></div>
           </div>
           <div className={s.sell1}>
               <select className={s.sell}> 
                   <option className={s.opt}>Our Products</option>
                   <option>The Support Suite</option>
                   <option>The Sales Suite</option>
                   <option>Support</option>
                   <option>Guide</option>
               </select>
               <select className={s.sell}>
                   <option className={s.opt}>Top Features</option>
                   <option>Ticketing System</option>
                   <option>Knowledge Base</option>
                   <option>Community Forums</option>
                   <option>Help Desk Software</option> 
               </select>
               <select className={s.sell}>
                   <option className={s.opt}>Resources</option>
                   <option>Product Support</option>
                   <option>Request Demo</option>
                   <option>Library</option>
                   <option>Coffeshop Blog</option>
               </select>
           </div>
           <div className={s.sell2}>
               <select className={s.sell}>
                   <option className={s.opt}>Company</option>
                   <option>About Us</option>
                   <option>Press</option>
                   <option>Investors</option>
                   <option>Events</option>
               </select>
               <select className={s.sell}>
                   <option className={s.opt}>Favourite Things</option>
                   <option>For Enterprise</option>
                   <option>For Startups</option>
                   <option>For Benchmark</option>
                   <option>For Small Business</option>
               </select>
           </div>

       </div>
   </div>
  )
}

export default Footer