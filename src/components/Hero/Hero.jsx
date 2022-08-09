import React, { useCallback, useEffect, useState } from "react";
import Button from "../shared/Button/Button";
import Text from "../shared/Text/Text";
import "./hero.scss";
import slideImagesMock from "../../mocks/slideImagesMock";

const HeroSection = ({
  isSlide,
  title,
  subTitle,
  hasDescription,
  description,
  imageBg,
  hasButton,
  buttonTitle,
  children,
}) => {
  const [hover, setHover] = useState(false);

  const [slideIndex, setSlideIndex] = useState(1);

  const onHover = () => {
    setHover(!hover);
  };

  const className = {
    isSlide: isSlide && "image-bg",
  };

  const nextSlide = useCallback(() => {
    if (slideIndex !== slideImagesMock.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slideImagesMock.length) {
      setSlideIndex(1);
    }
  }, [slideIndex]);

  useEffect(() => {
    setInterval(() => {
      nextSlide();
    }, 5000);
  }, [nextSlide]);

  return (
    <div className="hero">
      {console.log('slideIndex -> ', slideIndex)}
      {isSlide ? (
        slideImagesMock.map((image, index) => (
          <div
            key={`slide-${index}`}
            className={`image-container ${isSlide && `slide-animation`} ${
              slideIndex === index + 1 ? "slide active-anim" : "slide"
            }`}
            style={{
              backgroundImage: image && `url(${image})`,
            }}
          >
            <img
              className="image-bg"
              src={
                process.env.PUBLIC_URL +
                `/assets/images/hero-bg-${index + 1}.jpg`
              }
              alt={`bg${index + 1}`}
            />
          </div>
        ))
      ) : (
        <div
          className={`image-container`}
          style={{
            backgroundImage: imageBg && `url(${imageBg})`,
          }}
        >
          <img className="" src={``} />
        </div>
      )}
      <div className="hero-content">
        <div className="row center">
          <div className="col-12 col-md-12">
            <Text quentin hasShadow size={35} color={`white`}>
              {title}
            </Text>
          </div>
          <div className="col-12 col-md-12">
            <Text raleway hasShadow uppercase size={50} color={`white`}>
              {subTitle}
            </Text>
          </div>
          {hasDescription && (
            <div className="col-12 col-md-12">
              <Text arkhip hasShadow uppercase size={18} color={`white`}>
                {description}
              </Text>
            </div>
          )}
        </div>
        {hasButton && (
          <div className="button-wrapper">
            <Button
              to="calendario-eventos"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary
              transparent
              hasHover
            >
              {buttonTitle}
            </Button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default HeroSection;
