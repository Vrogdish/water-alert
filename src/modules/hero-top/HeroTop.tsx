import Typography from "@/design/typography/Typography";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroTop() {
  return (
    <div className="relative ">
      <div className="">
        <Typography
          variant="h1"
          component="h1"
          className="mx-6 text-center md:text-left md:w-2/3 md:mx-20 my-10 lg:mb-32 lg:mt-60"
        >
          Surveillance des niveaux de nappes d&apos;eau souterraine en France
        </Typography>
        <Typography
          variant="h3"
          component="div"
          className="flex gap-4 items-center justify-end mx-20 py-20 "
        >
          <p className="pb-3">Données collectées via :</p>
          <Link href={"https://hubeau.eaufrance.fr/"} target="_blank">
          <Image
            src={"/icons/logo-hubeau-blue.svg"}
            alt="logo Hubeau"
            width={150}
            height={60}
          /></Link>
        </Typography>
      </div>
    </div>
  );
}
