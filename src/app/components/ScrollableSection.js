import { useEffect, useRef, useState } from "react";

export const ScrollableSection = ({ items, type }) => {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const filteredItems = items.filter(item => item.type === type);
  const scrollPosition = useRef(0);
  const direction = type === "scroll_down_slider" ? "down" : "up";

  useEffect(() => {
    let animationFrameId;
    const slideHeight = 600;
    const handleScroll = () => {
      const slider = sliderRef.current;
      scrollPosition.current += direction === 'down' ? 2 : -2;

      if (scrollPosition.current >= slideHeight * (filteredItems.length / 2)) {
        scrollPosition.current = 0;
      } else if (scrollPosition.current <= 0) {
        scrollPosition.current = slideHeight * (filteredItems.length / 2);
      }

      if (slider && slider.style) {
        slider.style.transform = `translateY(-${scrollPosition.current}px)`;
      }
    };

    const animate = () => {
      if (!isPaused) {
        handleScroll();
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <div
      className="relative overflow-hidden rounded-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div ref={sliderRef}>
        {filteredItems.map((item, index) => (
          <div key={index} className="group mt-6 overflow-hidden rounded-lg">
            <a href={item.link}>
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover object-center rounded-lg group-hover:opacity-75"
              />
              <div className="py-6 mb-2">
                <p className="text-xs font-semibold uppercase italic text-gray-600">{item.title}</p>
                <p className="font-bold text-black uppercase">{item.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
