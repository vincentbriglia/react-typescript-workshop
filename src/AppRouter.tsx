import React, { Fragment, FunctionComponent, useState } from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import { App } from './App';
import { Header } from './components/Header';
import { NoMatch } from './components/NoMatch';
import { routeData } from './Routes';

export const AppRouter: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Header />
          </div>
          <div className="twelve wide stretched column">
            <div className="ui segment">
              <Switch>
                <Route exact path="/" render={() => <App />} />

                {routeData.map((route) => {
                  // slight hack to avoid typechecking
                  // tslint:disable-next-line:naming-convention
                  const RouteComponent: any = route.component;

                  return (
                    <Route
                      path={`/exercise/${route.id}`}
                      key={route.id}
                      render={() => (
                        <Fragment>
                          <h5 className="ui top attached header">Exercise {route.id}</h5>
                          <div className="ui attached segment">
                            <p>{route.description}</p>
                          </div>
                          <h5 className="ui attached header">Solution {route.id}</h5>
                          <div className="ui bottom attached segment">
                            <RouteComponent {...route.props} />
                          </div>
                        </Fragment>
                      )}
                    />
                  );
                })}

                <Route exact path="*" component={NoMatch} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
