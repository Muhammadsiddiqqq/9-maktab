import React, { useState } from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { Button, Drawer } from 'antd';
import head from '../img/graduation 1.png'
import home from '../img/home 1.png'
import hodim from '../img/people.svg'
import about from '../img/about.svg'
import book from '../img/book.png'
import line from '../img/line.svg' 
import b from '../img/burgerd.webp'
const Header = () => {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => { 
      setVisible(false);
    };

 
  return (
    <div className={s.box}>

        <nav className={s.nav}>
            <div className={s.menu1}>


                    <NavLink to={''} className={s.link}>
                        <div className={s.menu}>
                            <img src={head} alt="" />
                            <h1>9-maktab</h1>
                        </div>
                    </NavLink>
  

                    <div className={s.link1}> 
                        <img src={home} alt=""  className={s.img1}/>
                        <img src={line} alt=""  className={s.img1}/>
                        <p><NavLink to={'./Home'} className={s.link}>BOSH SAHIFA</NavLink></p>
                    </div>
                    <div className={s.link1}>
                        <img src={hodim} alt=""  className={s.img1}/>
                        <img src={line} alt=""  className={s.img1}/>
                        <p><NavLink to={'/Product'} className={s.link}>HODIMLAR</NavLink></p>
                    </div>
                    <div className={s.link1}>
                        <img src={about} alt=""  className={s.img1}/>
                        <img src={line} alt=""  className={s.img1}/>   
                        <p><NavLink to={'/Card'} className={s.link}> MAKTAB HAQIDA</NavLink></p>
                    </div>
                    <div className={s.link1}>
                        <img src={book} alt=""  className={s.img1}/>
                        <img src={line} alt=""  className={s.img1}/>
                        <p><NavLink to={'/contact'} className={s.link}>FANLAR</NavLink></p>
                    </div>


                    
                 
                       <NavLink to={'/Aloqa'} className={s.link}><button className={s.link2   }>A L O Q A</button></NavLink>
              
                </div>
            
        </nav>


        
        <nav className={s.nav2}>
            <NavLink to={''} className={s.link}>
                <div className={s.menu}>
                    <img src={head} alt="" />
                    <h1>9-maktab</h1>
                </div>
            </NavLink>
            <NavLink to={'/contact'} className={s.link}><button className={s.btn}>A L O Q A</button></NavLink>

            <img src={b} alt=""  type="primary" onClick={showDrawer} className={s.img2}/>
            <Drawer title="9-maktab" placement="right" onClose={onClose} visible={visible} className={s.burg}>
                <div className={s.div2}>
                    <div></div>
                    <div className={s.div1}> 
                            <div className={s.link1}>  
                                <img src={home} alt="" />
                                <img src={line} alt="" />
                                <p><NavLink to={''} className={s.link}>BOSH SAHIFA</NavLink></p>
                            </div>
                            <div className={s.link1}>
                                <img src={hodim} alt="" /> 
                                <img src={line} alt="" />
                                <p><NavLink to={'/Product'} className={s.link}>HODIMLAR</NavLink></p>
                            </div>
                            <div className={s.link1}>
                                <img src={about} alt="" />
                                <img src={line} alt="" />   
                                <p><NavLink to={'/Card'} className={s.link}> MAKTAB HAQIDA</NavLink></p>
                            </div>
                            <div className={s.link1}>
                                <img src={book} alt="" />
                                <img src={line} alt="" />
                                <p><NavLink to={'/contact'} className={s.link}>FANLAR</NavLink></p>
                            </div>
                            <div className={s.btn2}>
                                <NavLink to={'/Aloqa'} className={s.link}><button className={s.btn}>A L O Q A</button></NavLink>
                            </div>
                    </div>

                </div>
            </Drawer> 

        </nav>
        

    </div>
  )
}

export default Header