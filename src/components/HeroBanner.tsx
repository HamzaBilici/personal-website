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
      <section className="hero-banner-section flex flex-row justify-between items-center mt-22">
        <div className="left-area flex flex-col gap-10 max-w-149">
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
            className={`font-inter font-bold text-7xl leading-18 tracking-normal  ${theme === "light" ? " text-gray-800" : "text-[#AEBCCF]"}`}
          >
            {title || " "}
          </div>
          <p
            className={`font-inter font-normal text-lg leading-7 tracking-normal  ${theme === "light" ? " text-gray-500" : "text-white"}`}
          >
            {description || " "}
          </p>
          <div className="flex flex-row gap-3">
            <button
              className={`font-inter font-medium text-lg leading-7 tracking-normal  py-3 px-8 rounded-md  ${theme === "light" ? "text-white bg-indigo-800" : "text-black bg-[#E1E1FF]"}`}
            >
              {hire || " "}
            </button>
            <button
              className={`font-inter font-medium text-lg leading-7 tracking-normal py-3 px-8 border  rounded-md  ${theme === "light" ? "border-indigo-800  text-indigo-800  bg-white" : "bg-[#383838] text-[#E1E1FF] border-[#E1E1FF]"}`}
            >
              {github || " "}
            </button>
            <button  className={`font-inter font-medium text-lg leading-7 tracking-normal py-3 px-8 border  rounded-md  ${theme === "light" ? "border-indigo-800  text-indigo-800  bg-white" : "bg-[#383838] text-[#E1E1FF] border-[#E1E1FF]"}`}
            >{linkedin || " "}
            </button>
          </div>
        </div>
        <div className="right-area max-w-119 shadow-[0px_8px_28px_-6px_rgba(24,39,75,0.12)] overflow-hidden">
          <img
            className="w-auto h-93.75! rounded-[18px] shadow-[0px_18px_88px_-4px_rgba(24,39,75,0.14)] aspect-3/2"
            src={Banner}
          />
        </div>
      </section>
    </>
  );
};
export default HeroBanner;
