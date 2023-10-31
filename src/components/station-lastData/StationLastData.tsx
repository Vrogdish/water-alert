import { getDataFromStation } from '@/api/hubeauDatas'
import { StationDataType } from '@/types/StationDataType'
import React from 'react'

interface Props {
    lastData : StationDataType
}

export default async function StationLastData({lastData}: Props) {

  return (
    <div>
    <p className="text-center mb-6">
      Date de la derniere mesure : {lastData.date_mesure}
    </p>
    <table className="mx-auto mb-20">
      <tbody>
        <tr>
          <th>Profondeur de la nappe</th>
          <th>Niveau de la nappe</th>
          <th>Mode d&apos;optention de la mesure</th>
          <th>Status</th>
          <th>Qualification</th>
        </tr>
        <tr>
          <td>{lastData.profondeur_nappe}m</td>
          <td>{lastData.niveau_nappe_eau}m</td>
          <td>{lastData.mode_obtention}</td>
          <td>{lastData.statut}</td>
          <td>{lastData.qualification}</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}
