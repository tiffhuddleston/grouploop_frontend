import React, { useState, useEffect } from 'react';
import { Image, Button, Modal, Jumbotron } from 'react-bootstrap';

export default function MemberList({ circles, members, match }) {
  const [memberData, setData] = useState({});
  const [showModal, setModal] = useState(false);

  //   useEffect(() => {
  //     fetch(`https://grouploop-be.herokuapp.com/members/`)
  //       .then(response => response.json())
  //       .then(response => {
  //         setData(response);
  //       })
  //       .catch(console.error);
  //   }, []);

  //   if (!memberData) {
  //     return null;
  //   }

  console.log(memberData);
  console.log(memberData.title);
  return (
    <div className="gallery">
      {members.map(members => (
        <div key={members.id} className="members-info">
          <h3>{members.name}</h3>

          <p>{members.github}</p>
          <p>{members.linkedin}</p>
          <p>{members.facebook}</p>
          <p>{members.instagram}</p>
          <p>{members.twitter}</p>
        </div>
      ))}
    </div>
  );
}
