import React, { useState }  from 'react'
import { Card } from 'antd';
import { Rate } from 'antd';
import { NavLink } from 'react-router-dom'
import s from './Home.module.css'
import d from '../img/direk.jpg'
import t from '../img/tick.svg'
import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';

const { Meta } = Card; 
 



const Home = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

 
  return (   
    <div className={s.big}>
        <div className={s.home}>
            <h1>9-maktab web sahifasiga xush kelibsiz</h1>
            <div className={s.button}>
             <NavLink to={'/Card'} className={s.link}> <button> Maktab haqida</button></NavLink>
              <NavLink to={'/ramzlar'} className={s.link}><button>Davlat ramzlari</button></NavLink>
            </div>
        </div>
        
        <div className={s.menu1}> 
                    <div className={s.body1}>
                      <div></div>
                      <NavLink to={''} className={s.link}><p className={s.t}>9-maktab</p></NavLink>
                        <h1 className={s.t1}> Hodimlar Ro`yhati</h1>
                        <h6 className={s.t2}>The sky was cloudless and of a deep dark blue the spectacle before us was indeed.</h6>
                    </div>
                    <div className={s.card2}>
                        <div className={s.card1}>
                              <div className={s.card}>
                              <Card className={s.name}>                              
                                    <img alt="example" src={d} />
                                      <h1>DIREKTOR</h1>
                                      <p>Lauch website as a web learning as javascript more.</p>
                                      <Button type="primary" onClick={showModal}>
                                      Batafsil
                                      </Button>
                                      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                        <p>Some contents...</p>
                                        <p>Some contents...</p>
                                        <p>Some contents...</p>
                                      </Modal> 
                                </Card>  
                              </div>
                              <div className={s.card}>
                              <Card className={s.name}>                              
                                    <img alt="example" src={d} />
                                      <h1>DIREKTOR</h1>
                                      <p>Lauch website as a web learning as javascript more.</p>
                                      <Button type="primary" onClick={showModal}>
                                      Batafsil
                                      </Button>
                                      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                        <p>Some contents...</p>
                                        <p>Some contents...</p>
                                        <p>Some contents...</p>
                                      </Modal>
                                </Card>  
                              </div>
                              <div className={s.card}>
                              <Card className={s.name}>                              
                                    <img alt="example" src={d} />
                                      <h1>DIREKTOR</h1>
                                      <p>Lauch website as a web learning as javascript more.</p>
                                      <Button type="primary" onClick={showModal}>
                                      Batafsil
                                      </Button>
                                      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                        <p>Some contents...</p>
                                        <p>Some contents...</p>
                                        <p>Some contents...</p>
                                      </Modal>
                                </Card>  
                              </div>
                        </div>
                        <div className={s.card1}>
                        <div className={s.card}>
                              <Card className={s.name}>                              
                                    <img alt="example" src={d} />
                                      <h1>DIREKTOR</h1>
                                      <p>Lauch website as a web learning as javascript more.</p>
                                      <button>Batafsil</button>
                                </Card>  
                              </div>
                              <div className={s.card}>
                              <Card className={s.name}>                              
                                    <img alt="example" src={d} />
                                      <h1>DIREKTOR</h1>
                                      <p>Lauch website as a web learning as javascript more.</p>
                                      <button>Batafsil</button>
                                </Card>  
                              </div>
                              <div className={s.card}>
                              <Card className={s.name}>                              
                                    <img alt="example" src={d} />
                                      <h1>DIREKTOR</h1>
                                      <p>Lauch website as a web learning as javascript more.</p>
                                      <button>Batafsil</button>
                                </Card>  
                              </div>
                        </div>
                    </div>
                       <button className={s.button1}>Explore More </button>                                                                       
          </div>




          <div className={s.menu2}>
              <div className={s.blok1}> 
                  <div className={s.img}>
                   
                    
                  </div>
                  <div className={s.rate}>
                        <div className={s.rate2}> 
                            <Rate allowHalf defaultValue={2.5}  className={s.star}/>
                            <p className={s.p}>Education is a really great site with really great people and the quality of content is excellent and it is inspirational.</p>
                            <div  className={s.rate1}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrs-3w47KbuNFQtM75g8ma9rcsB1VNrj-hPKf4jbJQcH0sA8AyfD4W0btbeWzVVX1GEOk&usqp=CAU" alt="" />
                                <div>
                                  <h1>Angela Karamoy</h1>
                                  <p>CEO at kartana</p>
                                </div>
                            </div>
                        </div>
                  </div>
              </div>
              <div className={s.block2}>
                  <div className={s.blok2}>
                      <p>Our Top Category</p>
                      <h1>Benefit From Our Online Learning expertise</h1>
                      <h5>By connecting patients all over the world to the best instructors, resort like home helping individuals</h5>
                      <div className={s.tic}>
                          <img src={t} alt="" />
                          <div>
                            <h2>Online Degress</h2>
                            <h6>Sometimes features require a short description. 
                                This can be detailed description
                            </h6>
                          </div>
                      </div>
                      <div className={s.tic}>
                          <img src={t} alt="" />
                          <div>
                            <h2>Online Degress</h2>
                            <h6>Sometimes features require a short description. 
                                This can be detailed description
                            </h6>
                          </div>
                      </div>
                      <div className={s.tic}>
                          <img src={t} alt="" />
                          <div>
                            <h2>Online Degress</h2>
                            <h6>Sometimes features require a short description. 
                                This can be detailed description
                            </h6>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className={s.menu3}>
              <div className={s.text}>
                <div></div>
                <p>Learn your pace</p>
                <h1>Flexible Studt at Your Own Pace</h1>
              </div>
              <div className={s.num}>
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
              <div className={s.vvv}>
                <div className={s.video}> 
                <div></div>
              </div>
              </div>
          </div>
          <div className="menu4">


          </div>

    
    </div>
  )
}

export default Home