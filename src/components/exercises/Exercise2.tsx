import React, { FunctionComponent } from 'react';

export interface IExercise2Props {
  firstName: string;
  lastName: string;
  description: string;
}

export class Exercise2 extends React.Component<IExercise2Props> {
  public render() {
    const { firstName, lastName, description } = this.props;

    return (
      <div className="ui card">
        <div className="image">
          <img src="https://cdnb.artstation.com/p/assets/images/images/018/282/767/large/chris-rams-emmet-closeup-chris-rams.jpg?1558812610" />
        </div>
        <div className="content">
          <a className="header">
            {firstName} {lastName}
          </a>
          <div className="description">{description}</div>
        </div>
      </div>
    );
  }
}

// export const Exercise2: FunctionComponent<IExercise2Props> = ({
//   firstName,
//   lastName,
//   description,
// }) => (
//   <div className="ui card">
//     <div className="image">
//       <img src="https://costumewall.com/wp-content/uploads/2017/02/emmet-brickowski-costume.jpg" />
//     </div>
//     <div className="content">
//       <a className="header">
//         {firstName} {lastName}
//       </a>
//       <div className="description">{description}</div>
//     </div>
//   </div>
// );
