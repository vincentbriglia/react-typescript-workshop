import React, { FunctionComponent, useReducer } from 'react';

const initialState = 0;

const reducer = (state: number, action: string) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return 0;
    default:
      throw new Error('Unexpected action');
  }
};

/**
 * create a +/-/reset counter using useReducer
 */
export const Exercise9: FunctionComponent = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="ui segment basic">
        <div className="ui label">
          Count
          <div className="detail">{count}</div>
        </div>
      </div>
      <button className="ui button" onClick={() => dispatch('decrement')}>
        -1
      </button>
      <button className="ui button" onClick={() => dispatch('reset')}>
        reset
      </button>
      <button className="ui button" onClick={() => dispatch('increment')}>
        +1
      </button>
    </div>
  );
};
