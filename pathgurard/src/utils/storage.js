export const restoreLastPath = (navigate) => {
  const path = localStorage.getItem("lastPath");
  if (path) navigate(path);
};
