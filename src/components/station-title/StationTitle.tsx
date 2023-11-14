import { StationType } from "@/types/StationType";
import React from "react";

interface Props {
  station: StationType;
}

export default async function StationTitle({ station }: Props) {
  return (
    <div className="my-20">
      <h1 className=" px-6 md:text-3xl text-center mb-6">
        Résultats d&apos;analyse de la commune : {station.nom_commune} (
        {station.code_departement})
      </h1>
      <p className="text-center">{station.noms_masse_eau_edl}</p>
    </div>
  );
}
