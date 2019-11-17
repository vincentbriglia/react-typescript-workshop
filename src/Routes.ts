import { Exercise1 } from './components/exercises/Exercise1';
import { Exercise10 } from './components/exercises/Exercise10';
import { Exercise11 } from './components/exercises/Exercise11';
import { Exercise12 } from './components/exercises/Exercise12';
import { Exercise13 } from './components/exercises/Exercise13';
import { Exercise14 } from './components/exercises/Exercise14';
import { Exercise2 } from './components/exercises/Exercise2';
import { Exercise2b } from './components/exercises/Exercise2b';
import { Exercise3 } from './components/exercises/Exercise3';
import { Exercise3b } from './components/exercises/Exercise3b';
import { Exercise4 } from './components/exercises/Exercise4';
import { Exercise5 } from './components/exercises/Exercise5';
import { Exercise6 } from './components/exercises/Exercise6';
import { Exercise7 } from './components/exercises/Exercise7';
import { Exercise8 } from './components/exercises/Exercise8';
import { Exercise9 } from './components/exercises/Exercise9';
import { resources } from './Helpers';

export const routeData = [
  {
    component: Exercise1,
    description: `Create a component that takes a user's first and last name and renders “Hello firstName lastName”`,
    difficulty: 'B',
    id: '1',
    props: {
      firstName: 'Emmet',
      lastName: 'Brickowski',
    },
  },
  {
    component: Exercise2,
    description: `Create a “Card” component that renders an image, a title and a description based off of props`,
    difficulty: 'B',
    id: '2',
    props: {
      description: 'Master Builder',
      firstName: 'Emmet',
      lastName: 'Brickowski',
    },
  },
  {
    component: Exercise2b,
    description: `Create a “Card” component that renders an image, a title and a description based off of props but with individual components for image, title and description`,
    difficulty: 'B',
    id: '2b',
    props: {
      avatar: resources.avatarImageUri,
      description: 'Master Builder',
      firstName: 'Emmet',
      lastName: 'Brickowski',
      middleName: 'Joseph',
    },
  },
  {
    component: Exercise3,
    description: `Create a component that uses state to conditionally render two names, using a checkbox that allows you to toggle between names, without using React Hooks`,
    difficulty: 'B',
    id: '3',
  },
  {
    component: Exercise3b,
    description: `Create a component that uses state to conditionally render two names, using a checkbox that allows you to toggle between names, but by using React Hooks`,
    difficulty: 'B',
    id: '3b',
  },
  {
    component: Exercise4,
    description: `Create a form input component that allows us to type our first and lastname, and print it out on screen whilst typing`,
    difficulty: 'B',
    id: '4',
  },
  {
    component: Exercise5,
    description: `Create a component that re-renders only every other click, but updates a counter incrementally, without using useState`,
    difficulty: 'I',
    id: '5',
  },
  {
    component: Exercise6,
    description: `Create a component that re-renders only every other click, but updates a counter incrementally, by using useState`,
    difficulty: 'I',
    id: '6',
  },
  {
    component: Exercise7,
    description: `Create a component that fetches user information from an API, put that information into state to render a user card created in Exercise 2, without using useState`,
    difficulty: 'I',
    id: '7',
  },
  {
    component: Exercise8,
    description: `Create a component that fetches user information from an API, put that information into state to render a user card created in Exercise 2, by using useState`,
    difficulty: 'A',
    id: '8',
  },
  {
    component: Exercise9,
    description: `create a +/-/reset counter using useReducer`,
    difficulty: 'A',
    id: '9',
    props: {
      initialCount: 100,
    },
  },
  {
    component: Exercise10,
    description: `create a simple theme context provider and a component that comsumes the context, like a themeprovider and a button`,
    difficulty: 'A',
    id: '10',
  },
  {
    component: Exercise11,
    description: `create a simple theme context provider and a component that comsumes the context, like a themeprovider and a button, using useContext in the consuming component`,
    difficulty: 'A',
    id: '11',
  },
  {
    component: Exercise12,
    description: `Create a counter using the render prop pattern, by using a prop called "render"`,
    difficulty: 'A',
    id: '12',
  },
  {
    component: Exercise13,
    description: `Create a counter using the render prop pattern, by using the children node, instead of a prop`,
    difficulty: 'A',
    id: '13',
  },
  {
    component: Exercise14,
    description: `Create a Tab / TabPanel Compound Component using context, hooks and other techniques you have learned in this workshop`,
    difficulty: 'A',
    id: '14',
  },
];
