// import React from "react";
// import dynamic from "next/dynamic";
// import { getStations } from "@/api/hubeauDatas";
// const MyMap = dynamic(() => import("../../components/map/Map"), {
//   ssr: false,
// });

// export default async function StationMap() {
//   const stationsList = await getStations("34");

//   if (stationsList.data) {
//     return (
//       <div>
//         <MyMap stations={stationsList.data} />
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         Error
//       </div>
//     )
//   }
// }
