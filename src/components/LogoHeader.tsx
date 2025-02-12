import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";

const LogoHeader = () => {
  return (
    <div>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
    </div>
  );
};

export default LogoHeader;
