import About from "@/modules/about/About";
import HeroTop from "@/modules/hero-top/HeroTop";
import Search from "@/modules/search/Search";

export default function Home() {
  return (
    <main>
      <HeroTop />
      <Search/>
      <About/>
    </main>
  );
}
