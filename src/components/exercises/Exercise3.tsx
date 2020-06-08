import React from 'react';

// tslint:disable-next-line:no-empty-interface
interface IExercise3Props {}

interface IExercise3State {
  checked: boolean;
}

export class Exercise3 extends React.Component<IExercise3Props, IExercise3State> {
  public state: IExercise3State = {
    checked: false,
  };

  public constructor(props: IExercise3Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      checked: e.target.checked,
    });
  }

  public render() {
    const name = this.state.checked ? 'Bad Cop' : 'Good Cop';

    return (
      <div>
        {name}
        <br />
        <input type="checkbox" onChange={this.handleChange} checked={this.state.checked} />
      </div>
    );
  }
}
