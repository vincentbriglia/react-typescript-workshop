import React, { FunctionComponent } from 'react';

export interface IExercise1Props {
  firstName: string;
  lastName: string;
}
/**
 * Create a component that takes a user's first and last name and renders “Hello firstName lastName”
 */
export const Exercise1: FunctionComponent<IExercise1Props> = ({ firstName, lastName }) => (
  <p className="no-match">
    Hello {firstName} {lastName}
  </p>
);
