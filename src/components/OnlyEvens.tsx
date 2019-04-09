import React from 'react';

interface IOnlyEvensProps {
  value: number;
}

export class OnlyEvens extends React.Component<IOnlyEvensProps> {
  public shouldComponentUpdate(nextProps: IOnlyEvensProps) {
    // tslint:disable-next-line:no-console
    console.log('OnlyEvens prop is now:', nextProps.value);
    if (nextProps.value % 2 === 0) {
      return true;
    }

    return false;
  }

  public componentDidUpdate() {
    // tslint:disable-next-line:no-console
    console.log('Component re-rendered with props: ', this.props);
  }

  public render() {
    return <h1>{this.props.value}</h1>;
  }
}
