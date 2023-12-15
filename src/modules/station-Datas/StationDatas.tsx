import { getDataFromStation, getStationFromBbs } from "@/api/hubeauDatas";
import Return from "@/components/return/Return";
import StationTitle from "@/components/station-title/StationTitle";
import Table from "@/components/table/Table";
import { getFirstDate } from "@/utils/date";
import dynamic from "next/dynamic";
import React from "react";
import ErrorPage from "../error/ErrorPage";

const DynamicChart = dynamic(() => import("../../components/charts/Charts"), {
  ssr: false,
});

interface Props {
  bss: string;
}

export default async function StationDatas({ bss }: Props) {
  const beginingDate = getFirstDate(3);

  const station = await getStationFromBbs(bss);
  const dataStation = await getDataFromStation(bss, beginingDate);

  if (
    station.data &&
    station.data.length != 0 &&
    dataStation.data &&
    dataStation.data.length != 0
  ) {
    return (
      <div className="mb-32">
        <Return redirection={"/map/" + station.data[0].code_departement}>
          <p>Choisir une autre station</p>
        </Return>
        <div>
          <StationTitle station={station.data[0]} />
          <Table dataStation={dataStation.data} />
          <h2 className="md:text-2xl text-center mb-6">
            Historique des mesures effectuées sur 3 ans
          </h2>
          {/* <RangeSelector /> */}
          <DynamicChart stationData={dataStation.data} />
        </div>
      </div>
    );
  } else {
    return <ErrorPage />;
  }
}
