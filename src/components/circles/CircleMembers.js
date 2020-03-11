import React, { useEffect, useState } from 'react';

function CircleMembers() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch(`https://grouploop-be.herokuapp.com/members/`)
      .then(response => response.json())
      .then(response => {
        setMembers(response);
      })
      .catch(console.error);
  }, []);

  if (!members) {
    return null;
  }

  return (
    <div>
      <h1>This is the beginning. I love React.</h1>
    </div>
  );
}

export default CircleMembers;
