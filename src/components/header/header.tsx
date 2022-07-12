import React from "react";

export const Header = () => {
  return (
    <>
      <header>
        <div className="flex flex-row mt-2 ml-2">
          <div className="basis-4/4 cursor-pointer hover:text-yellow  text-grey m-2">
            Home
          </div>
          <div className="basis-4/4 hover:text-yellow text-grey m-2">
            Streams
          </div>
          <div className="basis-4/4 hover:text-yellow text-grey m-2">
            Game Store
          </div>
          <div className="basis-4/4 hover:text-yellow text-grey m-2">News</div>
        </div>
      </header>
    </>
  );
};
