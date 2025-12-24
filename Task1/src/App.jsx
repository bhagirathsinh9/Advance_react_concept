import { useContext } from "react";
import "./App.css";
import ThemeToggle from "./componets/ThemeToggle";
import { Themecontext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(Themecontext);

  return (
    <div
      className={
        theme === "dark" ? "bg-gray-800 min-h-screen" : "bg-white min-h-screen"
      }
    >
      <h1
        className={`text-2xl ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        Hello world!
      </h1>
      {theme}
      <ThemeToggle />
    </div>
  );
}

export default App;
