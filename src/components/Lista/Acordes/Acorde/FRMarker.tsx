import { FaArrowUp } from "react-icons/fa6"

export default function FrMarker({
    offset
}: {
    offset: number
}) {
    return <div className="flex flex-col items-center w-1/5 mr-auto text-lg pt-2 text-[#555]">
        <FaArrowUp />
        <h1>{offset}fr</h1>
    </div>
}