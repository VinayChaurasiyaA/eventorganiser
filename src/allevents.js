import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mindevent from './Images/mindevent.jpg';
import informalevent from './Images/informalevent.jpg';
import sportevent from'./Images/sportevent.jpg';
import finearts from'./Images/finearts.jpg';
import technicalevent from'./Images/technicalevent.jpg';
import performingevent from'./Images/performingevent.jpg';
function GroupExample() {
  return (
    <div className="allevents">
     <div className="firstcard"> 
    <Card style={{ width: '26rem' }}>
    <Card.Img variant="top" src={mindevent} height="300px" />
    <Card.Body className="cardbody">
      <Card.Title className="cardtitle">MIND EVENTS</Card.Title>
      <Card.Text className="cardtext">
        Strong minds suffer without complaining, weak minds complain without suffering.
      </Card.Text>
      <Button variant="primary" id="1">ENROLL</Button>
    </Card.Body>
  </Card>
  </div>
  <div className="secondcard"> 
    <Card style={{ width: '26rem' }}>
    <Card.Img variant="bottom" src={informalevent} />
    <Card.Body className="cardbody">
      <Card.Title className="cardtitle">INFORMAL EVENTS</Card.Title>
      <Card.Text className="cardtext">
        In an informal environment, people tend to talk and share ideas more open-mindedly.
      </Card.Text>
      <Button variant="primary" id="2">ENROLL</Button>
    </Card.Body>
  </Card>
  </div>
  <div className="thirdcard"> 
    <Card style={{ width: '26rem' }}>
    <Card.Img variant="top" src={sportevent} height="300px"/>
    <Card.Body className="cardbody">
      <Card.Title className="cardtitle">SPORTS EVENTS</Card.Title>
      <Card.Text className="cardtext">
        Sports play a major part in improving our physical and mental fitness.
      </Card.Text>
      <Button variant="primary"id="3">ENROLL</Button>
    </Card.Body>
  </Card>
  </div>
  <div className="fourthcard"> 
    <Card style={{ width: '26rem' }}>
    <Card.Img variant="top" src={finearts} height="345px" />
    <Card.Body className="cardbody">
      <Card.Title className="cardtitle">FINE ARTS</Card.Title>
      <Card.Text className="cardtext">
      The term "fine art" refers to an art form practised mainly for its beauty.
      </Card.Text>
      <Button variant="primary" id="4">ENROLL</Button>
    </Card.Body>
  </Card>
  </div>
  <div className="fifthcard"> 
    <Card style={{ width: '26rem' }}>
    <Card.Img variant="top" src={technicalevent} height="300px"/>
    <Card.Body className="cardbody">
      <Card.Title className="cardtitle">TECHNICAL EVENTS</Card.Title>
      <Card.Text className="cardtext">
      It provides a platform for young brains to showcase their innovative ideas.
        
      </Card.Text>
      <Button variant="primary" id="5">ENROLL</Button>
    </Card.Body>
  </Card>
  </div>
  <div className="sixthcard"> 
    <Card style={{ width: '26rem' }}>
    <Card.Img variant="top" src={performingevent} height="350px" />
    <Card.Body className="cardbody">
      <Card.Title className="cardtitle">PERFORMING EVENTS</Card.Title>
      <Card.Text className="cardtext">
      Once you get the taste for performing, you’ll never look back. 
      </Card.Text>
      <Button  variant="primary" id="6">ENROLL</Button>
    </Card.Body>
  </Card>
  </div>
  
    </div>
  );
}

export default GroupExample;
