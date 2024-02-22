import { FaArrowUp } from "react-icons/fa6"

export default function FrMarker({
    offset,
    small
}: {
    offset: number
    small?: boolean
}) {

    const isVisible = offset > 1

    return <div
        className={"flex flex-col items-center mr-auto select-none pt-2 text-[#555] md:mt-2 " + (isVisible ? '' : 'opacity-0') + ' ' + (small ? '!text-base w-1/3 ' : 'text-xl w-[40%] md:text-2xl md:w-[36%]')}
    >
        <FaArrowUp />
        <h1>{offset}fr</h1>
    </div>
}