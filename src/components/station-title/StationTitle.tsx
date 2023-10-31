import { StationType } from "@/types/StationType";
import React from "react";

interface Props {
  station :StationType
}

export default async function StationTitle({ station }: Props) {

  
    return (
      <h1 className="my-20 text-3xl text-center">
        Résultats d&apos;analyse de la commune : {station.nom_commune} (
        {station.code_departement})
      </h1>
    );
  }

