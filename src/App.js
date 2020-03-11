import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/nav/Header';
import CircleList from './components/circles/CircleList';
import MemberList from './components/circles/MemberList';
import ManageCircle from './components/forms/ManageCircle';
import EditCircle from './components/forms/EditCircle';
import ManageMember from './components/forms/ManageMember';
import EditMember from './components/forms/EditMember';
import CircleMembers from './components/circles/CircleMembers';
import Jumbotron from './components/home/Jumbotron';

function App() {
  const [members, setMembers] = useState([]);
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    getMembers();
    getCircles();
  }, []);

  function getMembers() {
    fetch('https://grouploop-be.herokuapp.com/members/')
      .then(response => response.json())
      .then(response => {
        setMembers(response);
      })
      .catch(console.error);
  }

  function getCircles() {
    fetch('https://grouploop-be.herokuapp.com/circles/')
      .then(response => response.json())
      .then(response => {
        setCircles(response);
      })
      .catch(console.error);
  }

  return (
    <div>
      <Header />
      <Jumbotron />
      <Route
        exact
        path="/edit-member/:id"
        render={routerProps => (
          <EditMember members={members} match={routerProps.match} />
        )}
      />
      <Route
        exact
        path="/manage-member"
        render={() => {
          return <ManageMember members={members} />;
        }}
      />
      <Route
        exact
        path="/edit-circle/:id"
        render={routerProps => (
          <EditCircle members={members} match={routerProps.match} />
        )}
      />
      <Route
        exact
        path="/manage-circle"
        render={() => {
          return <ManageCircle circles={circles} members={members} />;
        }}
      />
      <Route
        exact
        path="/my-circles"
        render={() => {
          return <CircleList circles={circles} />;
        }}
      />
      <Route
        exact
        path="/member-list"
        render={() => {
          return <MemberList members={members} />;
        }}
      />
      <Route
        exact
        path="/circle-members/"
        render={routerProps => (
          <CircleMembers
            members={members}
            circles={circles}
            match={routerProps.match}
          />
        )}
      />
    </div>
  );
}

export default App;
