import React, { useEffect, useState } from "react";

function QuoteApp() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();

      setQuote(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch quote.");
      setLoading(false);
    }
  };

  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    quoteBox: {
      margin: "20px auto",
      padding: "20px",
      maxWidth: "500px",
      background: "#f4f4f4",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    },
    text: {
      fontSize: "20px",
      fontStyle: "italic",
    },
    author: {
      marginTop: "10px",
      fontWeight: "bold",
    },
    button: {
      marginTop: "10px",
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#007bff",
      color: "white",
    },
  };

  // ✅ Only ONE useEffect
  useEffect(() => {
    fetchQuote(); // initial fetch

    const interval = setInterval(fetchQuote, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h1>Daily Quote Generator</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {quote && !loading && (
        <div style={styles.quoteBox}>
          <p style={styles.text}>"{quote.content}"</p>
          <p style={styles.author}>— {quote.author}</p>
        </div>
      )}

      <button style={styles.button} onClick={fetchQuote}>
        Get New Quote
      </button>
    </div>
  );
}

export default QuoteApp;
