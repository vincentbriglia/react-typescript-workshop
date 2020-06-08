import React, { FunctionComponent, useEffect } from 'react';

export interface IExercise1Props {
  firstName: string;
  lastName: string;
  middleName?: string;
}

// // tslint:disable-next-line:max-classes-per-file
export class Exercise1 extends React.Component<IExercise1Props> {
  public render() {
    const { firstName, middleName, lastName } = this.props;

    if (middleName !== undefined) {
      return (
        <p className="no-match">
          Hello {lastName}, {middleName} {firstName}
        </p>
      );
    }

    return (
      <p className="no-match">
        Hello {firstName} {lastName}
      </p>
    );
  }
}

// export function Exercise1({ firstName, lastName }: IExercise1Props) {
//   return (
//     <p className="no-match">
//       Hello {firstName} {lastName}
//     </p>
//   );
// }

// export const Exercise1: FunctionComponent<IExercise1Props> = ({ firstName, lastName }) => (
//   <p className="no-match">
//     Hello {firstName} {lastName}
//   </p>
// );

// export const Exercise1: FunctionComponent<IExercise1Props> = ({ firstName, lastName }) => {
//   // useEffect(() => {
//   //   // componentWillMount
//   // }, []);

//   return (
//     <p className="no-match">
//       Hello {firstName} {lastName}
//     </p>
//   );
// };
