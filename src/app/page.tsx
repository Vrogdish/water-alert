import About from "@/modules/about/About";
import HeroTop from "@/modules/hero-top/HeroTop";
import Search from "@/modules/search/Search";
import Image from "next/image";

export default function Home() {
  return (
    <main className="shadow-xl pb-20">
      <div className="absolute top-0 -z-10 h-[800px] overflow-hidden ">
        <Image
          src={"/images/mountains.jpg"}
          alt=""
          width={1980}
          height={1000}
          className="saturate-50 h-full object-cover "
        />
        <div className="bg-gradient-to-b from-transparent to-[#0B1D26] w-full h-[800px] absolute top-0"></div>
      </div>
      <HeroTop />
      <Search/>
      <About/>
    </main>
  );
}
