import StationDatas from "@/modules/station-Datas/StationDatas";
import React, { Suspense } from "react";


export default function page({
  params,
}: {
  params: { code_bss: string };
}) {
  const bss = params.code_bss.replace("_", "/");

  return (
    <Suspense fallback = {<p className="text-3xl text-center h-96 py-20">Récupération des données en cours ...</p>}>
      <StationDatas bss={bss}/>
    </Suspense>
    
  )
}
