import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Col, Button, Row, Card } from 'react-bootstrap';

function ManageMember(props) {
  const { members } = props;

  const postNewMember = data => {
    const url = 'https://grouploop-be.herokuapp.com/members/';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        response.json();
      })
      .then(data => {
        console.log('Success:', data);
        window.location.href = 'https://localhost:3000/member-list';
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleSubmit = event => {
    event.preventDefault();

    let data = {};
    data.name = event.target['name'].value;
    data.github = event.target['github'].value;
    data.linkedin = event.target['linkedin'].value;
    data.twitter = event.target['twitter'].value;
    data.instagram = event.target['instagram'].value;
    data.facebook = event.target['facebook'].value;

    postNewMember(data);
  };

  return (
    <>
      <div className="manageMember">
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col>
              <Form.Group controlId="forName">
                <Form.Label>Name</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter name of member"
                  name="name"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="forGithub">
                <Form.Label>Github</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter github account url"
                  name="github"
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group controlId="forLinkedin">
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter LinkedIn account url"
                  name="linkedin"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="forTwitter">
                <Form.Label>Twitter</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Twitter account url"
                  name="twitter"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="forInstagram">
                <Form.Label>Instagram</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Instagram account url"
                  name="instagram"
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Col>
            <Form.Group controlId="forFacebook">
              <Form.Label>Facebook</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Facebook account url"
                name="facebook"
              />
            </Form.Group>
          </Col>
          <Button variant="outline-success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <h3 id="membersHeader">Members</h3>
      <div className="memberGrid">
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
                      <Card.Text>{member.description}</Card.Text>
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
    </>
  );
}

export default ManageMember;
