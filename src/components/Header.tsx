import classnames from 'classnames';
import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { routeData } from '../Routes';

export const Header: FunctionComponent = () => {
  return (
    <div className="ui vertical fluid pointing menu">
      <div className="header item">LEGO React TS Workshop</div>
      <NavLink exact activeClassName="active" className="item" to="/">
        Home
      </NavLink>
      {routeData.map((route) => {
        const labelClassName = classnames('ui label', {
          green: route.difficulty === 'B',
          orange: route.difficulty === 'I',
          red: route.difficulty === 'A',
        });

        return (
          <NavLink
            key={route.id}
            exact
            activeClassName="active"
            className="item"
            to={`/exercise/${route.id}`}
          >
            Exercise {route.id}
            <div className={labelClassName}>{route.difficulty}</div>
          </NavLink>
        );
      })}
    </div>
  );
};
