const ProjectCard = (props: any) => {
  const { title, desc, tags, links } = props?.item || "";
  return (
    <>
      <div className="max-w-75 flex flex-col gap-4.5">
        <header className="font-inter font-medium text-3xl leading-7 tracking-normal text-indigo-700 flex flex-col gap-4.5">
          <img
            src="https://i.sstatic.net/y9DpT.jpg"
            alt=""
            className="self-center max-w-none w-fit h-45"
          />
          {title || ""}
        </header>
        <p className="font-inter font-normal text-sm leading-tight tracking-normal text-gray-500">
          {desc}
        </p>
        <div className="flex flex-row flex-wrap gap-1.5">
          {tags.map((tag: string, index: any) => {
            return (
              <span
                key={index}
                className="font-inter font-medium text-sm leading-none tracking-tighter items-center text-[#3730A3] py-1.5 px-4.5 border border-[#3730A3] rounded-sm"
              >
                {tag}
              </span>
            );
          })}
        </div>
        <div className="flex flex-row justify-between">
          <a
            target="_blank"
            href="#"
            className="font-inter font-medium text-sm text-[#3730A3] leading-4 tracking-normal underline decoration-solid decoration-inherit"
          >
            {links.repo}
          </a>
          <a
            target="_blank"
            href="#"
            className="font-inter font-medium text-sm text-[#3730A3] leading-4 tracking-normal underline decoration-solid decoration-inherit"
          >
            {links.view}
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
