import { getStations } from "@/api/hubeauDatas";
import dynamic from "next/dynamic";
import React from "react";
const DynamicMap = dynamic(() => import("../../../components/map/Map"), {
  ssr: false,
});

export default async function page({
  params,
}: {
  params: { dpt_code: string };
}) {
  const dpt = params.dpt_code;
  const stationsList = await getStations(dpt);

  if (stationsList.data) {
    return (
      <div className="flex flex-col items-center md:mx-10">
        <h1 className="mx-6 mb-6">
          Liste des stations de mesures du département :{" "}
          {stationsList.data[0].nom_departement} ({dpt})
        </h1>
        <p className="mb-10">Nombre de stations : {stationsList.data.length}</p>
        <p className="mb-4 mx-6 text-sm">
          Cliquer sur une station pour voir les résultats d&apos;analyse
        </p>
        <DynamicMap stations={stationsList.data}  className="h-[500px] lg:h-[800px] w-full lg:w-3/4"/>
      </div>
    );
  }
}
