import HackathonIntro from "@/components/Intro";
import Tracks from "@/components/Tracks";
import FAQ from "@/components/Faq"
import Carousel from "@/components/Carousel";
import images from "@/public/prev_images.json"
import TeamComponent from "@/components/Teams";
import Panelists from "@/components/Panelists";
import BusRoutes from "@/components/busRoutes";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HackathonIntro />
          <Tracks />
          <TeamComponent />
          <Sponsors />
          <Panelists />
          <Carousel images={images} />
          <BusRoutes />
          <FAQ />
    </main>
  );
}
