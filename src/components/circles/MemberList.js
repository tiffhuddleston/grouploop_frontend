import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  Col,
  Row,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
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
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        {!member.linkedin ? null : (
                          <a href="{member.linkedin}">LinkedIn</a>
                        )}
                      </ListGroupItem>
                      <ListGroupItem>
                        {!member.facebook ? null : (
                          <a href="{member.facebook}">Facebook</a>
                        )}
                      </ListGroupItem>
                      <ListGroupItem>
                        {!member.twitter ? null : (
                          <a href="{member.twitter}">Twitter</a>
                        )}
                      </ListGroupItem>
                      <ListGroupItem>
                        {!member.github ? null : (
                          <a href="{member.github}">Github</a>
                        )}
                      </ListGroupItem>
                      <ListGroupItem>
                        {!member.instagram ? null : (
                          <a href="{member.instagram}">Instagram</a>
                        )}
                      </ListGroupItem>
                    </ListGroup>
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
