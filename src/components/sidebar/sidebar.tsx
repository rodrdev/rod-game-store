import React from "react";
import { FiLinkedin, FiInstagram } from "react-icons/fi";
export const SideBar = () => {
  const categories = ["Indy", "Adventure", "MMO", "Casual game"];
  const plataforms = ["PC", "PlayStation", "Xbox", "Nintendo"];
  return (
    <nav>
      <div className="bg-grey-heavy opacity-75 p-5 rounded-lg ml-5 w-72 mt-8 ">
        <h1 className="text-[#fbfbfb] ml-5  ">Categories</h1>
        <div className="text-grey mt-2 text-md ml-5 ">
          {categories.map((categorie) => (
            <div key={categorie}>
              <input
                className="accent-yellow cursor-pointer text-white"
                type="checkbox"
              />
              <label className="ml-2 font-light" htmlFor="">
                {categorie}
              </label>
            </div>
          ))}
        </div>
        <h1 className="text-[#fbfbfb] ml-5 mt-10 ">Plataform</h1>
        <div className="text-grey mt-2 text-md ml-5 ">
          {plataforms.map((plataform) => (
            <div key={plataform}>
              <input className="accent-yellow cursor-pointer" type="checkbox" />
              <label className="ml-2 font-light" htmlFor="">
                {plataform}
              </label>
            </div>
          ))}
        </div>
        <button className="bg-yellow font-medium p-2 rounded-xl w-full  mt-10">
          Apply Filters
        </button>
      </div>
      <div className="flex flex-row ml-24">
        <div className="basis-4/4 m-4">
          <a href="https://www.linkedin.com/in/rodrdev/">
            <FiLinkedin className="text-grey text-2xl"></FiLinkedin>
          </a>
        </div>
        <div className="basis-4/4 m-4">
          <a href="https://www.instagram.com/rodrigo.dev1/">
            <FiInstagram className="text-grey text-2xl"></FiInstagram>
          </a>
        </div>
      </div>
    </nav>
  );
};
