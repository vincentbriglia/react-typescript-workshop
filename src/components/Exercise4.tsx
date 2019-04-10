import React from 'react';

// tslint:disable-next-line:no-empty-interface
interface IExcercise4Props {}

interface IExercise4State {
  firstName: string;
  lastName: string;
  [k: string]: string;
}

/**
 * Create a form input component that allows us to type our first and lastname, and print it out on
 * screen whilst typing
 */
export class Exercise4 extends React.Component<IExcercise4Props, IExercise4State> {
  constructor(props: IExcercise4Props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ [e.target.name]: e.target.value });
  }

  public render() {
    const { firstName, lastName } = this.state;

    return (
      <div className="ui segment">
        <div className="ui label">
          Hello {firstName} {lastName}
        </div>
        <form className="ui form">
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={this.handleChange}
              placeholder="First Name"
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              placeholder="Last Name"
            />
          </div>
        </form>
      </div>
    );
  }
}
