import { useSelector } from "react-redux";
import { localData } from "../assets/data";

const Profile = () => {
  const theme = useSelector((state: any) => state.theme.theme);
  const language = useSelector((state: any) => state.language.language);
  const { title, basicInfo,aboutMe } = useSelector(
    (state: any) =>
      state.language?.languageData?.profile ||
      localData[language === "en" ? "en" : "tr"].profile,
  ); /*Right side of the || operator is there in case of api with the daily limited usage runs out of usage*/

  const infoTitleList = basicInfo.info.map((item: any, index: any) => {
    return (
      <li
        key={index}
        className={`font-inter font-semibold text-[18px] leading-loose tracking-widest  block ${theme === "light" ? "text-black" : "text-white"}`}
      >
        <span className="after:content-['\00a0']">{item.label || ""}</span>
      </li>
    );
  });

  const infoValueList = basicInfo.info.map((item: any, index: any) => {
    return (
      <li
        key={index}
        className={`font-inter font-normal text-[18px] leading-loose  tracking-widest  block ${theme === "light" ? "text-black" : "text-white"}`}
      >
        <span className="after:content-['\00a0']">{item.value || ""}</span>
      </li>
    );
  });

  return (
    <>
      <section className="profile-section mt-10.5 flex flex-col gap-9.5 border-t border-[#BAB2E7]">
        <h3
          className={`font-inter font-semibold text-5xl leading-12 tracking-normal mt-9.5  ${theme === "light" ? " text-[#1F2937]" : " text-[#AEBCCF]"}`}
        >
          {title || ""}
        </h3>
        <div className="flex flex-row flex-nowrap gap-14  max-[769px]:flex-wrap max-[769px]:w-full">
          <div className="flex flex-col gap-5 max-[769px]:w-full">
            <header
              className={`font-inter font-medium text-3xl leading-7 tracking-normal   ${theme === "light" ? " text-indigo-700" : "text-custom-darkmode-pink"}`}
            >
              {basicInfo.title || ""}
            </header>
            <div className="flex flex-row flex-nowrap gap-6 min-w-38.75 max-[769px]:max-w-full max-[769px]:justify-center">
              <ul className="min-w-40">{infoTitleList}</ul>

              <ul className=" truncate">{infoValueList}</ul>
            </div>
          </div>
          <div className="max-w-139.5 max-[769px]:max-w-none">
            <header
              className={`font-inter font-medium text-3xl leading-7 tracking-normal   ${theme === "light" ? " text-indigo-700" : "text-custom-darkmode-pink"}`}
            >
              {aboutMe.title}
            </header>
            <p
              className={`font-inter font-normal tex-lg leading-normal tracking-normal  mt-4  max-[769px]:text-center ${theme === "light" ? "text-gray-500" : "text-white"}`}
            >
              {aboutMe.p1} {aboutMe.p2}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Profile;
