import React, { FunctionComponent, useState } from 'react';

export const Exercise4: FunctionComponent = () => {
  const [checked, handleChange] = useState(false);

  const name = checked ? 'Bad Cop' : 'Good Cop';

  return (
    <div>
      {name}
      <br />
      <input type="checkbox" onChange={() => handleChange(!checked)} checked={checked} />
    </div>
  );
};
