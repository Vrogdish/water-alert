// import { getDataFromStation } from "@/api/hubeauDatas";
// import { getFirstDate } from "@/utils/date";
// import dynamic from "next/dynamic";
// import React from "react";
// import Map from "../map/Map";
// const DynamicChart = dynamic(() => import("../../components/charts/Charts"), {
//   ssr: false,
// });

// interface Props {
//   bss: string;
//   range: number;
//   className?: string;
// }

// interface ChartsDataType {
//   date: string;
//   niveau: number;
// }

// export default async function StationChart({ bss, range, className }: Props) {
//   const firstDate = getFirstDate(range);
//   const dataStation = await getDataFromStation(bss, firstDate);

//   const data: ChartsDataType[] = [];

//   dataStation.data &&
//     dataStation.data.map((item) => {
//       data.push({ date: item.date_mesure, niveau: item.profondeur_nappe });
//     });

//   console.log(dataStation);

//   if(dataStation.data)
//   return (
//     <div className={` ${className} text-black`}>
//       <DynamicChart stationData={dataStation.data} />
//     </div>
//   );
// }
