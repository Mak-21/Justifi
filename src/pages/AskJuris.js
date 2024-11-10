import React, { useState, useRef, useEffect } from "react";
import styles from "./AskJuris.module.css";
import logo from "../images/Justifi.png"; // Corrected import path using relative path

const AskJuris = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatWindowRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    const botMessage = {
      text: `
        <strong>Simple AI Answer:</strong> This is a general answer for "${input}".<br>
        <strong>Expected Outcome:</strong> An outcome based on cases similar to "${input}".<br>
        <strong>Cases with Similar Precedent:</strong>
        <ul>
          <li>Case 1: Similar case outcome related to "${input}".</li>
          <li>Case 2: Applicable case law related to "${input}".</li>
        </ul>
      `,
      sender: "bot",
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={styles.chatbot}>
      {/* Background Logo */}
      <img src={logo} alt="Justifi Logo" className={styles.backgroundLogo} />

      <header className={styles.header}>
        <h1>Ask Juris AI</h1>
      </header>

      <div className={styles.chatWindow} ref={chatWindowRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              message.sender === "user" ? styles.messageUser : styles.messageBot
            }`}
            dangerouslySetInnerHTML={{ __html: message.text }}
          />
        ))}
      </div>

      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Ask legal questions..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className={styles.button} onClick={handleSend}>
          Ask!
          <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L12 20M12 2L6 8M12 2L18 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AskJuris;
