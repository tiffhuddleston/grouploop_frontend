import React, { useEffect, useState } from 'react';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

function EditMember(props) {
  const { match } = props;
  const [member, setMember] = useState([]);

  useEffect(() => {
    getMember();
  }, []);

  const url = `https://grouploop-be.herokuapp.com/members`;

  const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    console.log(match);

    let data = {};
    data.name = event.target['name'].value;
    data.github = event.target['github'].value;
    data.linkedin = event.target['linkedin'].value;
    data.twitter = event.target['twitter'].value;
    data.instagram = event.target['instagram'].value;
    data.facebook = event.target['facebook'].value;
    for (var propName in data) {
      if (
        data[propName] === null ||
        data[propName] === '' ||
        data[propName] === undefined
      ) {
        delete data[propName];
      }
    }
    updateMember(data);
  };

  const updateMember = data => {
    fetch(`https://grouploop-be.herokuapp.com/members/${match.params.id}`, {
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
        window.location.href = 'https://grouploop-fe.herokuapp.com/member-list';
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  function getMember() {
    fetch(`https://grouploop-be.herokuapp.com/members/${match.params.id}`)
      .then(response => response.json())
      .then(response => {
        setMember(response);
      })
      .catch(console.error);
  }
  const deleteMember = event => {
    fetch(`https://grouploop-be.herokuapp.com/members/${match.params.id}`, {
      crossDomain: true,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        window.location.href = 'https://grouploop-fe.herokuapp.com/member-list';
      })
      .catch(console.error);
  };

  return (
    <>
      <div className="postMember">
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Name: </Form.Label>
                <Form.Control
                  type="text"
                  value={member.name}
                  name="name"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="forGithub">
                <Form.Label>Github</Form.Label>
                <Form.Control
                  type="text"
                  value={member.github}
                  name="github"
                  onChange={handleChange}
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
                  value={member.linkedin}
                  name="linkedin"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="forTwitter">
                <Form.Label>Twitter</Form.Label>
                <Form.Control
                  type="text"
                  value={member.twitter}
                  name="twitter"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="forInstagram">
                <Form.Label>Instagram</Form.Label>
                <Form.Control
                  type="text"
                  value={member.instagram}
                  name="instagram"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Col>
            <Form.Group controlId="forFacebook">
              <Form.Label>Facebook</Form.Label>
              <Form.Control
                type="text"
                value={member.facebook}
                name="facebook"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Button variant="outline-success" type="submit">
            Submit
          </Button>
          <Button id="deleteMemberButton" onClick={deleteMember}>
            Delete Member
          </Button>
        </Form>
      </div>
    </>
  );
}
export default EditMember;
