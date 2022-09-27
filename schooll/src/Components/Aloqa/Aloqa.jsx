import React from 'react'
import s from './Aloqa.module.css'
import { NavLink } from 'react-router-dom'
import { Card } from 'antd';
import d from '../img/direk.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
const Contact = () => {
const { Meta } = Card;

 return (
   <div>
      <div className={s.menu1}>
          <h1>9-maktab <br />

Aloqa Hizmati</h1>
          <div className={s.btn2}>
            <NavLink to={'/Card'}><button>Maktab haqida</button></NavLink>
            <NavLink to={'/ramzlar'}><button>Davlat ramzlari</button></NavLink>
          </div>
      </div> 
      <div className={s.menu2}> 
        <div></div>
          <div className={s.card1}>
                <Card className={s.card2}>
                    <div className={s.div3}>
                        <div className={s.block1}>
                          <img src={d} alt="" />
                          <h1 className={s.h1}>DIREKTOR</h1>
                          <h2 className={s.h2}>Qoraboyev Akromjon</h2>
                          <h3 className={s.h3}>
                            Tel:  +998 ** *** ** **
                            Tel:  +998 ** *** ** **
                          </h3>
                        </div>
                        <div className={s.block2}>
                          <h1 className={s.h1}>ALOQA   UCHUN</h1> 
                          <div className={s.inp}>
                            <input type="text" placeholder='NAME...' className={s.input}/> 
                            <input type="text" placeholder='E-mail...'   className={s.input}/>
                          </div>
                          <textarea placeholder='Messege...' className={s.text}></textarea> 
                          <button className={s.btn}>Jonatish</button>
                        </div>
                      </div>
                </Card>
          </div>
          {/* <div className={s.card1}>
                <Card className={s.card2}>
                    <div className={s.div3}>
                        <div className={s.block1}>
                          <img src={d} alt="" />
                          <h1 className={s.h1}>DIREKTOR</h1>
                          <h2 className={s.h2}>Qoraboyev Akromjon</h2>
                          <h3 className={s.h3}>
                            Tel:  +998 ** *** ** **
                            Tel:  +998 ** *** ** **
                          </h3>
                        </div>
                        <div className={s.block2}>
                          <h1 className={s.h1}>ALOQA   UCHUN</h1> 
                          <div className={s.inp}>
                            <input type="text" placeholder='NAME...' className={s.input}/> 
                            <input type="text" placeholder='E-mail...'   className={s.input}/>
                          </div>
                          <textarea placeholder='Messege...' className={s.text}></textarea> 
                          <button className={s.btn}>Jonatish</button>
                        </div>
                      </div>
                </Card>
          </div> */}
          {/* <div className={s.card1}>
                <Card className={s.card2}>
                    <div className={s.div3}>
                        <div className={s.block1}>
                          <img src={d} alt="" />
                          <h1 className={s.h1}>DIREKTOR</h1>
                          <h2 className={s.h2}>Qoraboyev Akromjon</h2>
                          <h3 className={s.h3}>
                            Tel:  +998 ** *** ** **
                            Tel:  +998 ** *** ** **
                          </h3>
                        </div>
                        <div className={s.block2}>
                          <h1 className={s.h1}>ALOQA   UCHUN</h1> 
                          <div className={s.inp}>
                            <input type="text" placeholder='NAME...' className={s.input}/> 
                            <input type="text" placeholder='E-mail...'   className={s.input}/>
                          </div>
                          <textarea placeholder='Messege...' className={s.text}></textarea> 
                          <button className={s.btn}>Jonatish</button>
                        </div>
                      </div>
                </Card>
          </div> */}
          {/* <div className={s.card1}>
                <Card className={s.card2}>
                    <div className={s.div3}>
                        <div className={s.block1}>
                          <img src={d} alt="" />
                          <h1 className={s.h1}>DIREKTOR</h1>
                          <h2 className={s.h2}>Qoraboyev Akromjon</h2>
                          <h3 className={s.h3}>
                            Tel:  +998 ** *** ** **
                            Tel:  +998 ** *** ** **
                          </h3>
                        </div>
                        <div className={s.block2}>
                          <h1 className={s.h1}>ALOQA   UCHUN</h1> 
                          <div className={s.inp}>
                            <input type="text" placeholder='NAME...' className={s.input}/> 
                            <input type="text" placeholder='E-mail...'   className={s.input}/>
                          </div>
                          <textarea placeholder='Message...' className={s.text}></textarea> 
                          <button className={s.btn}>Jonatish</button>
                        </div>
                      </div>
                </Card>
          </div> */}
      </div>
      
   </div> 
 ) 
}

export default Contact