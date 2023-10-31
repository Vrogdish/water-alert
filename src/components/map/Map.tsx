"use client";

import { LatLngExpression } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import MarkerIcon from "@/assets/png/cercle-vert.png";
import { StationType } from "@/types/StationType";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "../buttons/Button";

interface Props {
  stations: StationType[];
  className? : string
}


export default function Map({ stations,className }: Props) {
  
  const position: LatLngExpression = [stations[0].y, stations[0].x];
  const router = useRouter()

  const handleClick = (bss : string)=>{
   ;
    const urlParams = bss.replace("/","_")
   
    router.push("/datas/" + urlParams)
  }

  return (
    <MapContainer
      center={position}
      zoom={9}
      scrollWheelZoom={true}
      className={className}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stations.map((station, index) => (
        <Marker
          key={index}
          position={[station.y, station.x]}
          icon={
            new L.Icon({
              iconUrl: MarkerIcon.src,
              className: "w-6 h-6",
            })
          }
        >
          <Popup >
            <h3>Commune : {station.nom_commune}</h3>
            <p>Dernière mise à jour :{station.date_maj}</p>
            <p>Descritpion : {station.noms_masse_eau_edl}</p>
            <Button size="small" action={()=>handleClick(station.code_bss)}>
              Voir les résultats
            </Button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
