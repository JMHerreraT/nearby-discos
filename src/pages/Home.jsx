import React from "react";
import HeroSection, {
  HeroSideBySide,
  HeroWithChildren,
} from "../components/Hero/Hero";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import {
  MdArrowForward as ArrowForward,
  MdKeyboardArrowRight as ArrowRight,
} from "react-icons/md";
import homeSectionsMock from "../mocks/HomeSectionsMock";
import ServicesMock from "../mocks/ServicesMock";
import Slide from "../components/Slide/Slide";
import Card from "../components/Card/Card";

const Home = () => {
  return (
    <MainWrapper>
      <div className="row">
        <div className="col-12 col-md-12">
          <Slide
            title="Nearby Discos te lo facilita"
            subTitle="ENCUENTRA LAS MEJORES OFERTAS CON NOSOTROS"
            hasDescription={false}
            hasButton={true}
            buttonTitle={"Pruebalo"}
          />
        </div>
        <div className="col-12 col-md-12">
          <HeroSideBySide
            title={`Sobre Nearby Discos`}
            subTitle={`WE ARE THE BIGGEST CLUB IN TOWN`}
            hasDescription={true}
            description={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socis natoque penatibus et magnis dis parturient montes. Aenean massa. Cum natoque penatibus magnis parturient. Consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes dolore magna.`}
            hasButton={true}
            buttonTitle={`Leer mas`}
            rightSide={true}
            leftSide={false}
            imageBg={require("../assets/images/bg2.jpg")}
          />
        </div>
        {/* <div className="col-12 col-md-12">
          <HeroWithChildren
            title={"Nuestros Servicios"}
            subTitle={"LO QUE OFRECEMOS"}
            hasDescription={true}
            description={
              "Lorem ipsum dolor sit amet consectetur adipiscing elit. Doneca feugiat purus. Duis turpis nunc aliquam id nuncac convallis dictum nisi. Curabitur vehicula tincidunt sapien velcac."
            }
            hasButton={false}
            imageBg={require("../assets/images/client-fourth-image.jpg")}
          >
            <div className="row">
              {ServicesMock.map((card, index) => (
                <div className="col-3 col-md-12">
                  <Card imageBg={card.background}/>
                </div>
              ))}
            </div>
          </HeroWithChildren>
        </div> */}
      </div>
      {homeSectionsMock.map((section, index) => (
        <div className="row" key={index}>
          <div className="col-12 col-md-12">
            <HeroSection
              centerText={section.centerText}
              hasTwoSides={section.hasTwoSides}
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
