import React, { useCallback, useEffect, useState } from "react";
import Button from "../shared/Button/Button";
import Text from "../shared/Text/Text";
import "./hero.scss";
import slideImagesMock from "../../mocks/slideImagesMock";

const HeroSection = ({
  centerText,
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

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div className="hero">
      <div
        className={`image-container`}
        style={{
          backgroundImage: imageBg && `url(${imageBg})`,
        }}
      />
      <div className={`hero-content ${centerText && `center`}`}>
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
          {hasButton && (
            <div className="button-wrapper col-12 col-md-12">
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
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

export const HeroSideBySide = ({
  leftSide,
  rightSide,
  title,
  subTitle,
  hasDescription,
  description,
  hasButton,
  onHover,
  buttonTitle,
  imageBg,
}) => {
  return (
    <div className="hero">
      <div
        className={`image-container`}
        style={{
          backgroundImage: imageBg && `url(${imageBg})`,
        }}
      />
      <div className={`hero-content`}>
        <div className="row">
          {leftSide ? (
            <>
              <div className="col-6 col-md-12">
                <div className="row">
                  <div className="col-12 col-md-12">
                    <Text quentin hasShadow size={35} color={`white`}>
                      {title}
                    </Text>
                  </div>
                  <div className="col-12 col-md-12">
                    <Text
                      raleway
                      black
                      hasShadow
                      uppercase
                      size={50}
                      color={`white`}
                    >
                      {subTitle}
                    </Text>
                  </div>
                  <div className="col-12 col-md-12">
                    {hasDescription && (
                      <Text raleway size={18} color={`white`}>
                        {description}
                      </Text>
                    )}
                  </div>
                  {hasButton && (
                    <div className="button-wrapper col-4 col-md-12">
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
                </div>
              </div>
              <div className="col-6 hide-md"></div>
            </>
          ) : (
            rightSide && (
              <>
                <div className="col-6 hide-md"></div>
                <div className="col-6 col-md-12">
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <Text quentin hasShadow size={35} color={`white`}>
                        {title}
                      </Text>
                    </div>
                    <div className="col-12 col-md-12">
                      <Text
                        raleway
                        black
                        hasShadow
                        uppercase
                        size={50}
                        color={`white`}
                      >
                        {subTitle}
                      </Text>
                    </div>
                    <div className="col-12 col-md-12">
                      {hasDescription && (
                        <Text raleway size={18} color={`white`}>
                          {description}
                        </Text>
                      )}
                    </div>
                    {hasButton && (
                      <div className="button-wrapper col-4 col-md-12">
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
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export const HeroWithChildren = ({
  imageBg,
  title,
  subTitle,
  hasDescription,
  description,
  hasButton,
  buttonTitle,
  children,
}) => {
  return (
    <div className="hero">
      <div
        className={`image-container`}
        style={{
          backgroundImage: imageBg && `url(${imageBg})`,
        }}
      />
      <div className={`hero-content center`}>
        <div className="row center">
          <div className="col-12 col-md-12">
            <Text quentin hasShadow size={35} color={`white`}>
              {title}
            </Text>
          </div>
          <div className="col-12 col-md-12">
            <Text raleway black hasShadow uppercase size={50} color={`white`}>
              {subTitle}
            </Text>
          </div>
          {hasDescription && (
            <div className="col-12 col-md-12">
              <Text raleway size={16} color={`white`}>
                {description}
              </Text>
            </div>
          )}
          {hasButton && (
            <div className="button-wrapper col-12 col-md-12">
              <Button to="calendario-eventos" primary transparent hasHover>
                {buttonTitle}
              </Button>
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};
