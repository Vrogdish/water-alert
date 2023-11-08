import { getStations } from "@/api/hubeauDatas";
import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Return from "@/components/return/Return";
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
      <div>
        <Return redirection="/#search">
          <p>Choisir un autre département</p>
        </Return>
        <div className="flex flex-col items-center md:mx-10 md:my-20">
          <h1 className="mx-6 my-6 md:text-2xl">
            Liste des stations de mesures du département :{" "}
            {stationsList.data[0].nom_departement} ({dpt})
          </h1>
          <p className="mb-20 md:text-xl">
            Nombre de stations : {stationsList.data.length}
          </p>
          <p className="mb-4 mx-6">
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
