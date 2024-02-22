import { type ReactNode, useEffect } from "react";

export function preventDefaults(e: any) {
    e.stopPropagation()
    e.preventDefault()
}

export default function Screen({
    children,
    close,
    showExit
}: {
    children: ReactNode,
    close?: () => void,
    showExit?: boolean
}) {
    useEffect(() => {
        const body = document.getElementsByTagName('body')
        if (body) body[0].style.overflowY = 'hidden'

        return () => {
            const body = document.getElementsByTagName('body')
            if (body) body[0].style.overflowY = 'auto'
        }
    }, [])

    const closeHandler = (e: any) => {
        preventDefaults(e)
        if (close) close()
    }

    return <main
        onClick={closeHandler}
        className={"fixed z-[100] top-0 left-0 w-full min-h-screen flex flex-col justify-center items-center bg-black/25 backdrop-blur-xl cursor-pointer " + (showExit ? 'fade-out pointer-events-none' : 'fade-in')}
    >
        <section
            onClick={preventDefaults}
            className={'rounded-lg cursor-default bg-[#c8c8c8] border-4  border-white/10 text-center flex flex-col items-center text-[#222] px-4 py-2.5 sm:px-8 sm:py-5 text-xl sm:text-2xl md:text-3xl ' + (showExit ? 'push-out pointer-events-none' : 'push-in')}
        >
            {children}
        </section>
    </main>
}