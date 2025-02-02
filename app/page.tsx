import HackathonIntro from "@/components/Intro";
import Tracks from "@/components/Tracks";
import FAQ from "@/components/Faq"
import Carousel from "@/components/Carousel";

const images = [
  {src: "https://drive.google.com/uc?export=view&id=1zx5dRrlTkAm5iER4-QgUUjPdfkM47Du0", alt: 'Image 1'},
  {src: "https://drive.google.com/uc?export=view&id=1zvQqlm3ZB5kMqOv_e9XJtIzbWgLre9vW", alt: 'Image 2'},
  {src: "https://drive.google.com/uc?export=view&id=1zx5dRrlTkAm5iER4-QgUUjPdfkM47Du0", alt: 'Image 3'}
]
export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HackathonIntro />
          <Tracks />
          <Carousel images={images} />
          <FAQ />
    </main>
  );
}
