import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

export const Footer: FunctionComponent = () => {
  return (
    <div className="ui blue footer segment">
      <div className="ui center aligned container">
        <div className="ui horizontal small divided link list">
          <NavLink exact activeClassName="active" className="item" to="/">
            Home
          </NavLink>
          <NavLink exact activeClassName="active" className="item" to="/users">
            Users
          </NavLink>
          <NavLink exact activeClassName="active" className="item" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};
