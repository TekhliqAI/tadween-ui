import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const FeaturedCard = ({ imgUrl, title, text, imgRight = false }) => {
  return (
    <div className="flex  my-16 text-white gap-16 items-center">
      {!imgRight && <Image width={600} height={200} className="rounded-3xl" alt="sample img" src={imgUrl} />}
      <div className="flex flex-col gap-6">
        <h3 className={`${bebas.className} text-5xl`}>{title}</h3>
        <p className=" text-[#b4b4b4]">{text}</p>
        <div>
          <Button variant="secondary">Get Started</Button>
        </div>
      </div>
      {imgRight && <Image width={600} height={200} className="rounded-3xl" alt="sample img" src={imgUrl} />}
    </div>
  );
};

export default FeaturedCard;