// "use client";

// import useStationData from "@/hooks/useStationData";
// import React, { useState } from "react";
// import Table from "../table/Table";
// import RangeSelector from "../range-selector/RangeSelector";
// import dynamic from "next/dynamic";
// const DynamicChart = dynamic(() => import("../../components/charts/Charts"), {
//   ssr: false,
// });

// interface Props {
//   bss: string;
// }

// export default function StationData({ bss }: Props) {
//   const [range, setRange] = useState(1);

//   const { loading, stationDatas, errorData } = useStationData({ bss, range });

//   if (stationDatas && loading === false) {
//     return (
//       <div>
//         <Table dataStation={stationDatas} />
//         <h2 className="text-2xl text-center mb-6">
//           Historique des mesures effectuées
//         </h2>
//         <RangeSelector />
//         <DynamicChart stationData={stationDatas} />
//       </div>
//     );
//   }
// }
