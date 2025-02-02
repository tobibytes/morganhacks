"use client"
import {useEffect, useState} from 'react'
import Image from 'next/image'

interface CarouselProps {
    images: { src: string; alt: string }[];
  }

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
         handleNextSlide()
        }, 3000); // Change image every 3 seconds
    
        return () => clearInterval(interval); // Cleanup interval on unmount
      }, [images.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  return (
    <div className="relative w-full max-w-4xl mx-auto">
        <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full" onClick={handleNextSlide}>
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={500}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}

export default Carousel