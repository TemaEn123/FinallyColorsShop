import React, { createContext, useContext, useState } from "react";

interface IThemeContext {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
  children: React.ReactNode;
}

const ThemeContext = createContext<IThemeContext | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("error context");

  return context;
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
