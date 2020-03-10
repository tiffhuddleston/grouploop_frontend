import React from 'react';
import { Container, Jumbotron as Jumbo } from 'react-bootstrap';

function Jumbotron() {
  return (
    <Jumbo fluid>
      <h1>Welcome to GroupLoop</h1>
      <p>
        Stay in the loop with all your special circles. From clubs and meetings
        to classes and workplaces, GroupLoop makes sure you can always
        reconnect.
      </p>
    </Jumbo>
  );
}

export default Jumbotron;
