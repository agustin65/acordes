
export default function Cabezal({ visible }: { visible: boolean }) {
    return <div
        className="transition-all bg-neutral-950/75 min-h-full"
        style={{
            width: visible ? 12 : 0
        }}
    />
}