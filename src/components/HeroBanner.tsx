import { useSelector } from "react-redux";
import Banner from "../assets/hero-banner.png";
import { localData } from "../assets/data";

const HeroBanner = () => {
  const theme = useSelector((state: any) => state.theme.theme);
  const language = useSelector((state: any) => state.language.language);
  const { name, title, description, buttons } = useSelector(
    (state: any) =>
      state.language?.languageData?.hero ||
      localData[language === "en" ? "en" : "tr"].hero,
  ); /*Right side of the || operator is there in case of api with the daily limited usage runs out of usage*/
  const { hire, github, linkedin } = buttons;

  return (
    <>
      <section className="hero-banner-section flex flex-row justify-between items-center mt-22 max-[769px]:flex-wrap-reverse  max-[769px]:mt-10">
        <div className="left-area flex flex-col gap-10 max-w-149 max-[769px]:max-w-none max-sm:gap-5">
          <div className="flex flex-row items-center gap-2.5">
            <hr
              className={`w-24 border  ${theme === "light" ? "border-indigo-800" : "border-custom-darkmode-pink"}`}
            />
            <span
              className={`font-inter font-medium text-xl leading-7 tracking-normal ${theme === "light" ? " text-indigo-700" : "text-custom-darkmode-pink"}`}
            >
              {name || " "}
            </span>
          </div>
          <div
            className={`font-inter font-bold text-7xl leading-18 tracking-normal max-[769px]:text-center max-sm:text-5xl max-sm:leading-13  ${theme === "light" ? " text-gray-800" : "text-[#AEBCCF]"}`}
          >
            {title || " "}
          </div>
          <p
            className={`font-inter font-normal text-lg leading-7 tracking-normal max-[769px]:text-center  ${theme === "light" ? " text-gray-500" : "text-white"}`}
          >
            {description || " "}
          </p>
          <div className="flex flex-row gap-3 max-[769px]:justify-center">
            <button
              className={`font-inter font-medium text-lg leading-7 tracking-normal  py-3 px-8 rounded-md  max-sm:py-2 max-sm:px-4 ${theme === "light" ? "text-white bg-indigo-800" : "text-black bg-[#E1E1FF]"}`}
            >
              {hire || " "}
            </button>
            <button
              className={`font-inter font-medium text-lg leading-7 tracking-normal py-3 px-8 border  rounded-md   max-sm:py-2 max-sm:px-4 ${theme === "light" ? "border-indigo-800  text-indigo-800  bg-white" : "bg-[#383838] text-[#E1E1FF] border-[#E1E1FF]"}`}
            >
              {github || " "}
            </button>
            <button  className={`font-inter font-medium text-lg leading-7 tracking-normal py-3 px-8 border  rounded-md   max-sm:py-2 max-sm:px-4 ${theme === "light" ? "border-indigo-800  text-indigo-800  bg-white" : "bg-[#383838] text-[#E1E1FF] border-[#E1E1FF]"}`}
            >{linkedin || " "}
            </button>
          </div>
        </div>
        <div className="right-area max-w-119  min-w-100 shadow-[0px_8px_28px_-6px_rgba(24,39,75,0.12)] overflow-hidden max-[769px]:max-w-none max-[769px]:min-w-auto">
          <img
            className="w-full h-auto rounded-[18px] shadow-[0px_18px_88px_-4px_rgba(24,39,75,0.14)] aspect-4/3"
            src={Banner}
          />
        </div>
      </section>
    </>
  );
};
export default HeroBanner;
