"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Carousel({ props }) {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  console.log(props);
  return (
    <div
      className="overflow-hidden w-11/12 md:w-9/12 mx-auto flex items-center justify-center  "
      ref={emblaRef}
    >
      <div className="flex">
        {props?.map((item) => {
          return (
            <div className="embla__slide relative h-8/12 w-8/12" key={item.id}>
              {/* the image */}
              <img className="w-full h-full" src={item.image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
