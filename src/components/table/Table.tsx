"use client";

import { StationDataType } from "@/types/StationDataType";
import React, { useEffect, useState } from "react";

interface Props {
  dataStation: StationDataType[];
}

export default function Table({ dataStation }: Props) {
  const [lastData, setLastData] = useState<StationDataType>();

  useEffect(() => {
    const data = dataStation[dataStation.length - 1];
    setLastData(data);
  }, [dataStation]);

  return (
    <div className="px-2">
      <p className="text-center mb-6 ">
        Date de la derniere mesure : {lastData?.date_mesure}
      </p>
      <table className=" mx-auto  mb-20">
        <tbody className="hidden md:block">
          <tr>
            <th>Profondeur de la nappe</th>
            <th>Niveau de la nappe</th>
            <th>Mode d&apos;optention de la mesure</th>
            <th>Status</th>
            <th>Qualification</th>
          </tr>
          <tr>
            <td>{lastData?.profondeur_nappe}m</td>
            <td>{lastData?.niveau_nappe_eau}m</td>
            <td>{lastData?.mode_obtention}</td>
            <td>{lastData?.statut}</td>
            <td>{lastData?.qualification}</td>
          </tr>
        </tbody>
        <tbody className="md:hidden">
          <tr>
            <th>Profondeur de la nappe</th>
            <td>{lastData?.profondeur_nappe}m</td>
          </tr>
          <tr>
            <th>Niveau de la nappe</th>
            <td>{lastData?.niveau_nappe_eau}m</td>
          </tr>
          <tr>
            <th>Mode d&apos;optention de la mesure</th>
            <td>{lastData?.mode_obtention}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>{lastData?.statut}</td>
          </tr>
          <tr>
            <th>Qualification</th>
            <td>{lastData?.qualification}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
