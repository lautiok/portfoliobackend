/* eslint-disable @next/next/no-img-element */
import styles from "./header.module.css";
import data from "../../db/data.json";
import { Github, Linkedin, Mail } from "lucide-react";
export function Header() {
  const datos = data.header;
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.avatar}`}>
        <img src="./images/avatar.webp" alt="avatar" />
      </div>
      <div className={`${styles.info}`}>
        <h1>{datos.name}</h1>
        <p>{datos.profession}</p>
      </div>
      <div className={`${styles.social}`}>
        <div className={`${styles.socialItem}`}>
          <a href={datos.social[0].link} target="_blank" rel="noreferrer">
            <Github size={20} />
          </a>
        </div>
        <div className={`${styles.socialItem}`}>
          <a href={datos.social[1].link} target="_blank" rel="noreferrer">
            <Linkedin size={20} />
          </a>
        </div>
        <div className={`${styles.socialItem}`}>
          <a href={datos.social[2].link} target="_blank" rel="noreferrer">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
