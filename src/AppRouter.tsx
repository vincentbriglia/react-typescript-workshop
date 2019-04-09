import React, { FunctionComponent, useState } from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import { App } from './App';
import { Exercise1 } from './components/Exercise1';
import { Exercise2 } from './components/Exercise2';
import { Exercise3 } from './components/Exercise3';
import { Exercise3b } from './components/Exercise3b';
import { Exercise4 } from './components/Exercise4';
import { Exercise5 } from './components/Exercise5';
import { Exercise6 } from './components/Exercise6';
import { Exercise7 } from './components/Exercise7';
import { Exercise8 } from './components/Exercise8';
import { Header } from './components/Header';
import { NoMatch } from './components/NoMatch';

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
                <Route
                  exact
                  path="/exercise1"
                  render={() => <Exercise1 firstName="Emmet" lastName="Brickowski" />}
                />
                <Route
                  exact
                  path="/exercise2"
                  render={() => (
                    <Exercise2
                      firstName="Emmet"
                      lastName="Brickowski"
                      description="Master Builder"
                    />
                  )}
                />
                <Route exact path="/exercise3" component={Exercise3} />
                <Route exact path="/exercise3b" component={Exercise3b} />
                <Route exact path="/exercise4" component={Exercise4} />
                <Route exact path="/exercise5" component={Exercise5} />
                <Route exact path="/exercise6" component={Exercise6} />
                <Route exact path="/exercise7" component={Exercise7} />
                <Route exact path="/exercise8" component={Exercise8} />
                <Route exact path="*" component={NoMatch} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
