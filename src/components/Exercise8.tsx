// tslint:disable:no-null-keyword
import axios from 'axios';
import React, { FunctionComponent, useEffect, useState } from 'react';

export const Exercise8: FunctionComponent = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios('https://randomuser.me/api/');
      setData(response.data);
    };

    fetchData();
  }, []);

  return <pre>{JSON.stringify(data, null, 4)}</pre>;
};
