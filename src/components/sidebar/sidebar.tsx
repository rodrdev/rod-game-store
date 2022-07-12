import React from "react";

export const SideBar = () => {
  const categories = ["Indy", "Adventure", "MMO", "Casual game"];
  const plataforms = ["PC", "PlayStation", "Xbox", "Nintendo"];
  return (
    <nav>
      <div className="bg-grey-heavy opacity-75 p-5 rounded-lg ml-5 w-72 mt-8 ">
        <h1 className="text-white ml-5  ">Categories</h1>
        <div className="text-grey mt-2 text-md ml-5 ">
          {categories.map((categorie) => (
            <div key={categorie}>
              <input type="checkbox" />
              <label className="ml-2 font-light" htmlFor="">
                {categorie}
              </label>
            </div>
          ))}
        </div>
        <h1 className="text-white ml-5 mt-10 ">Plataform</h1>
        <div className="text-grey mt-2 text-md ml-5 ">
          {plataforms.map((plataform) => (
            <div key={plataform}>
              <input type="checkbox" />
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
    </nav>
  );
};
