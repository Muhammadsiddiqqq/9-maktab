import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import s from './Ramzlar.module.css'
import { Card } from 'antd';
import g from '../img/gerb.png'
import Table from 'react-bootstrap/Table';
const Ramzlar = () => {

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
 const { Meta } = Card;
  return (
    <div>
           <div className={s.menu1}>
               <h1>9-maktab Davlat Ramzlar bo`limi</h1>
           </div>
           <div className={s.menu2}>
             <div></div>
             <div>
               <p>O`zbekiston Respublikasi</p>
               <h1>O`zbekiston Respublikasi Ramzlari  va Shahar va Viloyatlar</h1>
             </div>  
           </div>

           <div className={s.menu3}> 
               <div className={s.card1}>
                     <Card className={s.card5}>
                       <div className={s.h1}>
                         <img src={g} alt="" />
                         <div>
                           <h1>GERB</h1>
                           <h1>gerb ****-yilda qabul qilingan</h1>
                         </div>
                       </div>
                       <p>
                       Oʻzbekiston gerbi (oʻzb. Oʻzbekiston Respublikasi Davlat Gerbi / Oʻzbekiston Respublikasi Davlat Gerbi) — Oʻzbekiston Respublikasining davlat gerbi. 1992-yil 2-iyulda O‘zbekiston Respublikasi Oliy Radasi va O‘zbekiston Respublikasi Oliy Radasi “O‘zbekiston Respublikasining Davlat gerbi to‘g‘risida”gi qonunni qabul qildi.

Davlatning yangi gerbining bir nechta variantlari mavjud, ammo yakuniy gerb Oʻzbekiston xudolar akademiyasi xudolar va grafikalar guruhi tomonidan yaratilgan asl gerbdir. Guruhga mashhur xudo Anvar Mamadjonov rahbarlik qiladi. Oʻzbekistonning yangi gerbi asosida Oʻzbekiston SSR gerbi keyingi versiya hisoblanadi. O‘zbekiston SSSRning uchta sobiq respublikalaridan biri bo‘lib, ularning yangi gerblari sovet epoksisining oldingi gerblariga juda o‘xshash. Qolgan davlatlar Tojikiston (Tojikiston gerbi) va Belarusiya (Belarus gerbi). Qolgan sobiq Sovet respublikalari o'zlarining oldingi sovet epoksi timsollaridan butunlay farq qiladigan timsollarni qabul qildilar.

O‘zbekiston Respublikasining Davlat gerbi asosida 1993-yil 9-aprelda O‘zbekiston Respublikasi tarkibiga kiruvchi Qoraqalpog‘iston Respublikasining Davlat gerbi qabul qilindi.
                         </p>
                         
                         <button className={s.btn5} type="primary" onClick={showModal}>YANA</button>
                           <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                           Oʻzbekiston gerbi (oʻzb. Oʻzbekiston Respublikasi Davlat Gerbi / Oʻzbekiston Respublikasi Davlat Gerbi) — Oʻzbekiston Respublikasining davlat gerbi. 1992-yil 2-iyulda O‘zbekiston Respublikasi Oliy Radasi va O‘zbekiston Respublikasi Oliy Radasi “O‘zbekiston Respublikasining Davlat gerbi to‘g‘risida”gi qonunni qabul qildi.

Davlatning yangi gerbining bir nechta variantlari mavjud, ammo yakuniy gerb Oʻzbekiston xudolar akademiyasi xudolar va grafikalar guruhi tomonidan yaratilgan asl gerbdir. Guruhga mashhur xudo Anvar Mamadjonov rahbarlik qiladi. Oʻzbekistonning yangi gerbi asosida Oʻzbekiston SSR gerbi keyingi versiya hisoblanadi. O‘zbekiston SSSRning uchta sobiq respublikalaridan biri bo‘lib, ularning yangi gerblari sovet epoksisining oldingi gerblariga juda o‘xshash. Qolgan davlatlar Tojikiston (Tojikiston gerbi) va Belarusiya (Belarus gerbi). Qolgan sobiq Sovet respublikalari o'zlarining oldingi sovet epoksi timsollaridan butunlay farq qiladigan timsollarni qabul qildilar.

O‘zbekiston Respublikasining Davlat gerbi asosida 1993-yil 9-aprelda O‘zbekiston Respublikasi tarkibiga kiruvchi Qoraqalpog‘iston Respublikasining Davlat gerbi qabul qilindi.
                           </Modal>
                         
                     </Card>
               </div>
               <div className={s.card1}>
                     <Card className={s.card5}>
                       <div className={s.h1}>
                         <img src={g} alt="" />
                         <div>
                           <h1>GERB</h1>
                           <h1>gerb ****-yilda qabul qilingan</h1>
                         </div>
                       </div>
                       <p>
                       Oʻzbekiston gerbi (oʻzb. Oʻzbekiston Respublikasi Davlat Gerbi / Oʻzbekiston Respublikasi Davlat Gerbi) — Oʻzbekiston Respublikasining davlat gerbi. 1992-yil 2-iyulda O‘zbekiston Respublikasi Oliy Radasi va O‘zbekiston Respublikasi Oliy Radasi “O‘zbekiston Respublikasining Davlat gerbi to‘g‘risida”gi qonunni qabul qildi.

Davlatning yangi gerbining bir nechta variantlari mavjud, ammo yakuniy gerb Oʻzbekiston xudolar akademiyasi xudolar va grafikalar guruhi tomonidan yaratilgan asl gerbdir. Guruhga mashhur xudo Anvar Mamadjonov rahbarlik qiladi. Oʻzbekistonning yangi gerbi asosida Oʻzbekiston SSR gerbi keyingi versiya hisoblanadi. O‘zbekiston SSSRning uchta sobiq respublikalaridan biri bo‘lib, ularning yangi gerblari sovet epoksisining oldingi gerblariga juda o‘xshash. Qolgan davlatlar Tojikiston (Tojikiston gerbi) va Belarusiya (Belarus gerbi). Qolgan sobiq Sovet respublikalari o'zlarining oldingi sovet epoksi timsollaridan butunlay farq qiladigan timsollarni qabul qildilar.

O‘zbekiston Respublikasining Davlat gerbi asosida 1993-yil 9-aprelda O‘zbekiston Respublikasi tarkibiga kiruvchi Qoraqalpog‘iston Respublikasining Davlat gerbi qabul qilindi.
                         </p>
                        
                         <button className={s.btn5} type="primary" onClick={showModal}>YANA</button>
                           <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                           Oʻzbekiston gerbi (oʻzb. Oʻzbekiston Respublikasi Davlat Gerbi / Oʻzbekiston Respublikasi Davlat Gerbi) — Oʻzbekiston Respublikasining davlat gerbi. 1992-yil 2-iyulda O‘zbekiston Respublikasi Oliy Radasi va O‘zbekiston Respublikasi Oliy Radasi “O‘zbekiston Respublikasining Davlat gerbi to‘g‘risida”gi qonunni qabul qildi.

Davlatning yangi gerbining bir nechta variantlari mavjud, ammo yakuniy gerb Oʻzbekiston xudolar akademiyasi xudolar va grafikalar guruhi tomonidan yaratilgan asl gerbdir. Guruhga mashhur xudo Anvar Mamadjonov rahbarlik qiladi. Oʻzbekistonning yangi gerbi asosida Oʻzbekiston SSR gerbi keyingi versiya hisoblanadi. O‘zbekiston SSSRning uchta sobiq respublikalaridan biri bo‘lib, ularning yangi gerblari sovet epoksisining oldingi gerblariga juda o‘xshash. Qolgan davlatlar Tojikiston (Tojikiston gerbi) va Belarusiya (Belarus gerbi). Qolgan sobiq Sovet respublikalari o'zlarining oldingi sovet epoksi timsollaridan butunlay farq qiladigan timsollarni qabul qildilar.

O‘zbekiston Respublikasining Davlat gerbi asosida 1993-yil 9-aprelda O‘zbekiston Respublikasi tarkibiga kiruvchi Qoraqalpog‘iston Respublikasining Davlat gerbi qabul qilindi.
                           </Modal>
                         
                     </Card>
               </div>
               <div className={s.card1}>
                     <Card className={s.card5}>
                       <div className={s.h1}>
                         <img src={g} alt="" />
                         <div>
                           <h1>GERB</h1>
                           <h1>gerb ****-yilda qabul qilingan</h1>
                         </div>
                       </div>
                       <p>
                       Oʻzbekiston gerbi (oʻzb. Oʻzbekiston Respublikasi Davlat Gerbi / Oʻzbekiston Respublikasi Davlat Gerbi) — Oʻzbekiston Respublikasining davlat gerbi. 1992-yil 2-iyulda O‘zbekiston Respublikasi Oliy Radasi va O‘zbekiston Respublikasi Oliy Radasi “O‘zbekiston Respublikasining Davlat gerbi to‘g‘risida”gi qonunni qabul qildi.

Davlatning yangi gerbining bir nechta variantlari mavjud, ammo yakuniy gerb Oʻzbekiston xudolar akademiyasi xudolar va grafikalar guruhi tomonidan yaratilgan asl gerbdir. Guruhga mashhur xudo Anvar Mamadjonov rahbarlik qiladi. Oʻzbekistonning yangi gerbi asosida Oʻzbekiston SSR gerbi keyingi versiya hisoblanadi. O‘zbekiston SSSRning uchta sobiq respublikalaridan biri bo‘lib, ularning yangi gerblari sovet epoksisining oldingi gerblariga juda o‘xshash. Qolgan davlatlar Tojikiston (Tojikiston gerbi) va Belarusiya (Belarus gerbi). Qolgan sobiq Sovet respublikalari o'zlarining oldingi sovet epoksi timsollaridan butunlay farq qiladigan timsollarni qabul qildilar.

O‘zbekiston Respublikasining Davlat gerbi asosida 1993-yil 9-aprelda O‘zbekiston Respublikasi tarkibiga kiruvchi Qoraqalpog‘iston Respublikasining Davlat gerbi qabul qilindi.
                         </p>
                      
                         <button className={s.btn5} type="primary" onClick={showModal}>YANA</button>
                           <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                           Oʻzbekiston gerbi (oʻzb. Oʻzbekiston Respublikasi Davlat Gerbi / Oʻzbekiston Respublikasi Davlat Gerbi) — Oʻzbekiston Respublikasining davlat gerbi. 1992-yil 2-iyulda O‘zbekiston Respublikasi Oliy Radasi va O‘zbekiston Respublikasi Oliy Radasi “O‘zbekiston Respublikasining Davlat gerbi to‘g‘risida”gi qonunni qabul qildi.

Davlatning yangi gerbining bir nechta variantlari mavjud, ammo yakuniy gerb Oʻzbekiston xudolar akademiyasi xudolar va grafikalar guruhi tomonidan yaratilgan asl gerbdir. Guruhga mashhur xudo Anvar Mamadjonov rahbarlik qiladi. Oʻzbekistonning yangi gerbi asosida Oʻzbekiston SSR gerbi keyingi versiya hisoblanadi. O‘zbekiston SSSRning uchta sobiq respublikalaridan biri bo‘lib, ularning yangi gerblari sovet epoksisining oldingi gerblariga juda o‘xshash. Qolgan davlatlar Tojikiston (Tojikiston gerbi) va Belarusiya (Belarus gerbi). Qolgan sobiq Sovet respublikalari o'zlarining oldingi sovet epoksi timsollaridan butunlay farq qiladigan timsollarni qabul qildilar.

O‘zbekiston Respublikasining Davlat gerbi asosida 1993-yil 9-aprelda O‘zbekiston Respublikasi tarkibiga kiruvchi Qoraqalpog‘iston Respublikasining Davlat gerbi qabul qilindi.
                           </Modal>
                         
                     </Card>
               </div>
               <div className={s.card1}>
                 <div></div>
                     <Card className={s.card5}>
                       <div className={s.h1}>
                         <img src={g} alt="" />
                         <div>
                           <h1>GERB</h1>
                           <h1>gerb ****-yilda qabul qilingan</h1>
                         </div>
                       </div>
                       <p>
                       Oʻzbekiston gerbi (oʻzb. Oʻzbekiston Respublikasi Davlat Gerbi / Oʻzbekiston Respublikasi Davlat Gerbi) — Oʻzbekiston Respublikasining davlat gerbi. 1992-yil 2-iyulda O‘zbekiston Respublikasi Oliy Radasi va O‘zbekiston Respublikasi Oliy Radasi “O‘zbekiston Respublikasining Davlat gerbi to‘g‘risida”gi qonunni qabul qildi.

Davlatning yangi gerbining bir nechta variantlari mavjud, ammo yakuniy gerb Oʻzbekiston xudolar akademiyasi xudolar va grafikalar guruhi tomonidan yaratilgan asl gerbdir. Guruhga mashhur xudo Anvar Mamadjonov rahbarlik qiladi. Oʻzbekistonning yangi gerbi asosida Oʻzbekiston SSR gerbi keyingi versiya hisoblanadi. O‘zbekiston SSSRning uchta sobiq respublikalaridan biri bo‘lib, ularning yangi gerblari sovet epoksisining oldingi gerblariga juda o‘xshash. Qolgan davlatlar Tojikiston (Tojikiston gerbi) va Belarusiya (Belarus gerbi). Qolgan sobiq Sovet respublikalari o'zlarining oldingi sovet epoksi timsollaridan butunlay farq qiladigan timsollarni qabul qildilar.

O‘zbekiston Respublikasining Davlat gerbi asosida 1993-yil 9-aprelda O‘zbekiston Respublikasi tarkibiga kiruvchi Qoraqalpog‘iston Respublikasining Davlat gerbi qabul qilindi.
                         </p>
                       
                         <button className={s.btn5} type="primary" onClick={showModal}>YANA</button>
                           <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                           Oʻzbekiston gerbi (oʻzb. Oʻzbekiston Respublikasi Davlat Gerbi / Oʻzbekiston Respublikasi Davlat Gerbi) — Oʻzbekiston Respublikasining davlat gerbi. 1992-yil 2-iyulda O‘zbekiston Respublikasi Oliy Radasi va O‘zbekiston Respublikasi Oliy Radasi “O‘zbekiston Respublikasining Davlat gerbi to‘g‘risida”gi qonunni qabul qildi.

Davlatning yangi gerbining bir nechta variantlari mavjud, ammo yakuniy gerb Oʻzbekiston xudolar akademiyasi xudolar va grafikalar guruhi tomonidan yaratilgan asl gerbdir. Guruhga mashhur xudo Anvar Mamadjonov rahbarlik qiladi. Oʻzbekistonning yangi gerbi asosida Oʻzbekiston SSR gerbi keyingi versiya hisoblanadi. O‘zbekiston SSSRning uchta sobiq respublikalaridan biri bo‘lib, ularning yangi gerblari sovet epoksisining oldingi gerblariga juda o‘xshash. Qolgan davlatlar Tojikiston (Tojikiston gerbi) va Belarusiya (Belarus gerbi). Qolgan sobiq Sovet respublikalari o'zlarining oldingi sovet epoksi timsollaridan butunlay farq qiladigan timsollarni qabul qildilar.

O‘zbekiston Respublikasining Davlat gerbi asosida 1993-yil 9-aprelda O‘zbekiston Respublikasi tarkibiga kiruvchi Qoraqalpog‘iston Respublikasining Davlat gerbi qabul qilindi.
                           </Modal>
                       
                     </Card>
               </div>
           </div>
           <div className={s.menu4}> 
           <div></div>
           <Table striped bordered hover>
               <thead>
                 <tr>
                   <th>№</th>
                   <th>Viloyatlar</th>
                   <th>Shahar</th> 
                   <th>Tuman</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>1</td>
                   <td>Andijon</td>
                   <td>Andijon</td>
                   <td>15ta</td>
                 </tr>
                 <tr>
                   <td>2</td>
                   <td>Buxoro</td>
                   <td>Buxoro</td>
                   <td>11ta</td>
                 </tr>
                 <tr>
                   <td>3</td>
                   <td>Fergana</td>
                   <td>Fergana</td>
                   <td>16ta</td>
                 </tr>
                 <tr>
                   <td>4</td>
                   <td>Jizzakh</td>
                   <td>Jizzakh</td>
                   <td>12ta</td>
                 </tr>
                 <tr>
                   <td>5</td>
                   <td>Xorazm</td>
                   <td>Xorazm</td>
                   <td>10ta</td>
                 </tr>
                 <tr>
                   <td>6</td>
                   <td>Namangan	</td>
                   <td>Namangan	</td>
                   <td>11ta</td>
                 </tr> 
                 <tr>
                   <td>7</td>
                   <td>Navoiy</td>
                   <td>Navoiy</td>
                   <td>9ta</td>
                 </tr> 
                 <tr>
                   <td>8</td>
                   <td>Qashqadaryo</td>
                   <td>Qarshi</td>
                   <td>14ta</td>
                 </tr> 
                 <tr>
                   <td>9</td>
                   <td>Samarkand</td>
                   <td>Samarkand</td>
                   <td>14ta</td>
                 </tr> 
                 <tr>
                   <td>10</td>
                   <td>Sirdaryo	</td>
                   <td>Sirdaryo	</td>
                   <td>9ta</td>
                 </tr> 
                 <tr>
                   <td>11</td>
                   <td>Surxondaryo</td>
                   <td>Surxondaryo</td>
                   <td>13ta</td>
                 </tr> 
                 <tr>
                   <td>12 </td>
                   <td>Toshkent</td>
                   <td>Toshkent</td>
                   <td>11ta</td>
                 </tr>
               </tbody>
             </Table>
                       
           </div>
    </div> 
  )
}

export default Ramzlar 