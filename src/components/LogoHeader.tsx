import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import AnimatedLogo from "./AnimatedLogo/AnimatedLogo";

interface LogoHeaderProps {
  animationsEnabled: boolean;
  toggleAnimations: () => void;
}

const LogoHeader = ({
  animationsEnabled,
  toggleAnimations,
}: LogoHeaderProps) => {
  return (
    <div>
      <div>
        <AnimatedLogo
          logoSvg={viteLogo}
          altText="Vite logo"
          animated={animationsEnabled}
        />
        <AnimatedLogo
          logoSvg={reactLogo}
          altText="React logo"
          animated={animationsEnabled}
        />
      </div>
      <button onClick={toggleAnimations}>Toggle animations</button>
      <h1>Vite + React</h1>
    </div>
  );
};

export default LogoHeader;
