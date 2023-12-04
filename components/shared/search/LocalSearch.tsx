"use client";
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";

type Props = {
  route: string;
  iconPosition: "left" | "right";
  imageSrc: string;
  placeholder: string;
  otherClasses: string;
};

const LocalSearch = ({
  route,
  iconPosition,
  imageSrc,
  placeholder,
  otherClasses,
}: Props) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      <Image
        src={imageSrc}
        alt="search icon"
        width={24}
        height={24}
        className={`cursor-pointer ${
          iconPosition === "left" ? "order-1" : "order-3"
        }`}
      />
      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder 
        background-light800_darkgradient order-2 border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearch;
