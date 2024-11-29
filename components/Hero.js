import React from "react";
import { Fugaz_One } from "next/font/google";
import Calendar from "./Calendar";
import CallToAction from "./CallToAction";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  return (
    <div className="py-4 md:py-10 flex flex-col gap-8 sm:gap-10">
      <h1
        className={
          "text-5xl sm:text-6xl md:text-7xl text-center " + fugaz.className
        }
      >
        <span className="textGradient">VibeCheck</span> helps you track your{" "}
        <span className="textGradient">daily</span> Mood!
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]">
        Log your mood and see how you feel{" "}
        <span className="font-semibold textGradient"> year round</span>
      </p>
      <CallToAction />
      <Calendar demo />
    </div>
  );
}
