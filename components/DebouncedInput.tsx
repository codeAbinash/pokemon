import { memo, useState, useEffect } from "react";

type InputProps = {
  onInput: (s: string) => void;
};

const DebouncedInput = memo<InputProps>(({ onInput }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onInput(text);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [text, onInput]);

  return (
    <input
      type="text"
      placeholder="Search Pokemon"
      onChange={(e) => setText(e.target.value)}
      className="p-2 px-4 w-full max-w-md border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
});

DebouncedInput.displayName = "Input";

export default DebouncedInput;
