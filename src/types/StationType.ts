export interface StationType {
  altitude_station: string;
  bss_id: string;
  code_departement: string;
  codes_masse_eau_edl: string[];
  date_maj: string;
  libelle_pe: string;
  nb_mesures_piezo: number;
  nom_departement: string;
  noms_masse_eau_edl: string[];
  profondeur_investigation: number;
  urns_masse_eau_edl: string[];
  code_bss: string;
  urn_bss: string;
  date_debut_mesure: string;
  date_fin_mesure: string;
  code_commune_insee: string;
  nom_commune: string;
  x: number;
  y: number;
  codes_bdlisa: string;
  urns_bdlisa: string;
  geometry: {
    bbox: number[];
    coordinates: {
      additionalElements: number[];
      altitude: number;
      latitude: number;
      longitude: number;
    };
    crs: {
      properties: {};
      type: string;
    };
  };
}
