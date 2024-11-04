import Image from "next/image";


export default function Home() {
  return (
    <main>
           <Image 
              width={100}
              height={100}
              src={'/assets/regularshow.webp'}
              alt='Regular Show'
            />
    </main>
  );
}
