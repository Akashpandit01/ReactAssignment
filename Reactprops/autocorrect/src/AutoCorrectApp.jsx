import React, { useState } from "react";

function AutoCorrectApp() {
  const [inputText, setInputText] = useState("");

  const corrections = {
    teh: "the",
    recieve: "receive",
    adress: "address",
    wierd: "weird",
    thier: "their"
  };

  // Function to autocorrect text
  const getCorrectedText = (text) => {
    return text
      .split(" ")
      .map((word) => corrections[word] || word) // Replace if match exists
      .join(" ");
  };

  const correctedText = getCorrectedText(inputText);

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial",
        border: "1px solid #ddd",
        borderRadius: "10px",
        background: "#fafafa"
      }}
    >
      <h2>AutoCorrect App</h2>

      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type here..."
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          marginBottom: "20px"
        }}
      />

      <h3>Corrected Output:</h3>
      <p style={{ fontSize: "18px", background: "#fff", padding: "10px", borderRadius: "6px" }}>
        {correctedText}
      </p>
    </div>
  );
}

export default AutoCorrectApp;
