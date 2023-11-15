"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();
  const handleclick = () => {
    router.back();
  };

  return (
    <div className="text-center my-20">
      <p className="py-10 text-2xl">Erreur de chargement</p>
      <div
        className="cursor-pointer flex justify-center gap-6 items-center"
        onClick={handleclick}
      >
        <Image
          src={"/images/arrow.png"}
          alt="retour"
          width={30}
          height={30}
          className="rotate-180"
        />

        <p>Revenir en arrière</p>
      </div>
    </div>
  );
}
