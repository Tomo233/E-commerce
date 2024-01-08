import { Carousel } from "primereact/carousel";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import images from "../assets/images.jpg";

function HeroCarousel() {
  const items = [
    {
      src: "../assets/images",
      alt: "Image 1",
    },
    { src: "path/to/image2.jpg", alt: "Image 2" },
    { src: "path/to/image3.jpg", alt: "Image 3" },
  ];
  return (
    <Carousel
      value={items}
      className=""
      itemTemplate={(item) => (
        <div className="mt-10">
          <img src={images} alt={item.alt} />
        </div>
      )}
    />
  );
}

export default HeroCarousel;
