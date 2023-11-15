import React from "react";
import Return from "@/components/return/Return";
import StationsList from "@/modules/stations-List/StationsList";

import { Suspense } from "react";
import Loader from "@/components/loader/Loader";

export default function page({ params }: { params: { dpt_code: string } }) {
  const dpt = params.dpt_code;

  return (
    <div>
      <Return redirection="/#search">
        <p>Choisir un autre département</p>
      </Return>

      <Suspense fallback={<Loader />}>
        <StationsList dpt={dpt} />
      </Suspense>
    </div>
  );
}
