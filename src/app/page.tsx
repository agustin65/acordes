import Header from "@/components/Header";
import ListaDeAcordes from "@/components/Lista";
import Main from "@/components/Main";
import GlobalStateProvider from "@/components/globalState";
import Escalas from "@/components/Escalas";

export default function Home() {
  return <GlobalStateProvider>
    <main className="relative sm:px-2 md:px-4 text-xl md:text-2xl flex items-center pt-16 pb-60 flex-col gap-12 md:gap-24">
      <Header />

      <Main />

      <Escalas />

      <ListaDeAcordes />
    </main>
  </GlobalStateProvider>
}
