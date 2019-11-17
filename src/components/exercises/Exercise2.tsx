import React, { FunctionComponent } from 'react';
import { resources } from './../../Helpers';

export interface IExercise2Props {
  firstName: string;
  lastName: string;
  description: string;
}

export const Exercise2: FunctionComponent<IExercise2Props> = ({
  firstName,
  lastName,
  description,
}) => (
  <div className="ui card">
    <div className="image">
      <img src={resources.avatarImageUri} />
    </div>
    <div className="content">
      <a className="header">
        {firstName} {lastName}
      </a>
      <div className="description">{description}</div>
    </div>
  </div>
);
