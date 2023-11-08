// "use client";

// import { getDataFromStation } from "@/api/hubeauDatas";
// import { StationDataType } from "@/types/StationDataType";
// import { getFirstDate } from "@/utils/date";
// import React, { useEffect, useState } from "react";

// interface Props {
//     bss : string
//     range : number
// }

// export default function useStationData({bss,range}:Props) {
//   const [loading, setLoading] = useState(true);
//   const [stationDatas, setStationDatas] = useState<StationDataType[]>();
//   const [errorData, setErrorData] = useState<any>();

//   useEffect(() => {
//     const getStationData = async (bss: string, range: number) => {
//       setLoading(true);
//       const firstdate = await getFirstDate(range);
//       const stationDatas = await getDataFromStation(bss, firstdate);
//       if (stationDatas.data) {
//         setStationDatas(stationDatas.data);
//       } else {
//         setErrorData(stationDatas.error);
//       }
//       setLoading(false);
//     };

//     getStationData(bss,range)
//   }, [bss, range]);

//   return {loading, stationDatas, errorData};
// }
