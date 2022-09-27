import React, { useState } from 'react'
import s from './Card.module.css'
import { NavLink } from 'react-router-dom'
import r from '../img/stol.jpg'
import z from '../img/zal.jpg'
import a from '../img/com.png' 
import k from '../img/car.png'
import p from '../img/ver.png'
import t from '../img/mak.jpg'
import o from '../img/sa.jpg'
import q from '../img/qar.png'
import h from '../img/homee.png'
import m from '../img/treee.jpg'
import { Image } from 'antd';
const Haqida = () => {

 const [visible, setVisible] = useState(false); 

  return ( 
    <div>
       <div className={s.menu}>
         <h1>9-maktab  <br />
Haqida malumotlar</h1>
         <div className={s.btn2}>
             <NavLink to={'/Card'} className={s.link}> <button>Maktab haqida</button></NavLink>
             <NavLink to={'/ramzlar'} className={s.link}><button>Davlat ramzlari</button></NavLink>
           </div>
       </div>
       <div className={s.menu2}>
           <div className={s.img}>
             <div></div>
             <div>
             <p>9-maktab</p>
             <h1> Maktab haqida malumotlar</h1>
             <h2>Siz bu yerda maktab haqida rasimlar va ular haqida  to`liq malumotlarni ko`rishingiz mumkun</h2>
             </div>
           </div>
       </div>
         <div className={s.menu3}> 
             <Image
               preview={{ visible: false }}
               width={"65%"} 
               src={t}
               onClick={() => setVisible(true)}
             />
             <div style={{ display: 'none' }}>
               <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                 <Image src={r} />
                 <Image src={z} />
                 <Image src={a} />
                 <Image src={k} />
                 <Image src={p} />
                 <Image src={t} />
                 <Image src={o} />
                 <Image src={q} />
                 <Image src={h} />
                 <Image src={m} />
             </Image.PreviewGroup>
             </div>
         </div>
         <div className={s.menu4}>
           <div className={s.bla}>
               <div className={s.te}>
                 <p>Learn your pace</p>
                 <h1>Flexible Studt at Your Own Pace</h1>
               </div>
               <div></div>
           </div>
           <div className={s.num3}>
                   <div className={s.div1}>
                     <div className={s.status}>
                       <h1>1,093</h1>
                       <p>Finished Sessions</p>
                     </div>
                     <div className={s.status}>
                       <h1>3,355</h1>
                       <p>Enrolled Learners</p>
                     </div>
                   </div>
                   <div className={s.div1}>
                     <div className={s.status}>
                       <h1>40</h1>
                       <p>Online Instructors</p>
                     </div>
                     <div className={s.status}>
                       <h1>90%</h1> 
                       <p>Satisfaction Rate</p>
                     </div>
                   </div>
             </div>
             <div className={s.bla2}>
               <div className={s.video}></div>
               <div></div>
             </div>
         </div>
        
    </div>
  ) 
}

export default Haqida