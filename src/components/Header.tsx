import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

export const Header: FunctionComponent = () => {
  return (
    <div className="ui vertical fluid tabular menu">
      <div className="header item">React TS Workshop</div>
      <NavLink exact activeClassName="active" className="item" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="active" className="item" to="/exercise1">
        Exercise 1
      </NavLink>
      <NavLink exact activeClassName="active" className="item" to="/exercise2">
        Exercise 2
      </NavLink>
      <NavLink exact activeClassName="active" className="item" to="/exercise3">
        Exercise 3
      </NavLink>
      <NavLink exact activeClassName="active" className="item" to="/exercise3b">
        Exercise 3b
      </NavLink>
      <NavLink exact activeClassName="active" className="item" to="/exercise4">
        Exercise 4
      </NavLink>
      <NavLink exact activeClassName="active" className="item" to="/exercise5">
        Exercise 5
      </NavLink>
      <NavLink exact activeClassName="active" className="item" to="/exercise6">
        Exercise 6
      </NavLink>
      <NavLink exact activeClassName="active" className="item" to="/exercise7">
        Exercise 7
      </NavLink>
      <NavLink exact activeClassName="active" className="item" to="/exercise8">
        Exercise 8
      </NavLink>
    </div>
  );
};
