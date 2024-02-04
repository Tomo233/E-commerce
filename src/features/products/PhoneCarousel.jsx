import { useState, useEffect } from "react";
import { Carousel as ReactCarousel } from "primereact/carousel";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import phone from "../../assets/phone.png";

function HeroSectionCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      src: "../assets/phone.png",
      alt: "Image 1",
    },
    { src: "../assets/phone.png", alt: "Image 2" },
    { src: "../assets/phone.png", alt: "Image 3" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change interval in milliseconds (e.g., 3000 for 3 seconds)

    return () => clearInterval(intervalId);
  }, [items.length]);

  return (
    <ReactCarousel
      value={items}
      page={activeIndex} // Use page instead of activeIndex
      circular
      className=""
      itemTemplate={(item) => (
        <div className="mt-10">
          <img src={phone} alt={item.alt} className="w-full" />
        </div>
      )}
    />
  );
}

export default HeroSectionCarousel;
