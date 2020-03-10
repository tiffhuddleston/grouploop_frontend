import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
export default function CircleList({ circles }) {
  const [circleData, setData] = useState({});
  const [showModal, setModal] = useState(false);

  //   useEffect(() => {
  //     fetch(`https://grouploop-be.herokuapp.com/circles/`)
  //       .then(response => response.json())
  //       .then(response => {
  //         setData(response);
  //       })
  //       .catch(console.error);
  //   }, []);

  //   if (!circleData) {
  //     return null;
  //   }

  if (!circles.length) {
    return <h2>No Circles Found!</h2>;
  }

  console.log(circleData);
  console.log(circleData.title);
  return (
    <div className="gallery">
      {circles.map(circle => (
        <div key={circle.id} className="circle-info">
          <Link to="member-list">
            <h3>{circle.title}</h3>
          </Link>
          <p>{circle.description}</p>
        </div>
      ))}
    </div>
  );
}

{
  /* <>
      <h3 key={circleData.id} id="page-title">
        {circleData.title}
      </h3>
    </> */
}
