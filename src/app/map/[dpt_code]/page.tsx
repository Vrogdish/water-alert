import React from "react";
import Return from "@/components/return/Return";
import StationsList from "@/modules/stations-List/StationsList";

import { Suspense } from "react";

export default function page({ params }: { params: { dpt_code: string } }) {
  const dpt = params.dpt_code;

  return (
    <div>
      <Return redirection="/#search">
        <p>Choisir un autre département</p>
      </Return>

      <Suspense
        fallback={
          <p className="text-3xl text-center h-96 py-20">Chargement en cours...</p>
        }
      >
        <StationsList dpt={dpt} />
      </Suspense>
    </div>
  );
}

