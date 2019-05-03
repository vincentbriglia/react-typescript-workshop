import React, { FunctionComponent, useState } from 'react';

interface IExercise12WrapperState {
  count: number;
}

interface IExercise12WrapperChildProps extends IExercise12WrapperState {
  increment(): void;
  decrement(): void;
}

interface IExercise12WrapperProps {
  render(state: IExercise12WrapperChildProps): React.ReactNode;
}

export const Exercise12Wrapper: FunctionComponent<IExercise12WrapperProps> = ({ render }) => {
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
      {render({
        count,
        decrement,
        increment,
      })}
    </div>
  );
};

export const Exercise12: FunctionComponent = () => {
  return (
    <Exercise12Wrapper
      render={({ increment, decrement, count }) => (
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
    />
  );
};
