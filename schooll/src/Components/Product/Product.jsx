import React, { useState } from 'react'
import s from './Product.module.css'
import { Card } from 'antd';
import d from '../img/direk.jpg'
import { Button, Modal } from 'antd';

const Hodimlar = () => {
 const [visible, setVisible] = useState(false);
 const { Meta } = Card;
 

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
    <div className={s.rere}>
       <div className={s.block}> 
         <div></div>
         <h1>9-maktab hodimlari
haqida ma`lumot
</h1>
       </div>
       <div className={s.block2}>
         <div className={s.s3}>
             <div className={s.crd}>
               <h1>1,093</h1>
               <p>Finished Sessions</p>
             </div>
             <div className={s.crd}>
               <h1>3,355</h1>
               <p>Enrolled Learners</p> 
             </div>
         </div>
         <div className={s.s4}>
             <div className={s.crd}>
               <h1>40</h1>
               <p>Online Instructors</p>
             </div>
             <div className={s.crd}>
               <h1>90%</h1>
               <p>Satisfaction Rate</p>
             </div>
         </div>
       </div> 
       <div className={s.block3}>
         <div className={s.card}>
           <div></div>
           <div className={s.menu1}>
                       <Card className={s.p1}>
                         <div></div>
                             <div className={s.card2}>
                               <img src={d} alt="" />
                               <h1>
                                 <span>DIREKTOR</span><br />
                                 Qoraboyev 
                                 Akromjon
                               </h1>                      
                             </div>
                             <p>
                               22 oktyabr kuni xalq deputatlari Xonobod shahar kengashining navbatdan tashqari sessiyasida Mash’al 
                               Tojiboyev nomzodi shahar hokimi lavozimiga tasdiqlandi.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                               Deserunt aperiam fugiat hic explicabo totam dolorum nisi nesciunt minima error facilis architecto, quae optio, tempora
                               ullam reprehenderit perferendis, sint accusamus. Dolore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                               Deserunt aperiam fugiat hic explicabo totam dolorum nisi nesciunt minima error facilis architecto, quae optio,
                                 tempora ullam reprehenderit perferendis, sint accusamus. Dolore.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                 Deserunt aperiam fugiat hic explicabo totam dolorum nisi nesciunt minima error facilis architecto, quae optio, tempora 
                                 ullam reprehenderit perferendis, sint accusamus. Dolore.
                             </p>
                             <Button type="primary" onClick={showModal} className={s.re}>
                                       Batafsil
                                     </Button>
                                     <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
                                     22 oktyabr kuni xalq deputatlari Xonobod shahar kengashining navbatdan tashqari sessiyasida Mash’al 
                               Tojiboyev nomzodi shahar hokimi lavozimiga tasdiqlandi.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                               Deserunt aperiam fugiat hic explicabo totam dolorum nisi nesciunt minima error facilis architecto, quae optio, tempora
                               ullam reprehenderit perferendis, sint accusamus. Dolore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                               Deserunt aperiam fugiat hic explicabo totam dolorum nisi nesciunt minima error facilis architecto, quae optio,
                                 tempora ullam reprehenderit perferendis, sint accusamus. Dolore.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                 Deserunt aperiam fugiat hic explicabo totam dolorum nisi nesciunt minima error facilis architecto, quae optio, tempora 
                                  ullam reprehenderit perferendis, sint accusamus. Dolore.
                                     </Modal>
                       </Card>
                       <div className={s.card1}>
                           <Card
                             hoverable
                             style={{ width: 240,
                            height:380 }}
                             cover={<img src="" />}
                           >
                             <Meta title="Europe Street beat" description="www.instagram.com" />
                           </Card>

                           <Card
                             hoverable
                             style={{ width: 240,
                              height:380 }}
                             cover={<img  src="" />}
                           >
                             <Meta title="Europe Street beat" description="www.instagram.com" />
                           </Card>
                       </div>
               </div>
               <div className={s.menu}>
                       <Card
                         hoverable
                         style={{ width: 240,
                          height:380 }}
                         cover={<img src="" />}
                       >
                         <Meta title="Europe Street beat" description="www.instagram.com" />
                       </Card>

                       <Card className={s.p1}>
                             <div className={s.card2}>
                               <img src={d} alt="" />
                               <h1>
                                 <span>DIREKTOR</span><br />
                                 Polonchiyev
                                 Pistonchi
                               </h1>                      
                             </div>
                             <p>
                               22 oktyabr kuni xalq deputatlari Xonobod shahar kengashining navbatdan tashqari sessiyasida Mash’al 
                               Tojiboyev nomzodi shahar hokimi lavozimiga tasdiqlandi.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                               Deserunt aperiam fugiat hic explicabo totam dolorum nisi nesciunt minima error facilis architecto, quae optio, tempora
                               ullam reprehenderit perferendis, sint accusamus. Dolore.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                               Deserunt aperiam fugiat hic explicabo totam dolorum nisi nesciunt minima error facilis architecto, quae optio,
                                 tempora ullam reprehenderit perferendis, sint accusamus. Dolore.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                 Deserunt aperiam fugiat hic explicabo totam dolorum nisi nesciunt minima error facilis architecto, quae optio, tempora 
                                 ullam reprehenderit perferendis, sint accusamus. Dolore.
                             </p>
                             <button className={s.re}>Более</button>
                       </Card>

                       <Card
                         hoverable
                         style={{ width: 240,
                            height:380}}
                         cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                       >
                         <Meta title="Europe Street beat" description="www.instagram.com" />
                       </Card>
               </div>
               <div className={s.card3}>
                 <div className={s.s1}>
                         <Card
                           hoverable
                           style={{ width: 240,
                            height:380 }}
                           cover={<img  src="" />}
                         >
                           <Meta title="Europe Street beat" description="www.instagram.com" />
                         </Card>
                         <Card
                           hoverable
                           style={{ width: 240,
                            height:380}}
                           cover={<img  src="" />}
                         >
                           <Meta title="Europe Street beat" description="www.instagram.com" />
                         </Card>
                         <Card
                           hoverable
                           style={{ width: 240,
                            height:380}}
                           cover={<img  src="" />}
                         >
                           <Meta title="Europe Street beat" description="www.instagram.com" />
                         </Card>
                       </div>
                       <div className={s.s2}>
                               <Card
                                 hoverable
                                 style={{ width: 240,
                                  height:380}}
                                 cover={<img  src="" />}
                               >
                                 <Meta title="Europe Street beat" description="www.instagram.com" />
                               </Card>
                               <Card
                                 hoverable
                                 style={{ width: 240,
                                  height:380}}
                                 cover={<img  src="" />}
                               >
                                 <Meta title="Europe Street beat" description="www.instagram.com" />
                               </Card>
                       </div>
               </div>
         </div>
       </div>
    </div> 
  )
}

export default Hodimlar