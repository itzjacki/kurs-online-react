import "./AnimatedLogo.css";

interface AnimatedLogoProps {
  logoSvg: string;
  altText: string;
  animated: boolean;
}

const AnimatedLogo = ({ logoSvg, altText, animated }: AnimatedLogoProps) => {
  return (
    <img
      src={logoSvg}
      className={`logo ${animated ? "animated" : ""}`}
      alt={altText}
    />
  );
};

export default AnimatedLogo;
