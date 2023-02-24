import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as SliderCarousel } from "react-responsive-carousel";

const Carousel = ({ data }) => {
  return (
    <SliderCarousel>
      {data.map((d) => (
        <div>
          <img src={d.imgSrc} />
          <p className='legend'>{d.imgText}</p>
        </div>
      ))}
    </SliderCarousel>
  );
};

export default Carousel;
