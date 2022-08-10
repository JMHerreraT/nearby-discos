import React, { useCallback, useEffect, useState } from "react";
import slideImagesMock from "../../mocks/slideImagesMock";
import Button from "../shared/Button/Button";
import Text from "../shared/Text/Text";
import "./slide.scss";

const Slide = ({
  title,
  subTitle,
  hasDescription,
  description,
  hasButton,
  onHover,
  buttonTitle,
}) => {
  const [slideIndex, setSlideIndex] = useState(1);

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
    <div className="slide-container">
      {slideImagesMock.map((image, index) => (
        <div
          key={`slide-${index}`}
          className={`image-container ${
            slideIndex === index + 1 ? "slide active-anim" : "slide"
          }`}
          style={{
            backgroundImage: image && `url(${image})`,
          }}
        >
          <img
            className="image-bg"
            src={
              process.env.PUBLIC_URL + `/assets/images/hero-bg-${index + 1}.jpg`
            }
            alt={`bg${index + 1}`}
          />
        </div>
      ))}
      <div className="slide-container-content center">
        <div className="row center">
          <div className="col-12 col-md-12">
            <Text quentin hasShadow size={35} color={`white`}>
              {title}
            </Text>
          </div>
          <div className="col-12 col-md-12">
            <Text raleway black hasShadow uppercase size={75} color={`white`}>
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
          {hasButton && (
            <div className="button-wrapper col-12 col-md-12">
              <Button
                to="about"
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
        </div>
      </div>
    </div>
  );
};

export default Slide;
