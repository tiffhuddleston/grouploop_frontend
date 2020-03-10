import React, { useEffect, useState } from 'react';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

function EditCircle(props) {
  const { match } = props;
  const [circle, setCircle] = useState([]);
  useEffect(() => {
    getCircle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const url = `https://grouploop-be.herokuapp.com/edit-circle/${match.params.id}`;
  const handleSubmit = event => {
    event.preventDefault();
    let data = {};
    data.title = event.target['title'].value;
    data.description = event.target['description'].value;
    data.member = event.target['member'].value;
    for (let propName in data) {
      if (
        data[propName] === null ||
        data[propName] === '' ||
        data[propName] === undefined
      ) {
        delete data[propName];
      }
    }
    updateCircle(data);
  };
  const updateCircle = data => {
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        response.json();
      })
      .then(data => {
        window.location.href = 'https://localhost:3000/add-circle';
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  function getCircle() {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setCircle(response);
      })
      .catch(console.error);
  }
  const deleteCircle = event => {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        window.location.href = 'https://localhost:3000/add-circle';
      })
      .catch(console.error);
  };
  return (
    <>
      <div className="postCircle">
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col>
              <Form.Group controlId="forTitle">
                <Form.Label>Title: </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={circle.name}
                  name="title"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={circle.description}
                  name="description"
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Members</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={circle.member}
                  name="Member"
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Button variant="outline-success" type="submit">
            Submit
          </Button>
          <Button id="deleteCircleButton" onClick={deleteCircle}>
            Delete Circle
          </Button>
        </Form>
      </div>
    </>
  );
}
export default EditCircle;
