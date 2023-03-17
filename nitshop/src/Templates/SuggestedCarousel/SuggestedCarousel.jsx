import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Carousel } from "react-responsive-carousel";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { articles } from "../ArticlesHomePage/ArticlesHomePage";

const styles = {
  articleCardHolder: {
    padding: 20,
  },
};

const SuggestedCarousel = () => {
  return (
    <SimplifiedDiv>
      <Carousel
        showIndicators={false}
        showStatus={false}
        infiniteLoop
        interval={1000}
        swipeable
        centerMode
        autoPlay
        centerSlidePercentage={33}
      >
        {articles.map((article, index) => (
          <SimplifiedDiv style={styles.articleCardHolder}>
            <ArticleCard
              key={index}
              title={article.title}
              image={article.image}
              description={article.description}
              price={article.price}
            />
          </SimplifiedDiv>
        ))}
      </Carousel>
    </SimplifiedDiv>
  );
};

export default SuggestedCarousel;
