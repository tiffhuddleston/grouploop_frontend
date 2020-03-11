import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
export default function CircleList({ circles }) {
  if (!circles.length) {
    return <h2>No Circles Found!</h2>;
  }

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
