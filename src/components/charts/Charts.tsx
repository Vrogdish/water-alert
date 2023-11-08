"use client"

import { StationDataType } from "@/types/StationDataType";
import React, { useEffect, useState } from "react";
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";

interface Props {
  stationData: StationDataType[];

  className?: string;
}

interface ChartsDataType {
  date: string;
  niveau: number;
}

export default function Charts({ stationData, className }: Props) {
    const [chartData , setChartData]= useState<ChartsDataType[]>([])

  useEffect(() => {
    const data: ChartsDataType[] = [];
    stationData.map((item) => {
      data.push({ date: item.date_mesure, niveau: item.profondeur_nappe });
    });
    setChartData(data)
  }, [stationData]);

  return (
    <div className={` ${className} text-black overflow-x-scroll md:mx-20`}>
      <AreaChart
        className="mx-auto"
        width={1440}
        height={300}
        data={chartData}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area type="linear" dataKey="niveau" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
}
