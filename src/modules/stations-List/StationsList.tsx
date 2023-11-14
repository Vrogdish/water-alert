import { getStations } from "@/api/hubeauDatas";
import dynamic from "next/dynamic";
import React from "react";
const DynamicMap = dynamic(() => import("../../components/map/Map"), {
    ssr: false,
  });

interface Props {
  dpt: string;
}

export default async function StationsList({ dpt }: Props) {
  const stationsList = await getStations(dpt);

  if (stationsList.data) {
    return (
      <div>
        <div className="flex flex-col items-center md:mx-10 my-10 md:my-20">
          <h1 className="mx-2 md:mx-6 my-6 md:text-2xl text-center">
            Liste des stations de mesures du département{" "}
            {stationsList.data[0].nom_departement} ({dpt})
          </h1>
          <p className="mb-20 md:text-xl">
            Nombre de stations : {stationsList.data.length}
          </p>
          <p className="mb-4 mx-2 md:mx-6 text-sm">
            Cliquer sur une station pour voir les résultats d&apos;analyse
          </p>
          <DynamicMap
            stations={stationsList.data}
            className="h-[500px] lg:h-[800px] w-full lg:w-3/4 "
          />
        </div>
      </div>
    );
  }
}
