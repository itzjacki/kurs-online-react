interface CounterButtonProps {
  count: number;
  increaseCount: () => void;
  emojiEnabled: boolean;
}

const CounterButton = ({
  count,
  emojiEnabled,
  increaseCount,
}: CounterButtonProps) => {
  return (
    <button onClick={() => increaseCount()}>
      count is {count} {emojiEnabled && <span>🔢</span>}
    </button>
  );
};

export default CounterButton;
