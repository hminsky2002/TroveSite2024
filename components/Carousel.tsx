'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function Carousel({ props }: any) {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div
      className="mx-auto flex w-11/12 items-center justify-center overflow-hidden md:w-9/12"
      ref={emblaRef}
    >
      <div className="flex">
        {props?.map((item: any) => (
          <div className="embla__slide h-8/12 relative w-8/12" key={item.id}>
            <img className="h-full w-full" src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
