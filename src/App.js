import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/nav/Header';
import CircleList from './components/circles/CircleList';
import MemberList from './components/circles/MemberList';
import AddCircle from './components/forms/AddCircle';
import EditCircle from './components/forms/EditCircle';
import AddMember from './components/forms/AddMember';
import EditMember from './components/forms/EditMember';
import Jumbotron from './components/home/Jumbotron';

// const members = [
//   {
//     id: 3,
//     name: 'Charlie',
//     github: 'gfndgh',
//     linkedin: 'egfrzs',
//     twitter: 'agrvarg',
//     instagram: 'awefawe',
//     facebook: 'gfhbsra'
//   },
//   {
//     id: 4,
//     name: 'Danielle',
//     github: 'hjgir',
//     linkedin: 'jrgnverjhn',
//     twitter: 'fknvreig',
//     instagram: 'vmnerghreo',
//     facebook: 'hfbvujrf'
//   },
//   {
//     id: 2,
//     name: 'Lauren',
//     github: 'f',
//     linkedin: 'asdf',
//     twitter: 'afsd',
//     instagram: 'saf',
//     facebook: 'dsaf'
//   },
//   {
//     id: 1,
//     name: 'Noah',
//     github: 'g',
//     linkedin: 's',
//     twitter: 'a',
//     instagram: 'd',
//     facebook: 'f'
//   },
//   {
//     id: 5,
//     name: 'Noah',
//     github: 'kdgvngaeowihr',
//     linkedin: 'NDVOFI4TUR4',
//     twitter: 'NGERJ8',
//     instagram: '9',
//     facebook: 'fnrejfhow;i4UR'
//   }
// ];

// const circles = [
//   {
//     id: 1,
//     title: 'Best Friends',
//     description: 'A group of people I like the best',
//     member: [
//       'https://grouploop-be.herokuapp.com/members/3',
//       'https://grouploop-be.herokuapp.com/members/4',
//       'https://grouploop-be.herokuapp.com/members/2',
//       'https://grouploop-be.herokuapp.com/members/1'
//     ]
//   },
//   {
//     id: 2,
//     title: 'Enemies',
//     description: 'Nemeses, arch-rivals, and adversaries',
//     member: ['https://grouploop-be.herokuapp.com/members/5']
//   }
// ];

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
        path="/add-member"
        render={() => {
          return <AddMember members={members} />;
        }}
      />
      <Route
        exact
        path="/edit-circle/:id"
        render={routerProps => (
          <EditCircle circles={circles} match={routerProps.match} />
        )}
      />
      <Route
        exact
        path="/add-circle"
        render={() => {
          return <AddCircle circles={circles} members={members} />;
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
        render={routerProps => (
          <MemberList
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
