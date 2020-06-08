import React from 'react';

// tslint:disable-next-line:no-empty-interface
interface IExcercise4Props {}

interface IExercise4State {
  firstName: string;
  lastName: string;
  [k: string]: string;
}

export class Exercise4 extends React.Component<IExcercise4Props, IExercise4State> {
  public constructor(props: IExcercise4Props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
  }

  public handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ [e.target.name]: e.target.value });
  }

  public handleChangeFirstName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ firstName: e.target.value });
  }

  public handleChangeLastName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ lastName: e.target.value });
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
              onChange={this.handleChangeFirstName}
              placeholder="First Name"
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={this.handleChangeLastName}
              placeholder="Last Name"
            />
          </div>
        </form>
      </div>
    );
  }
}
