// tslint:disable:no-null-keyword
import axios from 'axios';
import React, { Component } from 'react';
import { Exercise2, IExercise2Props } from './Exercise2';

interface IAppProps {
  someProp?: string;
}

// tslint:disable-next-line:no-empty-interface
interface IAppState extends IExercise2Props {
  loading: boolean;
}

interface IRandomUserData {
  results: any;
}

export class Exercise7 extends Component<IAppProps, IAppState> {
  public constructor(props: IAppProps) {
    super(props);

    this.state = {
      description: '',
      firstName: '',
      lastName: '',
      loading: true,
    };
  }

  public componentWillMount() {
    axios
      .request<IRandomUserData>({
        method: 'get',
        url: 'https://randomuser.me/api/',
      })
      .then((response) => {
        const responseUser = response.data.results[0];

        this.setState(
          {
            description: responseUser.email,
            firstName: responseUser.name.first,
            lastName: responseUser.name.last,
          },
          () => {
            this.setState({ loading: false });
          }
        );
      })
      .catch((err) => {
        console.log('SPECIAL ERROR REPORT', err);
      })
      .finally(() => {
        console.log('I ALWAYS GET LOGGED');
        this.setState({ loading: false });
      });
  }

  public render() {
    if (this.state.loading) {
      return <div>Loading</div>;
    }

    return <Exercise2 {...this.state} />;
  }
}
