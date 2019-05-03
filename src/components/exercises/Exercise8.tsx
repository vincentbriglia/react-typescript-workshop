// tslint:disable:no-null-keyword
import axios from 'axios';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Exercise2, IExercise2Props } from './Exercise2';

export const Exercise8: FunctionComponent = () => {
  const [data, setData] = useState<IExercise2Props | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios('https://randomuser.me/api/');
      const responseUser = response.data.results[0];

      setData({
        description: responseUser.email,
        firstName: responseUser.name.first,
        lastName: responseUser.name.last,
      });
    };

    fetchData();
  }, []);

  if (data === undefined) {
    return null;
  }

  return <Exercise2 {...data} />;
};
