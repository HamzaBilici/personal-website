import { useSelector } from "react-redux";
import { localData } from "../assets/data";

const Footer = () => {
  const theme = useSelector((state: any) => state.theme.theme);
  const language = useSelector((state: any) => state.language.language);
  const { title, email, links } = useSelector(
    (state: any) =>
      state.language?.languageData?.footer ||
      localData[language === "en" ? "en" : "tr"].footer,
  ); /*Right side of the || operator is there in case of api with the daily limited usage runs out of usage*/

  return (
    <>
      <footer
        className={`${theme === "light" ? "bg-[#F9F9F9]" : "bg-black"}  w-full max-w-360 h-102.25 `}
      >
        <div className="max-w-6xl max-[769px]:max-w-95/100 w-full flex flex-col items-center justify-self-center gap-34.75 max-sm:gap-15">
          <div className="w-full  ">
            <h3
              className={`font-inter font-semibold text-[42px] leading-tight tracking-normal  max-w-127.5 mt-21.25  ${theme === "light" ? " text-[#1F2937]" : " text-[#AEBCCF]"}`}
            >
              {title || ""}
            </h3>
          </div>
          <div className="flex flex-row justify-between w-full max-sm:flex-wrap max-sm:justify-center max-sm:gap-3">
            <span>
              👉{" "}
              <span
                className={`underline ${theme === "light" ? " text-[#AF0C48]" : " text-custom-darkmode-pink"}`}
              >
                {email || ""}
              </span>
            </span>
            <div className="flex flex-row gap-5 ">
              <span
                className={`font-inter font-medium text-lg leading-normal tracking-tight   ${theme === "light" ? " text-[#0A0A14]" : " text-[#E1E1FF]"}`}
              >
                Personal Blog
              </span>

              <span
                className={`font-inter font-medium text-lg leading-normal tracking-tight   ${theme === "light" ? " text-[#00AB6B]" : " text-[#17D18B]"}`}
              >
                Github
              </span>
              <span
                className={`font-inter font-medium text-lg leading-normal tracking-tight   ${theme === "light" ? " text-[#0077B5]" : " text-[#0BA6F6]"}`}
              >
                Linkedin
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
