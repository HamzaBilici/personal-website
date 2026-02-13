import { useSelector } from "react-redux";
import ProjectCard from "./ProjectCard.tsx";
import { localData } from "../assets/data.ts";

const Projects = () => {
const theme = useSelector((state: any) => state.theme.theme);
  const language = useSelector((state: any) => state.language.language);
  const { title, list } = useSelector(
    (state: any) =>
      state.language?.languageData?.projects ||
      localData[language === "en" ? "en" : "tr"].projects,
  ); /*Right side of the || operator is there in case of api with the daily limited usage runs out of usage*/

  const ProjectCardsList = list.map((item: any, index: any) => {
    return <ProjectCard item={item} key={index} />;
  });

  return (
    <>
      <section className="profile-section mt-10.5 flex flex-col gap-9.5 border-t border-[#BAB2E7] mb-34.75">
           <h3 className={`font-inter font-semibold text-5xl leading-12 tracking-normal mt-9.5  ${theme==='light'?" text-[#1F2937]":" text-[#AEBCCF]"}`}>
          {title || ""}
        </h3>
        <div className="flex flex-row flex-wrap gap-29.5">
          {ProjectCardsList}
        </div>
      </section>
    </>
  );
};
export default Projects;
