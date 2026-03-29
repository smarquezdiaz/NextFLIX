import { ScrollArea } from "radix-ui";
import GeneroBubble from "./GeneroBubble";
import {
  Drama,
  Compass,
  Swords,
  Search,
  Wand2,
  Rocket,
  Ghost,
  Heart,
} from "lucide-react";

export default function GenresSection() {
  const generos = [
    { titulo: "Drama", icono: Drama, color: "blue" },
    { titulo: "Adventure", icono: Compass, color: "green" },
    { titulo: "Action", icono: Swords, color: "red" },
    { titulo: "Crimen", icono: Search, color: "black" },
    { titulo: "Fantasía", icono: Wand2, color: "purple" },
    { titulo: "Ficción", icono: Rocket, color: "cyan" },
    { titulo: "Terror", icono: Ghost, color: "orange" },
    { titulo: "Romance", icono: Heart, color: "pink" },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
        Explore by Genre
      </h2>
      <ScrollArea.Root>
        <ScrollArea.Viewport>
          <div className="flex gap-8 md:gap-10 md:justify-center ">
            {generos.map((genero) => (
              <GeneroBubble
                key={genero.titulo}
                titulo={genero.titulo}
                emoji={genero.icono}
                color={genero.color}
              />
            ))}
          </div>
        </ScrollArea.Viewport>
      </ScrollArea.Root>
    </section>
  );
}
