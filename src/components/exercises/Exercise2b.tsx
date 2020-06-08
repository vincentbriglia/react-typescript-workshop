import React, { FunctionComponent } from 'react';

interface IExercise2Props {
  firstName: string;
  middleName: string;
  lastName: string;
  description: string;
  avatar: string;
}

interface IFancyButtonProps {
  onClick: any;
}

export const FancyButton: FunctionComponent<IFancyButtonProps> = ({ onClick }) => {
  return (
    <button className="ui button" onClick={onClick}>
      Text
    </button>
  );
};

export const DescriptionComponent: FunctionComponent<Partial<IExercise2Props>> = ({
  description,
}) => <div className="description">{description}</div>;

export const AvatarComponent: FunctionComponent<Partial<IExercise2Props>> = ({ avatar }) => (
  <div className="image">
    <img src={avatar} />
  </div>
);

export const FullNameComponent: FunctionComponent<Partial<IExercise2Props>> = ({
  firstName,
  middleName,
  lastName,
}) => (
  <a className="header">
    {firstName} {middleName} {lastName}
  </a>
);

export const Exercise2b: FunctionComponent<IExercise2Props> = ({
  firstName,
  middleName,
  lastName,
  avatar,
  description,
}) => (
  <div className="ui card">
    <FancyButton
      onClick={() => {
        console.log('TOPFANCY');
      }}
    />
    <AvatarComponent avatar={avatar} />
    <div className="content">
      <FullNameComponent firstName={firstName} middleName={middleName} lastName={lastName} />
      <DescriptionComponent description={description} />
    </div>
    <FancyButton
      onClick={() => {
        console.log('FanceyButton1');
      }}
    />
  </div>
);
