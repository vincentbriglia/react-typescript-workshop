import React, { FunctionComponent, useState } from 'react';

interface IExercise13WrapperState {
  count: number;
}

interface IExercise13WrapperChildProps extends IExercise13WrapperState {
  increment(): void;
  decrement(): void;
}

interface IExercise13WrapperProps {
  children(state: IExercise13WrapperChildProps): React.ReactNode;
}

export const Exercise13Wrapper: FunctionComponent<IExercise13WrapperProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  // Increase count
  const increment = () => {
    setCount(count + 1);
  };

  // Decrease count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      {children({
        count,
        decrement,
        increment,
      })}
    </div>
  );
};

export const Exercise13: FunctionComponent = () => {
  return (
    <Exercise13Wrapper>
      {({ increment, decrement, count }) => (
        <div>
          <div>
            <h3>Render Props Counter</h3>
          </div>
          <div>
            <p className="ui label">{count}</p>
          </div>
          <div>
            <button className="ui button" onClick={decrement}>
              -1
            </button>
            <button className="ui button" onClick={increment}>
              +1
            </button>
          </div>
        </div>
      )}
    </Exercise13Wrapper>
  );
};
