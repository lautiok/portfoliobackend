import { Experiencia } from "@/components/Experiencia/Experiencia";
import { Habilidades } from "@/components/Habilidades/Habilidades";
import { Proyectos } from "@/components/Proyectos/Proyectos";

export default function Home() {
  return (
    <main>
      <Proyectos />
      <Habilidades />
      <Experiencia />
    </main>
  );
}
