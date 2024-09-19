import styles from "./habilidades.module.css";
import data from "../../db/habilidades.json";

export function Habilidades() {
  return (
    <section className={`${styles.habilidades}`}>
      <h2>Habilidades técnicas</h2>
      <div className={`${styles.habilidadesContainer}`}>
        {data.habilidades.map((habilidad) => (
          <div key={habilidad.title} className={`${styles.habilidad}`}>
            <h3>{habilidad.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
