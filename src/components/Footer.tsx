import { useSelector } from "react-redux";
import { localData } from "../assets/data";

const Footer = () => {


    const language = useSelector((state: any) => state.language.language);
    const {title,email,links} = useSelector((state: any) => state.language?.languageData?.footer || localData[language==='en'?'en':'tr'].footer);/*Right side of the || operator is there in case of api with the daily limited usage runs out of usage*/

  return (
    <>
      <footer className="bg-[#F9F9F9] w-full max-w-360 h-102.25">
        <div className="max-w-6xl w-full flex flex-col items-center justify-self-center gap-34.75">
          <div className="w-full  ">
            <h3 className="font-inter font-semibold text-[42px] leading-tight tracking-normal text-[#1F2937] max-w-127.5 mt-21.25">
              {title||''}
            </h3>
          </div>
          <div className="flex flex-row justify-between w-full">
            <span>
              👉 <span className="underline ">{email||''}</span>
            </span>
            <div className="flex flex-row gap-5">
              <span className="font-inter font-medium text-lg leading-normal tracking-tight text-[#0A0A14]">
                Personal Blog 
              </span>
              <span className="font-inter font-medium text-lg leading-normal tracking-tight text-[#00AB6B]">
                Github
              </span>
              <span className="font-inter font-medium text-lg leading-normal tracking-tight text-[#0077B5]">
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
