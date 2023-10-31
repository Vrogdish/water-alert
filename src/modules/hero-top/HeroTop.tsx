import Typography from "@/design/typography/Typography";
import React from "react";
import Image from "next/image";

export default function HeroTop() {
  return (
    <div>
      <Typography variant="h1" component="h1" className="mx-6 text-center md:text-left md:w-2/3 md:mx-20 md:my-10 lg:my-20">
        Surveillance des niveaux de nappes d&apos;eau souterraine en France
      </Typography>
      <Typography variant="h3" component="div" className="flex gap-4 items-center justify-end mx-20 py-20 ">
        <p className="pb-3">Données collectées via :</p>
        <Image
          src={"/icons/logo-hubeau-blue.svg"}
          alt="logo Hubeau"
          width={150}
          height={60}
        />
      </Typography>
    </div>
  );
}
