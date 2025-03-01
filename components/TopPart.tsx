/* eslint-disable @next/next/no-img-element */
"use client";
import { getImageById } from "@/utils/utils";

type TopPartProps = {
  bgColorClass: string;
  id: number;
};
export default function TopPart({
  id,
  bgColorClass = "from-gray-500 to-gray-300",
}: TopPartProps) {
  return (
    <div className={`inset-0 absolute w-full h-full ${bgColorClass}`}>
      <div
        className={`w-full h-full bg-gradient-to-r ${bgColorClass} opacity-80`}
      ></div>
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={getImageById(id)}
          alt={"pokemon"}
          className="object-cover w-full h-full opacity-20 blur-xl"
        />
      </div>
    </div>
  );
}
