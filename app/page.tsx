import HackathonIntro from "@/components/Intro";
import Timeline from "@/components/TimeLine";


export default function Home() {
  return (
    <main className="flex flex-col">
      <HackathonIntro />
          <Timeline />
    </main>
  );
}
