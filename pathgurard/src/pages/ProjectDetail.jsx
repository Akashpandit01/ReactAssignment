
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ref, onValue, update, remove } from "firebase/database";
import { db } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const { user } = useAuth();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectRef = ref(db, `projects/${user.uid}/${projectId}`);

    const unsub = onValue(projectRef, (snap) => {
      setProject(snap.val());
    });

    localStorage.setItem("lastPath", `/projects/${projectId}`);
    return () => unsub();
  }, [projectId]);

  if (!project) return <p>Loading project...</p>;

  return (
    <div>
      <h2>{project.title}</h2>
      <button onClick={() =>
        update(ref(db, `projects/${user.uid}/${projectId}`), {
          title: "Updated Title",
        })
      }>
        Edit
      </button>

      <button onClick={() =>
        remove(ref(db, `projects/${user.uid}/${projectId}`))
      }>
        Delete
      </button>
    </div>
  );
}
