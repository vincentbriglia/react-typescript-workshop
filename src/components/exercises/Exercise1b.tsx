import * as React from 'react';
import { render } from 'react-dom';

import './styles.css';

interface IUser {
  firstName: string;
  lastName: string;
}

// parameter user that contains information first and lastname
const user: IUser = {
  firstName: 'Isabel',
  lastName: 'Eklund',
};

// creating function formatName that has the parameter user
// tslint:disable-next-line:naming-convention
// function App(appUser: IUser) {
//   return `${appUser.firstName} ${appUser.lastName}`;
// }

const App = (appUser: IUser) => {
  return `${appUser.firstName} ${appUser.lastName}`;
};

// an element that takes hello and returns 'hello' and user inputs in HTMLElement
const element = <h1>Hello, {App(user)}!</h1>;

// an element that takes hello and returns 'hello' and user inputs in HTMLElement
const theotherelement = <h1>Hello, {App({ firstName: 'Vincent', lastName: 'Briglia' })}!</h1>;

// React renders til element to the DOM

const rootElement = document.getElementById('root');
render(element ? element : theotherelement, rootElement);
