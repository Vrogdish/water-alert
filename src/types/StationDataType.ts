export interface StationDataType {
  code_continuite: string;
  code_nature_mesure: string;
  code_producteur: string;
  nom_continuite: string;
  nom_nature_mesure: string;
  nom_producteur: string;
  profondeur_nappe: number;
  code_bss: string;
  urn_bss: string;
  date_mesure: string;
  timestamp_mesure: number;
  niveau_nappe_eau: number;
  mode_obtention: string;
  statut: string;
  qualification: string;
}
