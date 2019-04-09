import React, { FunctionComponent, useState } from 'react';
import { OnlyEvens } from './OnlyEvens';

export const Exercise6: FunctionComponent = () => {
  const [value, changeValue] = useState(0);

  return (
    <div>
      <button onClick={() => changeValue(value + 1)}>Add</button>
      <OnlyEvens value={value} />
    </div>
  );
};
