import Loader from "@/components/loader/Loader";
import StationDatas from "@/modules/station-Datas/StationDatas";
import React, { Suspense } from "react";


export default function page({
  params,
}: {
  params: { code_bss: string };
}) {
  const bss = params.code_bss.replace("_", "/");

  return (
    <Suspense fallback = {<Loader/>}>
      <StationDatas bss={bss}/>
    </Suspense>
    
  )
}
