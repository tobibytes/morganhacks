import HackathonIntro from "@/components/Intro";
import Tracks from "@/components/Tracks";
import FAQ from "@/components/Faq"
import Carousel from "@/components/Carousel";
import images from "@/public/prev_images.json"
import TeamComponent from "@/components/Teams";
import Panelists from "@/components/Panelists";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HackathonIntro />
          <Tracks />
          <TeamComponent />
          {/* <Panelists /> */}
          <Carousel images={images} />
          <FAQ />
    </main>
  );
}
