import React, { FunctionComponent } from 'react';
import { IExercise1Props } from './Exercise1';

interface IExercise2Props {
  firstName: string;
  lastName: string;
  description: string;
}

/**
 * Create a “Card” component that renders an image, a title and a description based off of props
 */
export const Exercise2: FunctionComponent<IExercise2Props> = ({
  firstName,
  lastName,
  description,
}) => (
  <div className="ui card">
    <div className="image">
      <img src="https://costumewall.com/wp-content/uploads/2017/02/emmet-brickowski-costume.jpg" />
    </div>
    <div className="content">
      <a className="header">
        {firstName} {lastName}
      </a>
      <div className="description">{description}</div>
    </div>
  </div>
);
