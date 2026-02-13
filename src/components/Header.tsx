import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTextDataByLanguage } from "../store/actions/language-action";
import type { AppDispatch } from "../store/store";
import {
  changeLanguage,
  firstLandOnPageLanguage,
} from "../store/reducers/language-reducer";

import { localData } from "../assets/data";
import {
  changeTheme,
  firstLandOnPageTheme,
} from "../store/reducers/theme-reducer";

const toggleCheckedLabelStyle: string =
  "peer-checked:translate-x-8  peer-checked:bg-custom-yellow";

const transition: string = "transition-all duration-600";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    /**when user gets in page they get their default localstorage values */
    console.log("first land");
    dispatch(firstLandOnPageLanguage());
    dispatch(firstLandOnPageTheme());
  }, []);

  const theme = useSelector((state: any) => state.theme.theme);
  const language = useSelector((state: any) => state.language.language);
  const { skills, hireMe, projects } = useSelector(
    (state: any) =>
      state.language?.languageData?.nav ||
      localData[language === "en" ? "en" : "tr"].nav,
  ); /*Right side of the || operator is there in case of api with the daily limited usage runs out of usage*/

  useEffect(() => {
    /* const localLanguage = localStorage.getItem("language");
    console.log(localLanguage);*/
    dispatch(getTextDataByLanguage() as any);
  }, [language]);
  /*
  useEffect(() => {
    dispatch(getTextDataByLanguage() as any);
  }, [language]);
*/

  const handleThemeChange = () /*event: React.ChangeEvent<HTMLInputElement>,*/
  : void => {
    dispatch(changeTheme());
  };

  const handleLanguageChange = (): void => {
    dispatch(changeLanguage());

    /*  const payload = {
      name: "Camera",
      price: 199,
    };

    try {
      // 2. axios.post(url, data, config) yapısını kullanıyoruz
      axios
        .post("https://reqres.in/api/workintech", payload, {
          headers: { "x-api-key": "reqres_fdb427e28b7f424e81dc5a3b7f94b91f" },
        })
        .then((res) => console.log(res.data));
    } catch (error) {
      console.error("Veri çekilirken hata oluştu:", error);
    }*/
  };

  const handleSkills = (targetElementClass: string): void => {
    const element = document.querySelector(targetElementClass);
    const elementBounding = element?.getBoundingClientRect() || "";
    if (elementBounding instanceof DOMRect) {
      console.log(elementBounding.top);

      window.scroll({
        top: elementBounding.top,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="top-controll-section flex flex-row justify-end p-4 gap-3.5">
        <div className="flex flex-row items-center gap-2.5">
          <div className="relative inline-block w-14 h-6">
            <input
              onChange={handleThemeChange}
              checked={theme === "light"}
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
          <label
            htmlFor="switch-component"
            className={`w-28 text-right font-inter font-bold text-base leading-none tracking-wider   ${theme === "light" ? " text-custom-gray" : "text-[#D9D9D9]"}`}
          >
            {theme === "light" ? "DARK" : "LIGHT"} MODE
          </label>
        </div>
        <span
          className={`content-center font-inter font-bold text-base leading-none tracking-wider   ${theme === "light" ? " text-custom-gray" : "text-[#D9D9D9]"}`}
        >
          |
        </span>
        <button
          onClick={handleLanguageChange}
          className={`font-inter font-bold text-base leading-none tracking-wider   ${theme === "light" ? " text-custom-gray" : "text-[#D9D9D9]"}`}
        >
          {language === "tr" ? "SWITCH TO " : ""}
          <span
            className={`${theme === "light" ? " text-custom-purple" : "text-custom-darkmode-pink"}`}
          >
            {language === "en" ? "TÜRKÇE" : "ENGLISH"}
          </span>
          {language === "en" ? "`YE GEÇ" : ""}
        </button>
      </section>

      <section className="bottom-nav-section flex flex-row justify-between gap-3.5">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img src="https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg" />
        </div>
        <div className="flex flex-row items-center gap-20">
          <button
            onClick={() => handleSkills(".skills-section")}
            className="font-inter font-medium text-lg leading-7 tracking-normal text-gray-500"
          >
            {skills || " "}
          </button>
          <button
            onClick={() => handleSkills(".projects-section")}
            className="font-inter font-medium text-lg leading-7 tracking-normal text-gray-500"
          >
            {projects || " "}
          </button>
          <button
            onClick={() => handleSkills("footer")}
            className="font-inter font-medium text-lg leading-7 tracking-normal text-indigo-800 bg-white border rounded-md py-3 px-8 -ml-5"
          >
            {hireMe || " "}
          </button>
        </div>
      </section>
    </>
  );
};

export default Header;
/**
font-family: Inter;
font-weight: 500;
font-size: 18px;
leading-trim: NONE;
line-height: 28px;
letter-spacing: 0%;




*/
