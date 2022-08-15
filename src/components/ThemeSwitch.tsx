import * as React from "react";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { FaSun, FaMoon } from "react-icons/fa";

const lightTheme = "corporate";
const darkTheme = "night";

const ThemeSwitch = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    themeChange(false);
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === darkTheme) {
      setDarkMode(true);
    }
  }, []);

  return (
    <div className="flex items-center gap-1">
      <FaSun className="text-yellow-300" />
      <input
        type="checkbox"
        className="toggle rounded-[30.4px]"
        checked={darkMode}
        data-toggle-theme={`${darkTheme},${lightTheme}`}
        data-act-class="ACTIVECLASS"
        onClick={() => setDarkMode(!darkMode)}
      />
      <FaMoon />
    </div>
  );
};

export default ThemeSwitch;
