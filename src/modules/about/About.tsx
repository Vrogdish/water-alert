import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="lg:mx-40 py-20 mx-auto">
      <div className="flex lg:gap-40 flex-col lg:flex-row-reverse items-center">
        <div>
          <div className="flex lg:flex-row-reverse flex-row items-center justify-between mb-6">
            <h2 className="text-2xl mx-10 md:mx-0 ">Plus de 42 millions de mesures</h2>
            <Image src={"/png/arrow.png"} alt="fleche" width={50} height={50} className="rotate-180 hidden lg:block" />
          </div>
          <Image
            src={"/images/office.jpg"}
            alt="Salle de réunion vide"
            width={600}
            height={600}
          />
        </div>
        <div className="w-2/3 lg:w-1/3 mt-20">
        <p >
        Ce site utilise les données de piézometrie disponible sur l&apos;API Hub&apos;Eau.
        Elle regroupe plus de 42 millions de mesures a travers toute la France.
        </p>
        <p>
            Pour plus d&apos;informations, consulter leur site à l adresse suivante :  <a href="https://hubeau.eaufrance.fr/" target="_blank" className="underline">https://hubeau.eaufrance.fr/</a>
        </p></div>
      </div>
    </div>
  );
}
