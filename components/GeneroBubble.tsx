import { LucideIcon } from "lucide-react";
type GeneroBubbleProps = {
  emoji: LucideIcon;
  titulo: string;
  color: string;
};

export default function GeneroBubble({ titulo, emoji: Emoji , color}: GeneroBubbleProps) {
  return (
    <div className="flex flex-col items-center gap-3 cursor-pointer group">
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white shadow-md text-2xl md:text-3xl group-hover:scale-110 transition">
        <Emoji color={color}/>
      </div>
      <p className="text-xs md:text-sm font-medium text-white text-center">
        {titulo}
      </p>
    </div>
  );
}
