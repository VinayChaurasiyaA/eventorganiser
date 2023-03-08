import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import home from'./Images/home.jpg';
import meet from'./Images/meet.JPG';
import faculty from'./Images/faculty.jpg';

export default function Homepage() {
  return (
    <div>
      <Carousel>
        <Carousel.Item >
          
          <img
            className="" 
            src={home} width="1540"
            alt="first slide"
          />
          <Carousel.Caption>
            <h3 className='firstpage'>'Mumbai's Largest Cultural Fest'</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={meet} width="100"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h5 className='faculty'>'STUDENT COUNCIL TEAM'</h5>
            <p className='para'>
              It is linked to commitment, determination, teamwork and hard work
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={faculty} width="2000"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className='faculty'>'COLLEGE FACULTY'</h3>
            <p className='para' >
              Thankful to all the staff for their efforts and arranging this fest
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
