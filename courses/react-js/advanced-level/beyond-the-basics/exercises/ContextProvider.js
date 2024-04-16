import React, {createContext, useContext, useState} from "react";

// Step 1: Create a Context
const ThemeContext = createContext();

// Step 2: Create a Provider Component
const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{
    theme, toggleTheme }}>
      <div
        style={{
    background: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#000" : "#fff", width: "100%",
        height: "300px", padding: "20px",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Step 3: Create a Consumer Component (Optional)

// Step 4: Use the useContext Hook in child components
const ThemeToggler = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};

const DisplayTheme = () => {
  const { theme } = useContext(ThemeContext);

  return <p>The current theme is: {theme}</p>;
};

// Step 5: Use the Provider Component to wrap your application
const ContextProvider = () => {
  return (<ThemeProvider><div><ThemeToggler /><DisplayTheme />
          </div>
    </ThemeProvider>);
};

export default ContextProvider;
