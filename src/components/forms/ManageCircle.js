import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Col, InputGroup, Button, Row, Card } from 'react-bootstrap';

function ManageCircle(props) {
  const { circles, members } = props;
  const handleSubmit = event => {
    event.preventDefault();

    let data = {};
    data.title = event.target['title'].value;
    data.description = event.target['description'].value;
    data.member = event.target['member'].value;

    postNewCircle(data);
  };

  const postNewCircle = data => {
    const url = 'https://grouploop-be.herokuapp.com/circles';
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
        window.location.href = 'https://localhost:3000/';
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <div className="postCircle">
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col>
              <Form.Group controlId="forTitle">
                <Form.Label>Title</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter title of circle"
                  name="title"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter description of circle"
                  name="description"
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group className="dropdown-members">
                <Form.Label>Add Members</Form.Label>
                <Form.Control as="select" name="Member">
                  {members.map(member => (
                    <option key={member.value} value={member.value}>
                      {member.name}
                    </option>
                  ))}{' '}
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>

          <Button variant="outline-success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <h3 id="postedCirclesHeader">Posted Circles</h3>
      <div className="circleGrid">
        {circles.map(event => (
          <Card
            style={{ width: '20rem', marginBottom: '1rem ' }}
            key={event.id}
          >
            <Col className="circle">
              <div className="circleDetails">
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title>{event.title}</Card.Title>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card.Text>{event.description}</Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button variant="outline-info">
                        <Link to={`/edit-circle/${event.id}`}> Edit</Link>
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

export default ManageCircle;
