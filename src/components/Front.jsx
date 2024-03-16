import React, { useRef, useState } from "react";
import Card from "./Card";

function Front() {
    const ref = useRef(null)
  const data = [
    {
      desc: "This is the description in two line of this card in particular.",
      filesize: "0.7mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now" , tagColor: "green" },
    },
    {
      desc: "This is the description in two line of this card in particular.",
      filesize: "0.7mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now" , tagColor: "blue" },
    },
    {
      desc: "This is the description in two line of this card in particular.",
      filesize: "0.7mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now" , tagColor: "green" },
    },
  ];
  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
        ))}
      </div>
    </>
  );
}

export default Front;
