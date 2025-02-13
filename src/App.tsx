import { useState } from "react";
import "./App.css";
import LogoHeader from "./components/LogoHeader.tsx";
import UsefulLinks, { Link } from "./components/UsefulLinks.tsx";
import CounterButton from "./components/CounterButton.tsx";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm.tsx";

const links: Link[] = [
  {
    href: "https://react.dev/reference/react/createElement",
    text: "Part 1: React.createElement documentation",
  },
  {
    href: "https://react.dev/reference/react/useState",
    text: "Part 2: React.useState documentation",
  },
  {
    href: "https://react.dev/reference/react/memo",
    text: "Part 3: React.memo documentation",
  },
  {
    href: "https://react.dev/reference/react/useEffect",
    text: "Part 4: React.useEffect documentation",
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(true);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [emojiEnabled, setEmojiEnabled] = useState(true);

  return (
    <>
      <LogoHeader
        animationsEnabled={animationsEnabled}
        toggleAnimations={() => setAnimationsEnabled(!animationsEnabled)}
      />

      <div className="card">
        <div>
          <label>
            <input
              type="checkbox"
              checked={showCounter}
              onChange={(e) => setShowCounter(e.target.checked)}
            />{" "}
            Show counter
          </label>
        </div>
        {showCounter && (
          <CounterButton
            count={count}
            increaseCount={() => setCount(count + 1)}
            emojiEnabled={emojiEnabled}
          />
        )}
      </div>

      <div className="card">
        <label>
          <input
            type="checkbox"
            checked={emojiEnabled}
            onChange={(e) => setEmojiEnabled(e.target.checked)}
          />{" "}
          Use Emoji
        </label>
      </div>

      <div className="linkList">
        <UsefulLinks links={links} emojiEnabled={emojiEnabled} />
      </div>

      <details className="card">
        <summary>Feedback form</summary>
        <FeedbackForm />
      </details>
    </>
  );
}

export default App;
