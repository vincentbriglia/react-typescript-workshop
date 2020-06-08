import React, { FunctionComponent, useState } from 'react';
import { OnlyEvens } from '../OnlyEvens';

interface IAppProps {
  initialValue?: number;
}

export const Exercise6: FunctionComponent<IAppProps> = ({ initialValue = 0 }) => {
  const [value, changeValue] = useState(initialValue);

  return (
    <div>
      <button onClick={() => changeValue(value + 1)}>Add</button>
      <OnlyEvens value={value} />
    </div>
  );
};
