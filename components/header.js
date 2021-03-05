import React from "react";
import PaddingWrapper from "./paddingWrapper";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-fullp">
      <PaddingWrapper>
        <h1> The Monkey Store</h1>
        <p> A place that'll return you to monke</p>
      </PaddingWrapper>
    </div>
  );
};

export default Header;
