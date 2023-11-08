import SearchBar from "@/components/search-bar/SearchBar";
import React from "react";
import Image from "next/image";

export default function Search() {
  return (
    <div className="mx-auto lg:mx-40 py-20 " id="search">
      <div className="flex flex-col items-center lg:flex-row lg:gap-40 ">
        <div>
          <div className="flex items-center gap-10 lg:justify-between mb-6">
            <h2 className="text-2xl mx-10 md:mx-0">Accedez aux données partout en France</h2>
            <Image src={"/png/arrow.png"} alt="fleche" width={50} height={50} className="hidden lg:block" />
          </div>
          <Image
            src={"/images/data-min.jpg"}
            alt="graphique sur un écran d'ordinateur portable"
            width={600}
            height={600}
          />
        </div>
        <SearchBar className="mt-20" />
      </div>
    </div>
  );
}
