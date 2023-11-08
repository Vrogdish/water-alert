import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center bg-white bg-opacity-90 px-10">
      <nav className="text-center  py-4  text-black flex gap-10 ">
        <Link href={"/"}>Accueil</Link>
        <Link href={"/#about"}>A propos</Link>
      </nav>
      <Link href={"/#search"}>
      <Image
        src={"/images/loupe.png"}
        alt="rechercher"
        width={50}
        height={50}
        className="w-6 h-6"
      /></Link>
    </header>
  );
}
