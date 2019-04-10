import autobind from 'autobind-decorator';
import React, { Component } from 'react';
import { OnlyEvens } from './OnlyEvens';

interface IAppProps {
  someProp?: string;
}

interface IAppState {
  value: number;
}

/**
 * Create a component that re-renders only every other click, but updates a counter incrementally,
 * without using useState
 */
export class Exercise5 extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      value: 0,
    };
    this.addValue = this.addValue.bind(this);
  }

  public addValue() {
    // tslint:disable-next-line:no-console
    console.log('state was: ', this.state.value);
    this.setState(
      {
        value: this.state.value + 1,
      },
      () => {
        // tslint:disable-next-line:no-console
        console.log('state is: ', this.state.value);
      }
    );
  }

  public render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
