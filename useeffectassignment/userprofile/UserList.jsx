import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch users on component load
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load user data.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={styles.container}>
      <h1>User Profiles</h1>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            city={user.address.city}
          />
        ))}
      </div>
    </div>
  );
}

export default UserList;

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
};
