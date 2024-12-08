import HackathonIntro from "@/components/Intro";
import Timeline from "@/components/TimeLine";
import Tracks from "@/components/Tracks";
import FAQ from "@/components/Faq"
import TeamComponent from "@/components/Teams";


export default function Home() {
  return (
    <main className="flex flex-col">
      <HackathonIntro />
          <Timeline />
          <Tracks />
          <TeamComponent />
          <FAQ />
    </main>
  );
}
