import React from "react";

function UserCard({ name, email, city }) {
  const styles = {
    card: {
      border: "1px solid #ccc",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "15px",
      background: "#f9f9f9",
      boxShadow: "0 0 10px rgba(0,0,0,0.05)",
    },
    heading: {
      margin: 0,
      fontSize: "20px",
      fontWeight: "bold",
    },
    email: {
      margin: "5px 0",
      color: "#555",
    },
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.heading}>{name}</h3>
      <p style={styles.email}>{email}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default UserCard;
