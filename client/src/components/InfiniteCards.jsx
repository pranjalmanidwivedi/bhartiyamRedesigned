import React, { useEffect, useRef, useState } from "react";

const speedMap = {
  fast: 10,
  normal: 20,
  slow: 40,
};

const InfiniteCards = ({ items, direction = "left", speed = "fast" }) => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const move = () => {
    if (containerRef.current && !isPaused) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

      if (direction === "left") {
        if (scrollLeft >= scrollWidth - clientWidth) {
          containerRef.current.scrollLeft = 0;
        } else {
          containerRef.current.scrollLeft += 1;
        }
      } else {
        if (scrollLeft <= 0) {
          containerRef.current.scrollLeft = scrollWidth - clientWidth;
        } else {
          containerRef.current.scrollLeft -= 1;
        }
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(move, speedMap[speed]);
    return () => clearInterval(interval);
  }, [isPaused, direction, speed,]);

  return (
    <div
      ref={containerRef}
      className="flex overflow-x-scroll mt-10 mb-16 hide-scrollbar whitespace-nowrap"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onMouseDown={() => setIsPaused(true)}
      onMouseUp={() => setIsPaused(false)}
    >
      {items.concat(items).map((item, index) => (
        <div
          key={index}
          className="inline-block min-w-[400px] min-h-[250px]   mx-4 p-6 rounded-lg bg-yellow-500 shadow-lg text-black flex-shrink-0"
        >
          <p className="italic mb-4">"{item.quote}"</p>
          <h3 className="font-bold">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default InfiniteCards;
