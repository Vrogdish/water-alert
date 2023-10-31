// récupération de la liste des stations de mesures

import { StationDataType } from "@/types/StationDataType";
import { StationType } from "@/types/StationType";



export const getStations = async (code_departement: string) => {

  const url = "http://hubeau.eaufrance.fr/api/v1/niveaux_nappes/stations?" + new URLSearchParams({
    code_departement : code_departement,
    date_recherche : "2023-01-01"
  })

  let result: { data?: StationType[]; error?: any } = {}

  try {
    const jsonResponse = await fetch(url);
    const response = await jsonResponse.json();
    result.data = response.data as StationType[];

    return result;
  } catch (error: any) {
    result.error = error;
    console.log(error);

    return result;
  }
};

// récupération d'un station en fonction de son code BBS

export const getStationFromBbs = async (code_bss: string) => {

  const url = "http://hubeau.eaufrance.fr/api/v1/niveaux_nappes/stations?" + new URLSearchParams({
    code_bss : code_bss,
  }) 

  let result: {data?: StationType[]; error?: any } = {}

  try {
    const jsonResponse = await fetch(url,{
      method : "GET",
      headers : {
        "Accept" : "application/json"
      }
    });
    const response = await jsonResponse.json();
    result.data = response.data as StationType[];

    return result;
  } catch (error: any) {
    result.error = error;
    console.log(error);

    return result;
  }
};

// récupération des données relative à la station de mesure

export const getDataFromStation = async (code_bss: string, firstdate : string) => {


  const url = "http://hubeau.eaufrance.fr/api/v1/niveaux_nappes/chroniques?"+new URLSearchParams({
    code_bss : code_bss,
    date_debut_mesure : firstdate
  })

  let result: { data?: StationDataType[]; error?: any } = {}

  try {
    const jsonResponse = await fetch(url);
    const response = await jsonResponse.json();
    result.data = response.data as StationDataType[];
    console.log(response);
    return result;
  } catch (error) {
    result.error = error;
    console.log(error);

    return result;
  }
};
