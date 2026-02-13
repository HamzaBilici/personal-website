import { useSelector } from "react-redux";
import { localData } from "../assets/data";

const Profile = () => {
const theme = useSelector((state: any) => state.theme.theme);
  const language = useSelector((state: any) => state.language.language);
  const { title, basicInfo } = useSelector(
    (state: any) =>
      state.language?.languageData?.profile ||
      localData[language === "en" ? "en" : "tr"].profile,
  ); /*Right side of the || operator is there in case of api with the daily limited usage runs out of usage*/

  const infoTitleList = basicInfo.info.map((item: any, index: any) => {
    return (
      <li
        key={index}
        className={`font-inter font-semibold text-[18px] leading-loose tracking-widest  block ${theme==='light'?"text-black":"text-white"}`}      >
        <span className="after:content-['\00a0']">
        {item.label|| ''}</span>
      </li>
    );
  });

    const infoValueList = basicInfo.info.map((item: any, index: any) => {
    return (
      <li
        key={index}
        className={`font-inter font-normal text-[18px] leading-loose tracking-widest  block ${theme==='light'?"text-black":"text-white"}`}      >
        <span className="after:content-['\00a0']">
        {item.value|| ''}</span>
      </li>
    );
  });


  return (
    <>
      <section className="profile-section mt-10.5 flex flex-col gap-9.5 border-t border-[#BAB2E7]">
           <h3 className={`font-inter font-semibold text-5xl leading-12 tracking-normal mt-9.5  ${theme==='light'?" text-[#1F2937]":" text-[#AEBCCF]"}`}>
          
          {title || ""}
        </h3>
        <div className="flex flex-row flex-wrap gap-14  ">
          <div className="flex flex-col gap-5">
            <header className={`font-inter font-medium text-3xl leading-7 tracking-normal   ${theme==='light'?" text-indigo-700":"text-custom-darkmode-pink"}`}>
              {basicInfo.title || ""}
            </header>
            <div className="flex flex-row flex-nowrap gap-6">
              <ul>
{infoTitleList}
              </ul>

              <ul>
{infoValueList}
              </ul>
            </div>
            <div></div>
          </div>
          <div className="max-w-139.5">
            <header className={`font-inter font-medium text-3xl leading-7 tracking-normal   ${theme==='light'?" text-indigo-700":"text-custom-darkmode-pink"}`}>
              About Me
            </header>
            <p className={`font-inter font-normal tex-lg leading-normal tracking-normal  mt-4  ${theme==='light'?"text-gray-500":"text-white"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia. Mnima
              accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Profile;
