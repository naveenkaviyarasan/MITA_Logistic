import React, { useState } from "react";

const Terms = () => {
  const [text, setText] = useState("Here Terms and Condition...");
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState("#0000ff");
  const [align, setAlign] = useState("left");

  const handleUpdate = () => {
    alert("Updated Terms & Conditions saved successfully!");
    // TODO: API Call Example
    /*
    fetch("https://your-api-url.com/update-terms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ terms_text: text })
    })
    .then(res => res.json())
    .then(data => console.log(data));
    */
  };

  return (
    <div style={styles.container}>
      
      {/* Header */}
      <div style={styles.header}>
        <button style={styles.backBtn}>←</button>
        <h2 style={styles.title}>Terms and condition</h2>
      </div>

      {/* Controls */}
      <div style={styles.toolbar}>
        <label>Font size</label>
        <input
          type="number"
          value={fontSize}
          min="10"
          max="40"
          style={styles.fontInput}
          onChange={(e) => setFontSize(e.target.value)}
        />

        <label>Color</label>
        <input
          type="color"
          value={fontColor}
          onChange={(e) => setFontColor(e.target.value)}
          style={styles.colorInput}
        />

        {/* Alignment Buttons */}
        <button onClick={() => setAlign("left")}>☰</button>
        <button onClick={() => setAlign("center")}>≡</button>
        <button onClick={() => setAlign("right")}>☷</button>
      </div>

      {/* Text Area */}
      <textarea
        style={{
          ...styles.textArea,
          fontSize: `${fontSize}px`,
          color: fontColor,
          textAlign: align
        }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Update Button */}
      <button onClick={handleUpdate} style={styles.updateBtn}>
        Update
      </button>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    width: "90%",
    margin: "auto",
    marginTop: 30
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    justifyContent: "center",
    border: "2px solid #f0c18c",
    borderRadius: "8px",
    padding: "10px 0",
    marginBottom: 20
  },
  backBtn: {
    position: "absolute",
    left: 20,
    fontSize: 20,
    background: "none",
    border: "none",
    cursor: "pointer"
  },
  title: {
    margin: 0,
    fontWeight: "700"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 10
  },
  fontInput: {
    width: 50,
    padding: 4
  },
  colorInput: {
    width: 50,
    height: 30,
    padding: 0
  },
  textArea: {
    width: "100%",
    height: 300,
    padding: 20,
    background: "#ddd",
    border: "1px solid #ccc",
    borderRadius: 5,
    outline: "none"
  },
  updateBtn: {
    marginTop: 20,
    background: "#ff9a3c",
    color: "#fff",
    fontWeight: "700",
    border: "2px solid #ff6a00",
    padding: "12px 40px",
    borderRadius: "8px",
    cursor: "pointer",
    display: "block"
  }
};

export default Terms;
