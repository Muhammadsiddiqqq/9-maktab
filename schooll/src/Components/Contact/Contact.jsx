import React from 'react'
import s from './Contact.module.css'
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
const Fanlar = () => {
  
  return ( 
    <div> 
      <div className={s.menu1}>
        <h1>9-maktab  Kutubhonasiga <br />
  xush kelibsiz</h1>
        <div className={s.btn}>
          <NavLink to={'/Card'}><button>Maktab haqida</button></NavLink>
          <NavLink to={'/ramzlar'}><button>Davlat ramzlari</button></NavLink>
        </div>
      </div>
      <div className={s.menu2}>
        <div className={s.h1}> 
          <h1>JAMI KITOBLAR</h1> 
          <div className={s.div}></div>
          </div>
          <div className={s.menu}>
            <div></div>
              <div className={s.num2}>
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
          </div>
      </div>
      <div className={s.menu3}>
        <div className={s.h2}>
          <h1> KITOBLAR  RO`YHATI</h1>
          <div></div>
        </div>
              <div className={s.card}>
                  <div className={s.card1}>
                      <h2>ANIQ FANLAR</h2>
                      <div className={s.card2}>
                      <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                      </Card>
                      </div>
                      <div className={s.card2}>
                      <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                      </Card>
                      </div> 
                      <div className={s.card2}>
                      <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                      </Card>
                      </div> 
                  </div>
                  <div className={s.card1}>
                      <h2>TABIY FANLAR</h2>
                      <div className={s.card2}>
                      <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                      </Card>
                      </div>
                      <div className={s.card2}>
                      <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                      </Card>
                      </div> 
                      <div className={s.card2}>
                      <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                      </Card>
                      </div> 
                  </div>
              </div>
      </div>
    </div>
  ) 
}

export default Fanlar