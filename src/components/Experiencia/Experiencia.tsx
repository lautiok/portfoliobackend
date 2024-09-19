import styles from "./experiencia.module.css";
import data from "../../db/experiencia.json";
export function Experiencia() {
  return (
    <section className={`${styles.experiencia}`}>
      <h2>Experiencia laboral</h2>
      <div className={`${styles.experienciaContainer}`}>
        {data.experiencia.map((experiencia) => (
          <div key={experiencia.title} className={`${styles.experienciaItem}`}>
            <h3>{experiencia.title}</h3>
            <p>{experiencia.empresa}</p>
            <p>{experiencia.periodo}</p>
            <p>{experiencia.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
