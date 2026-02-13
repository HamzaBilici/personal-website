import { useSelector } from "react-redux";
import { localData } from "../assets/data";

const Skills = () => {
const theme = useSelector((state: any) => state.theme.theme);
  const language = useSelector((state: any) => state.language.language);
  const { title, list } = useSelector(
    (state: any) =>
      state.language?.languageData?.skills ||
      localData[language === "en" ? "en" : "tr"].skills,
  ); /*Right side of the || operator is there in case of api with the daily limited usage runs out of usage*/

  const skillsElements = list.map((item: any, index: any) => {
    return (
      <div key={index} className="max-w-75 flex flex-col gap-7">
        <header className={`font-inter font-medium text-3xl leading-7 tracking-normal ${theme==='light'?" text-indigo-700":"text-custom-darkmode-pink"}`}>
          {item.name || ""}
        </header>
        <p className={`font-inter font-normal text-xs leading-4 tracking-normal  ${theme==='light'?" text-gray-500":" text-white"}`}>
          {item.desc || ""}
        </p>
      </div>
    );
  });
  return (
    <>
      <section className="skills-section mt-31 flex flex-col gap-8">
        <h3 className={`font-inter font-semibold text-5xl leading-12 tracking-normal   ${theme==='light'?" text-[#1F2937]":" text-[#AEBCCF]"}`}>
          {title || ""}
        </h3>
        <div className="flex flex-row flex-wrap gap-30 max-xl:gap-9 max-[769px]:justify-center">
          {skillsElements}
        </div>
      </section>
    </>
  );
};
export default Skills;
