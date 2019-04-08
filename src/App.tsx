import React, { Component } from 'react';
import './App.css';

interface IAppProps {
  someProp?: string;
}

export class App extends Component<IAppProps> {
  public render() {
    const { someProp } = this.props;

    return <div className="ui segment">Learn React {someProp}</div>;
  }
}
