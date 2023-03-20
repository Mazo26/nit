import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as SliderCarousel } from "react-responsive-carousel";
import Text from "../Text/Text";
import { colors, fontFamily, fontSize } from "../../util/theme";
import SimplifiedDiv from "../SimplifiedDiv/SimplifiedDiv";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Carousel = ({ data }) => {
  const styles = {
    carouselText: {
      position: "absolute",
      bottom: 30,
      left: 10,
      right: 10,
    },
  };

  return (
    <SliderCarousel
      width='100%'
      axis='horizontal'
      showIndicators
      showThumbs={false}
      interval={1000}
      autoPlay
      infiniteLoop
      showStatus={false}
      showArrows={false}
      swipeable
    >
      {data.map((d) => (
        <div key={d} style={{ width: "100%", height: "400px" }}>
          <img
            src={d.imgSrc}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            alt={d.imgText}
          />
          <SimplifiedDiv style={styles.carouselText}>
            <Text
              fontFamily={fontFamily.LatoRegular}
              fontSize={fontSize.xLarge}
              color={colors.accentColor}
              textAlign='left'
            >
              {d.imgText}
            </Text>
            <Text
              fontFamily={fontFamily.LatoRegular}
              fontSize={fontSize.large}
              color={colors.gray}
              textAlign='left'
            >
              {d.imgText}
            </Text>
          </SimplifiedDiv>
        </div>
      ))}
    </SliderCarousel>
  );
};

export default Carousel;
