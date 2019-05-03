import React, { FunctionComponent } from 'react';

interface IThemeContextProps {
  primaryColor: string;
}

// tslint:disable-next-line:naming-convention
const ThemeContext = React.createContext<Partial<IThemeContextProps>>({
  primaryColor: 'teal',
});

export const ThemedButton: FunctionComponent = () => (
  <ThemeContext.Consumer>
    {(value) => <button className={`ui ${value.primaryColor} button`}>{value.primaryColor}</button>}
  </ThemeContext.Consumer>
);

export const Exercise10: FunctionComponent = () => (
  <div>
    <ThemeContext.Provider value={{ primaryColor: 'green' }}>
      <ThemedButton />
    </ThemeContext.Provider>
  </div>
);
