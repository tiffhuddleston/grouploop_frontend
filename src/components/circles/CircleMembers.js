import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  Col,
  Row,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserPic from '../images/ProfileImage.svg';

function CircleMembers({ match }) {
  const [members, setMembers] = useState([]);
  console.log(match);
  const getMembers = circle => {
    fetch(`https://grouploop-be.herokuapp.com/circles/`)
      .then(response => response.json())
      .then(response => {
        const circleMembers = response.find(item => item.id == circle);
        circleMembers.member.forEach(member => {
          fetch(member)
            .then(response => response.json())
            .then(response => {
              setMembers(members => [...members, response]);
            })
            .catch(console.error);
        });
      })

      .catch(console.error);
  };

  useEffect(() => {
    getMembers(match.params.circle);
  }, []);

  if (!members) {
    return null;
  }

  return (
    <div className="gallery">
      <h2>{match.params.title}</h2>
      {members.map(member => (
        <Card
          style={{ width: '20rem', marginBottom: '1rem ' }}
          key={member._id}
        >
          <Col className="member">
            <Card.Img variant="top" src={UserPic} alt="member" />
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

export default CircleMembers;
