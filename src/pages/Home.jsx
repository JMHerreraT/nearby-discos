import React from "react";
import HeroSection from "../components/Hero/Hero";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import {
  MdArrowForward as ArrowForward,
  MdKeyboardArrowRight as ArrowRight,
} from "react-icons/md";
import homeSectionsMock from "../mocks/HomeSectionsMock";

const Home = () => {
  return (
    <MainWrapper>
      {homeSectionsMock.map((section, index) => (
        <div className="row" key={index}>
          <div className="col-12 col-md-12">
            <HeroSection
              title={section.title}
              subTitle={section.subTitle}
              hasDescription={section.hasDescription}
              description={section.description}
              hasButton={section.hasButton}
              buttonTitle={section.buttonTitle}
              imageBg={section.backgroundImage}
              isSlide={section.isSlide}
            ></HeroSection>
          </div>
        </div>
      ))}
    </MainWrapper>
  );
};

export default Home;
