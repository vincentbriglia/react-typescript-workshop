import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

export const Header: FunctionComponent = () => {
  return (
    <div className="ui secondary menu">
      <div className="header item">React TS Workshop</div>
      <NavLink exact activeClassName="active" className="item" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="active" className="item" to="/users">
        Users
      </NavLink>
      <NavLink exact activeClassName="active" className="item" to="/contact">
        Contact
      </NavLink>
      <div className="right menu">
        <a className="ui item">Logout</a>
        <a className="ui item">Logout</a>
      </div>
    </div>
  );
};
