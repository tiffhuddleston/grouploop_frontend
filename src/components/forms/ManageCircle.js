import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Col, InputGroup, Button, Row, Card } from 'react-bootstrap';

function ManageCircle(props) {
  let history = useHistory();
  const { circles } = props;

  const postNewCircle = data => {
    const url = 'https://grouploop-be.herokuapp.com/circles/';
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
        history.push('/my-circles');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  const handleSubmit = event => {
    event.preventDefault();

    let data = {};
    data.title = event.target['title'].value;
    data.description = event.target['description'].value;

    postNewCircle(data);
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
          <Button variant="outline-success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <h3 id="postedCirclesHeader">Posted Circles</h3>
      <div className="circleGrid">
        {circles.map(circle => (
          <Card
            style={{ width: '20rem', marginBottom: '1rem ' }}
            key={circle.id}
          >
            <Col className="circle">
              <div className="circleDetails">
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title>{circle.title}</Card.Title>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card.Text>{circle.description}</Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button variant="outline-info">
                        <Link to={`/edit-circle/${circle.id}`}> Edit</Link>
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
