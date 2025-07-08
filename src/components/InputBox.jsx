import { useState, useEffect, useRef } from "react";
import handleCommand from "../utils/handleCommand";
import "./css/InputBox.css";

const InputBox = ({ handleAscii }) => {
  const [history, setHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const clearedOnce = useRef(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const trimmedInput = currentInput.trim().toLowerCase();

      if (trimmedInput === 'clear') {
        setHistory([]);
        if (!clearedOnce.current) {
          clearedOnce.current = true;
          handleAscii();
        }
      } else {
        const result = handleCommand(currentInput);
        setHistory(prev => [...prev, result]);
      }

      setCurrentInput('');
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
    const handleClick = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        inputRef.current.focus();
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="terminal">
      {history.map((res, index) => (
        <div key={index}>
          <div className="inputbox-container">
            <span className="prompt">visitor@fornerds:~$&nbsp;</span>
            <span>{res.command}</span>
          </div>
          {res.result.split('\n').map((line, i) => (
            <div key={i} className="output-line">{line}</div>
          ))}
        </div>
      ))}

      <div className="inputbox-container">
        <span className="prompt">visitor@fornerds:~$&nbsp;</span>
        <input
          ref={inputRef}
          className="inputbox"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div ref={bottomRef}></div>
    </div>
  );
};

export default InputBox;
