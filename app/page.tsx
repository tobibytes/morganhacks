import HackathonIntro from "@/components/Intro";
import Tracks from "@/components/Tracks";
import FAQ from "@/components/Faq"
import TeamComponent from "@/components/Teams";
import Panelists from "@/components/Panelists"


export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HackathonIntro />
          <Tracks />
          <Panelists/>
          <TeamComponent />
          <FAQ />
    </main>
  );
}
