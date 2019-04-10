// tslint:disable:no-null-keyword
import axios from 'axios';
import React, { Component } from 'react';

interface IAppProps {
  someProp?: string;
}

interface IAppState {
  data: object;
}

interface IRandomUserData {
  results: any;
}

/**
 * Create a component that fetches user information from an API, put that information into state to
 * render a user card without using useState
 */
export class Exercise7 extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      data: {},
    };
  }

  public componentWillMount() {
    axios
      .request<IRandomUserData>({
        method: 'get',
        url: 'https://randomuser.me/api/',
      })
      .then((response) => {
        this.setState({
          data: response.data,
        });
      });
  }

  public render() {
    return <pre>{JSON.stringify(this.state.data, null, 4)}</pre>;
  }
}
