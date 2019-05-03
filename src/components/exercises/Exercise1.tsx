import React, { FunctionComponent } from 'react';

export interface IExercise1Props {
  firstName: string;
  lastName: string;
}

export const Exercise1: FunctionComponent<IExercise1Props> = ({ firstName, lastName }) => (
  <p className="no-match">
    Hello {firstName} {lastName}
  </p>
);
