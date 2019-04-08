import React, { FunctionComponent } from 'react';
import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom';
import { App } from './App';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const AppRouter: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <div className="ui container">
        <Header />
        <Route exact path="/" render={() => <App someProp="hello" />} />
        <Route path="/users" component={App} />
        <Route path="/contact" component={App} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
