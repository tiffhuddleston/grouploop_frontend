import React, { useState, useEffect } from 'react';
import { Image, Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MemberList({ circles, match }) {
  const [memberData, setData] = useState(null);
  const [showModal, setModal] = useState(false);

  useEffect(() => {
    fetch(`https://grouploop-be.herokuapp.com/members/`)
      .then(response => response.json())
      .then(response => {
        setData(response);
      })
      .catch(console.error);
  }, []);

  if (!memberData) {
    return null;
  }

  console.log(memberData);
  console.log(memberData.name);

  return (
    <div class="row" className="gallery">
      {memberData.map(member => (
        <Card
          style={{ width: '20rem', marginBottom: '1rem ' }}
          key={member._id}
        >
          <Col className="member">
            <Card.Img variant="top" src={member.imageUrl} alt="member" />
            <div className="memberDetails">
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title>{member.name}</Card.Title>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card.Text>
                      <p>{member.github}</p>
                      <p>{member.linkedin}</p>
                      <p>{member.facebook}</p>
                      <p>{member.instagram}</p>
                      <p>{member.twitter}</p>
                    </Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="outline-info">
                      <Link to={`/edit-member/${member.id}`}> Edit</Link>
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </div>
          </Col>
        </Card>
      ))}
    </div>
  );
}

{
  /* <div className="gallery">
      {memberData.map(members => (
        <div key={members.id} className="members-info">
          <h3>{members.name}</h3>

          <p>{members.github}</p>
          <p>{members.linkedin}</p>
          <p>{members.facebook}</p>
          <p>{members.instagram}</p>
          <p>{members.twitter}</p>
        </div>
      ))}
    </div> */
}
