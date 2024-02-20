import MoveLeft from "./MoveLeft";
import MoveRight from "./MoveRight";
import { TRASTES_GUITARRA } from "@/components/lib";
import Reset from "./Reset";
import VerOctavos from "./VerOctavos";

const limite_superior = TRASTES_GUITARRA - 2

export default function ToggleOffset({
    offset,
    setOffset,
    reset
}: {
    offset: number,
    setOffset: (val: number) => void
    reset: () => void,
}) {

    return <footer className="w-full text-center [&>*]:basis-full text-2xl md:text-4xl flex items-center justify-center gap-2">
        <Reset action={reset} />
        <MoveLeft
            action={offset > 1 ? () => setOffset(offset - 1) : undefined}
        />
        <h1>{offset}fr</h1>
        <MoveRight
            action={offset < limite_superior ? () => setOffset(offset + 1) : undefined}
        />
        <VerOctavos />
    </footer>
}