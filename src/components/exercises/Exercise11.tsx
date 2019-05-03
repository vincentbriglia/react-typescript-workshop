import React, { FunctionComponent, useContext } from 'react';

interface IThemeContextProps {
  primaryColor: string;
}

// tslint:disable-next-line:naming-convention
const ThemeContext = React.createContext<Partial<IThemeContextProps>>({});

export const ThemedButton: FunctionComponent = () => {
  const value = useContext(ThemeContext);

  return <button className={`ui ${value.primaryColor} button`}>{value.primaryColor}</button>;
};

// you could also create a hook like this and use that instead!
// export function useTheme() {
//   return useContext(ThemeContext);
// }

export const Exercise11: FunctionComponent = () => {
  return (
    <ThemeContext.Provider value={{ primaryColor: 'teal' }}>
      <ThemedButton />
    </ThemeContext.Provider>
  );
};
