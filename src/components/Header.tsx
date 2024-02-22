import Image from "next/image";

export default function Header() {
    return <header className="flex items-center justify-center md:justify-start w-full px-[10vw] gap-5">
        <Image
            src='/logo-grande.png'
            width={42}
            height={42}
            alt="logo"
        />
        <h1 className="text-5xl text-[#444] font-medium ">Acordes</h1>
    </header>
}