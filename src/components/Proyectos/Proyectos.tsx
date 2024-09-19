import styles from "./proyectos.module.css";
import data from "../../db/projects.json";

export function Proyectos() {
  return (
    <section className={`${styles.proyectos}`}>
      <h2>Proyectos destacados</h2>
      <div className={`${styles.proyectosContainer}`}>
        {data.projects.map((proyecto) => (
          <a key={proyecto.title} href={proyecto.link} target="_blank">
            <h3>{proyecto.title}</h3>
            <p>{proyecto.description}</p>
            <ul>
              {proyecto.technologies.map((tecnología) => (
                <li key={tecnología}>{tecnología}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}
