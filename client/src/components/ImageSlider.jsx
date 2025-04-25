import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlider({ images = [], autoPlay = true, interval = 5000 }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const imgCount = images.length;
  if (imgCount === 0) return null;

  const resetTimeout = () => timeoutRef.current && clearTimeout(timeoutRef.current);

  useEffect(() => {
    if (!autoPlay) return;
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrent((p) => (p === imgCount - 1 ? 0 : p + 1)),
      interval
    );
    return resetTimeout;
  }, [current, autoPlay, interval, imgCount]);

  const prevSlide = () => setCurrent(current === 0 ? imgCount - 1 : current - 1);
  const nextSlide = () => setCurrent(current === imgCount - 1 ? 0 : current + 1);

  return (
    <div className="relative w-full h-[calc(100vh-4rem)] md:h-screen overflow-hidden select-none group">
      {/* Slides container */}
      <div
        className="flex h-full transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`slide-${idx}`}
            className="w-full h-full object-cover shrink-0 md:h-full md:w-full mobile:h-1/2"
          />
        ))}
      </div>

      {/* Buttons */}
      <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-4 p-2 bg-white/70 rounded-full shadow hidden group-hover:block">
        <ChevronLeft />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-4 p-2 bg-white/70 rounded-full shadow hidden group-hover:block">
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button key={idx} onClick={() => setCurrent(idx)} className={`h-2 w-2 rounded-full ${current === idx ? "bg-white" : "bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
}
