import { useSelector } from "react-redux";

const ProjectCard = (props: any) => {
const theme = useSelector((state: any) => state.theme.theme);
  const { title, desc, tags, links,image } = props?.item || "";
  return (
    <>
      <div className="max-w-75 flex flex-col gap-4.5 overflow-hidden">
        <header className={`font-inter font-medium text-3xl leading-7 tracking-normal flex flex-col gap-4.5 ${theme==='light'?" text-indigo-700":"text-[#CFCBFF]"}`}>
          <img
            src={`${image}`}
            alt=""
            className="self-center max-w-none w-fit h-45"
          />
          {title || ""}
        </header>
        <p className="h-26.25 overflow-hidden font-inter font-normal text-sm leading-tight tracking-normal text-gray-500">
          {desc}
        </p>
        <div className="flex flex-row flex-wrap gap-1.5">
          {tags.map((tag: string, index: any) => {
            return (
              <span
                key={index}
                className={`font-inter font-medium text-sm leading-none tracking-tighter items-center  py-1.5 px-4.5 border  rounded-sm ${theme==='light'?" text-[#3730A3] border-[#3730A3]":"text-[#8F88FF] border-[#8F88FF]"}`}
              >
                {tag}
              </span>
            );
          })}
        </div>
        <div className="flex flex-row justify-between">
          <a
            target="_blank"
            href={links.repo}
            className={`font-inter font-medium text-sm  leading-4 tracking-normal underline decoration-solid decoration-inherit  ${theme==='light'?" text-[#3730A3]":"text-[#E1E1FF]"}`}
          >
            Github link
          </a>
          <a
            target="_blank"
            href={links.view}
            className={`font-inter font-medium text-sm  leading-4 tracking-normal underline decoration-solid decoration-inherit  ${theme==='light'?" text-[#3730A3]":"text-[#E1E1FF]"}`}
          >
            live link
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
