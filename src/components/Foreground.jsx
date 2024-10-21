import React, { useRef } from "react";
import Card from "./Card";
const Foreground = () => {

  const ref=useRef(null);

  const data = [
    {
      desc: "This is the bg color of the card that will be displayed",
      filesize: ".9mb",
      close: false,
      tag: { isopen: true, tagtitle: "Download Now", tagcolor: "green" },
    },
    {
      desc: "This is the bg color of the card that will be displayed",
      filesize: ".9mb",
      close: false,
      tag: { isopen: true, tagtitle: "Upload Now", tagcolor: "blue" },
    },
    {
      desc: "This is the bg color of the card that will be displayed",
      filesize: ".9mb",
      close: false,
      tag: { isopen: true, tagtitle: "Download Now", tagcolor: "green" },
    }
  ];

  return (
    <div ref={ref} className="fixed h-full flex gap-10 flex-wrap w-full top-0 left-0 z-[3] p-5">
      {data.map((item,index)=>(
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
