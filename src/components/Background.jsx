import React from "react";
import Foreground from "./Foreground";

function Background() {
  return (
    <div>
      <h1
        className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2
       text-[10vw] text-[#606060] font-extrabold m"
      >
        Docs.
      </h1>
      <p className="absolute bottom-[10%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#3d3d3d] r text-[10px]">
        created by atul-xt
      </p>
      <Foreground />
    </div>
  );
}

export default Background;
