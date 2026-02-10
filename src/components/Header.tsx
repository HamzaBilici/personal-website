import axios from "axios";
import { useState } from "react";

const toggleCheckedLabelStyle: string =
  "peer-checked:translate-x-8  peer-checked:bg-custom-yellow";

const fontSetup: string =
  "font-inter font-bold text-base leading-none tracking-wider text-custom-gray";

const transition: string = "transition-all duration-600";

const Header = () => {
  const themeKey: string = "theme";
  const languageKey: string = "language";

  const [theme, setTheme] = useState<boolean>((): boolean => {
    const storedTheme = localStorage.getItem(themeKey);
    if (storedTheme === null) {
      localStorage.setItem(themeKey, JSON.stringify(true));
      return true;
    } else {
      return JSON.parse(storedTheme);
    }
  });

  const [language, setLanguage] = useState<string>((): string => {
    const storedLanguage = localStorage.getItem(languageKey);
    if (storedLanguage === null) {
      localStorage.setItem(languageKey, JSON.stringify("TR"));
      return "TR";
    } else {
      return JSON.parse(storedLanguage);
    }
  });

  const handleThemeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { checked } = event.target;
    setTheme(checked);
    localStorage.setItem(themeKey, JSON.stringify(checked));
  };

  const handleLanguageChange = (): void => {
    if (language === "TR") {
      localStorage.setItem(languageKey, JSON.stringify("EN"));
      setLanguage("EN");
    } else if (language === "EN") {
      localStorage.setItem(languageKey, JSON.stringify("TR"));
      setLanguage("TR");
    }

    axios.get("https://reqres.in/api/workintech", {
     /* headers: {
        "x-api-key": "reqres-free-v1",
      },*/
    }).then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  };

  return (
    <section className="flex flex-row justify-end p-4 gap-3.5">
      <div className="flex flex-row items-center gap-2.5">
        <div className="relative inline-block w-14 h-6">
          <input
            onChange={handleThemeChange}
            checked={theme}
            id="switch-component"
            type="checkbox"
            className="peer appearance-none w-14 h-6 bg-custom-dark-gray rounded-full checked:bg-custom-purple cursor-pointer transition-colors duration-300"
          />
          <label
            htmlFor="switch-component"
            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full  shadow-sm  cursor-pointer ${transition} ${toggleCheckedLabelStyle}`}
          ></label>
          <label
            htmlFor="switch-component"
            className={`absolute top-1.5 left-2.5 w-3 h-3 bg-custom-dark-gray rounded-full  shadow-sm  cursor-pointer ${transition} ${toggleCheckedLabelStyle}   opacity-100  peer-checked:opacity-0 `}
          >
            {/*<span className="peer absolute  left-2 rounded-full bg-custom-dark-gray "></span>*/}
          </label>
        </div>
        <label htmlFor="switch-component" className={`${fontSetup}`}>
          DARKMODE {theme}
        </label>
      </div>
      <span className={`${fontSetup} content-center`}>|</span>
      <button onClick={handleLanguageChange} className={`${fontSetup}`}>
        <span className="text-custom-purple">TÜRKÇE</span>
        `YE GEÇ
      </button>
    </section>
  );
};

export default Header;
/**
    position: absolute;
    z-index: 1;
    width: 13px;
    height: 13px;
    left: 7px;



*/
