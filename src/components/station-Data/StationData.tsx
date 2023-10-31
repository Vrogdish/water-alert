"use client";

import React, { useState } from "react";
import StationChart from "../station-Chart/StationChart";

interface Props {
  bss: string;
}

export default function StationData({ bss }: Props) {
  const [range, setRange] = useState(1);
  const choiceStyle = "w-20 border text-center cursor-pointer"

  return (
    <div className="flex gap-6 justify-center my-10">
      <p>Periodes :</p>
      <div
        className={`${choiceStyle} ${
          range === 1 ? "text-black bg-white " : " text-white bg-transparent"
        }`}
        onClick={() => setRange(1)}
      >
        1 an
      </div>
      <div
        className={`${choiceStyle} ${
          range === 2 ? "text-black bg-white " : " text-white bg-transparent"
        }`}
        onClick={() => setRange(2)}
      >
        2 ans
      </div>
      <div
        className={`${choiceStyle} ${
          range === 3 ? "text-black bg-white " : " text-white bg-transparent"
        }`}
        onClick={() => setRange(3)}
      >
        3 ans
      </div>
      <StationChart bss={bss} range={range}/>
    </div>
  );
}
