import Dialog from "@/components/Dialog";

type Serie = {
  id: number;
  titulo: string;
  sinopsis: string;
  urlPortada: string;
  calificacion: number;
};

type Props = {
  serie: Serie;
  trigger: React.ReactNode;
};

export default function SerieDetailModal({ serie, trigger }: Props) {
  return (
    <Dialog
      trigger={trigger}
      titulo={serie.titulo}
      sinopsis={serie.sinopsis}
      image={serie.urlPortada}
      size="md"
      footer={<p className="font-semibold text-lg">${serie.calificacion}</p>}
    >
      <div>Detailed information about the series</div>
    </Dialog>
  );
}
