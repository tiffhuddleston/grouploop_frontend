import React, { useState, useEffect } from 'react';
import { Image, Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MemberList({ members }) {
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

export default MemberList;

// useEffect(() => {
//   const url = `https://grouploop-be.herokuapp.com/members/3`;
//   fetch(url)
//     .then(response => response.json())
//     .then(response => {
//       console.log(response);
//       response.forEach(member => {
//         console.log(member);
//         fetch(member.circle)
//           .then(response => response.json())
//           .then(response => {
//             member.venue = response;
//             setMembers(members => [...members, member]);
//             console.log(response);
//           });
//       });
//     })
//     .catch(console.error);
// }, []);