import { useEffect, useState } from "react";

export const GetTarea = () => {
  const [tareas = [], setTarea] = useState([]);

  const url = "http://localhost:4000/tasks";
  useEffect(() => {
    (async () => {
      const res = await fetch(url);
      const resJs = await res.json();
      setTarea(resJs);
    })();
  }, []);

  return (
    <div>
      <h1>Componente get tarea</h1>
      {tareas.map(tarea => (<div key={tarea._id}> {tarea.title}</div>))}
    </div>
  );
};
