import "./App.css";
import PostList from "./components/PostList";

function App() {
  return (
    <div style={{ maxWidth: "700px", margin: "auto", padding: "20px" }}>
      <h1>React + TypeScript API Demo (Vite)</h1>
      <PostList />
    </div>
  );
}

export default App;
