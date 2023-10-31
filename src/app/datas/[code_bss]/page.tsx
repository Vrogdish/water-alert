import { getDataFromStation, getStationFromBbs, getStations } from "@/api/hubeauDatas";
import RangeSelector from "@/components/range-selector/RangeSelector";
import StationTitle from "@/components/station-title/StationTitle";
import Table from "@/components/table/Table";
import { getFirstDate } from "@/utils/date";
import dynamic from "next/dynamic";
import React from "react";
const DynamicChart = dynamic(() => import("../../../components/charts/Charts"), {
  ssr: false,
});

export default async function page({
  params,
}: {
  params: { code_bss: string };
}) {

  const bss = params.code_bss.replace("_", "/");
  const firstdate = getFirstDate(3)
  
  const station = await getStationFromBbs(bss)
  const dataStation = await getDataFromStation(bss, firstdate)


  console.log(firstdate);
 
  if (station.data && dataStation.data) {
    return (
      <div>
        <StationTitle station={station.data[0]}/>
        <Table dataStation={dataStation.data} />
        <h2 className="text-2xl text-center mb-6">
          Historique des mesures effectuées
        </h2>
        <RangeSelector />
        <DynamicChart stationData={dataStation.data} />
      </div>
    );
}
}
