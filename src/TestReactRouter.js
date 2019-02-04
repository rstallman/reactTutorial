import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';

const Home = () => <div>Home</div>
const About = () => <div>About</div>
const Users = ({match, location, history}) => { 
  console.log('match', match);
  console.log('location', location);
  console.log('history', history);
  return <div>{match.params.id}</div>
}


const AllUsers = () => <div>All users:ljl, lxc</div>

let Style= {
  color:'red'
}

const Info = ({match}) => {
  return (
    <div>
      <ul>
        <li>
          <NavLink  activeStyle={Style} to={match.url + "/phone"}>Phone</NavLink>
        </li>
        <li>
          <NavLink  activeStyle={Style} to={match.url + "/email"}>Email</NavLink>
        </li>
        <li>
          <Link to={match.url + "/address"}>Address</Link>
        </li>
      </ul>
      <hr />
      <Route
        path={match.url + "/phone"}
        render={props => <div>Phone: 123 456 7890</div>}
        />
        <Route
        path={match.url + "/email"}
        render={props => <div>Email: email@sdust.edu</div>}
        />
    </div>
  )
};

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users/abc">User:abc</Link>
        </li>
        <li>
        <Link to="/users/allUsers">All users</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>

      </ul>
      <hr />
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/users/allUsers" component={AllUsers}></Route>
      <Route path="/users/:id" component={Users}></Route>
      <Route path="/info" component={Info}></Route>
      <Route children={() => <div>Always rendered</div>}></Route>
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;