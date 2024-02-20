

export default function Selector({
    selected,
    change,
    items,
    classes = ''
}: {
    selected: string,
    change: (val: string) => void
    items: readonly string[],
    classes?: string
}) {
    return <select
        value={selected}
        onChange={e => change(e.currentTarget.value)}
        className={"bg-white capitalize outline-none border-2 border-black/20 input-shadow rounded-xl px-2 py-1 " + classes}
    >
        {items.map(i => <option key={i} style={{ fontSize: '80%' }}>{i}</option>)}
    </select>
}