import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector, type UseDispatch } from "react-redux";
import { changeLanguage, changeTheme } from "../store/actions/headerAction";

const toggleCheckedLabelStyle: string =
  "peer-checked:translate-x-8  peer-checked:bg-custom-yellow";

const fontSetup: string =
  "font-inter font-bold text-base leading-none tracking-wider text-custom-gray";

const transition: string = "transition-all duration-600";

const Header = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: any) => state.header.language);
  const theme = useSelector((state: any) => state.header.theme);

  const handleThemeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    dispatch(changeTheme());
  };

  const handleLanguageChange = (): void => {
    dispatch(changeLanguage());

    const payload = {
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
    }
  };

  return (
    <section className="flex flex-row justify-end p-4 gap-3.5">
      <div className="flex flex-row items-center gap-2.5">
        <div className="relative inline-block w-14 h-6">
          <input
            onChange={handleThemeChange}
            checked={theme === "LIGHT"}
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
          {theme === "LIGHT" ? "DARK" : "LIGHT"} MODE
        </label>
      </div>
      <span className={`${fontSetup} content-center`}>|</span>
      <button onClick={handleLanguageChange} className={`${fontSetup}`}>
        <span className="text-custom-purple">{language}</span>
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
