import React, { FunctionComponent, useState } from 'react';

/**
 * Create a component that uses state to conditionally render a name, along with a button that
 * allows you to toggle between names
 */
export const Exercise3b: FunctionComponent = () => {
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
