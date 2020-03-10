import React, { useEffect, useState } from 'react';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';

function EditMember(props) {
  const { match } = props;
  const [member, setMember] = useState([]);

  useEffect(() => {
    getMember();
  }, []);

  const url = `https://grouploop-be.herokuapp.com/edit-member/${match.params.id}`;
  const handleSubmit = event => {
    event.preventDefault();

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
        window.location.href = 'https://localhost:3000/member-list';
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  function getMember() {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setMember(response);
      })
      .catch(console.error);
  }
  const deleteMember = event => {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        window.location.href = 'https://localhost:3000/member-list';
      })
      .catch(console.error);
    console.log(member[0]);
  };

  return (
    <>
      <div className="postMember">
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col>
              <Form.Group controlId="forName">
                <Form.Label>Name: </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={member.name}
                  name="name"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="forGithub">
                <Form.Label>Github</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={member.github}
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
                  placeholder={member.linkedin}
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
          <Button id="deleteMemberButton" onClick={deleteMember}>
            Delete Member
          </Button>
        </Form>
      </div>
    </>
  );
}
export default EditMember;
