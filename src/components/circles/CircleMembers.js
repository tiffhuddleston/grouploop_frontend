import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CircleMembers({ match }) {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch(`https://grouploop-be.herokuapp.com/circles/`)
      .then(response => response.json())
      .then(response => {
        response[0].member.forEach(member => {
          fetch(member)
            .then(response => response.json())
            .then(response => {
              setMembers(members => [...members, response]);
            });
        });
      })

      .catch(console.error);
  }, []);

  if (!members) {
    return null;
  }

  return (
    <div className="gallery">
      {members.map(member => (
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

export default CircleMembers;
