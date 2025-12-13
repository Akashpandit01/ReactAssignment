import { useEffect, useState } from "react";
import { ref, onValue, push, remove } from "firebase/database";
import { db } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const { user, setRouteLoading } = useAuth();
  const [projects, setProjects] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const projectsRef = ref(db, `projects/${user.uid}`);
    setRouteLoading(true);

    const unsub = onValue(projectsRef, (snap) => {
      setProjects(snap.val() || {});
      setRouteLoading(false);
    });

    return () => unsub();
  }, []);

  const createProject = async () => {
    await push(ref(db, `projects/${user.uid}`), {
      title: "New Project",
      createdAt: Date.now(),
    });
  };

  return (
    <div>
      <h2>Projects</h2>
      <button onClick={createProject}>+ Add</button>

      {Object.entries(projects).map(([id, project]) => (
        <div key={id} onClick={() => {
          localStorage.setItem("lastPath", `/projects/${id}`);
          navigate(`/projects/${id}`);
        }}>
          {project.title}
        </div>
      ))}
    </div>
  );
}

