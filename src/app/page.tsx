import Acorde from "@/components/Acorde";
import Escalas from "@/components/Escalas";
import ListaDeAcordes from "@/components/Lista";
import GlobalStateProvider from "@/components/globalState";

export default function Home() {
  return <GlobalStateProvider>
    <main className="px-2 md:px-4 text-xl md:text-2xl flex items-center pt-16 pb-60 flex-col gap-16">
      <h1 className="text-4xl md:text-5xl font-light">Guardar un Acorde</h1>
      <Acorde />
      <Escalas />
      <ListaDeAcordes />
    </main>
  </GlobalStateProvider>
}
