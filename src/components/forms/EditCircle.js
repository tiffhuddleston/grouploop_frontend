import React, { useEffect, useState } from 'react';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

function EditCircle(props) {
  const { match, members } = props;
  const [circle, setCircle] = useState([]);
  useEffect(() => {
    getCircle();
  }, []);

  const url = `https://grouploop-be.herokuapp.com/circles/${match.params.id}`;

  const handleChange = event => {
    setCircle({ ...circle, [event.target.name]: event.target.value });
  };

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
        window.location.href = 'https://grouploop-fe.herokuapp.com/add-circle';
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
        window.location.href = 'https://grouploop-fe.herokuapp.com/add-circle';
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
                  value={circle.title}
                  name="title"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  value={circle.description}
                  name="description"
                  onChange={handleChange}
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
          <Button id="deleteCircleButton" onClick={deleteCircle}>
            Delete Circle
          </Button>
        </Form>
      </div>
    </>
  );
}
export default EditCircle;
