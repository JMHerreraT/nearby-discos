import React from "react";
import "./text.scss";

const Text = ({
  children,
  quentin,
  raleway,
  arkhip,
  black,
  blackItalic,
  bold,
  boldItalic,
  heavy,
  heavyItalic,
  light,
  lightItalic,
  medium,
  mediumItalic,
  regular,
  regularItalic,
  semi,
  semiItalic,
  thin,
  thinItalic,
  extraLight,
  extraLightItalic,
  uppercase,
  color,
  size,
  align,
  title,
  body1,
  body2,
  hasShadow
}) => {
  const className = {
    quentin: quentin && "quentin",
    raleway: raleway && "raleway",
    arkhip: arkhip && "arkhip",
    black: black && "black",
    blackItalic: blackItalic && "blackItalic",
    bold: bold && "bold",
    boldItalic: boldItalic && "boldItalic",
    heavy: heavy && "heavy",
    heavyItalic: heavyItalic && "heavyItalic",
    light: light && "light",
    lightItalic: lightItalic && "lightItalic",
    medium: medium && "medium",
    mediumItalic: mediumItalic && "mediumItalic",
    regular: regular && "regular",
    regularItalic: regularItalic && "regularItalic",
    semi: semi && "semi",
    semiItalic: semiItalic && "semiItalic",
    thin: thin && "thin",
    thinItalic: thinItalic && "thinItalic",
    extraLight: extraLight && "extraLight",
    extraLightItalic: extraLightItalic && "extraLightItalic",
    uppercase: uppercase && "uppercase",
    title: title && "title",
    body1: body1 && "body1",
    body2: body2 && "body2",
    hasShadow: hasShadow && "text-shadow"
  };
  return (
    <span
      className={Object.values(className).join(" ")}
      style={{
        color: color || `black`,
        fontSize: size || title || body1 || body2 || 16,
        textAlign: align || `left`
      }}
    >
      {children}
    </span>
  );
};

export default Text;
