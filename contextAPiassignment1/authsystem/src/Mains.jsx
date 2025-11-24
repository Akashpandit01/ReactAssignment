import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

function Mains() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <main style={{ padding: "20px" }}>
      <h2>{isLoggedIn ? "You are logged in" : "You are logged out"}</h2>
    </main>
  );
}

export default Mains;
