import { useEffect, useState } from "react";
import { Button } from "./button"
import { AnimatePresence, motion } from "framer-motion";

export const Header = () => {
    const [pressedBurger, setPressedBurger] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 0) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
    const handleScroll = () => {
        if (pressedBurger) {
            setPressedBurger(false)
        }
    }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [pressedBurger])

    return (
        <div className={`flex justify-center fixed left-0 right-0 top-0 z-[1000] transition-transform duration-300 ${isScrolled ? 'bg-white/40 backdrop-blur-md border-b border-[#E2E8F0]' : 'bg-white'}`}>
            <div className="w-[1280px] max-w-[1280px] p-4 inline-flex justify-between items-center ml-[15px] mr-[15px]">
                <div className="justify-start text-black text-[21px] font-extrabold font-artegra">
                    ORVIX
                </div>
                <div className="hidden justify-start items-start gap-8 md:flex">
                    <a href="#about" className="justify-center text-black text-sm font-medium font-['Inter'] leading-tight cursor-pointer hover:underline">О нас</a>
                    <a href="#advantages" className="justify-center text-black text-sm font-medium font-['Inter'] leading-tight cursor-pointer hover:underline">Преимущества</a>
                    <a href="#cases" className="justify-center text-black text-sm font-medium font-['Inter'] leading-tight cursor-pointer hover:underline">Кейсы</a>
                    <a href="#faq" className="justify-center text-black text-sm font-medium font-['Inter'] leading-tight cursor-pointer hover:underline">FAQ</a>
                </div>
                <div className="justify-start items-center gap-1 hidden md:flex">
                    <Button variant="outline">
                        <div className="justify-center text-black text-sm font-medium font-['Inter'] leading-tight">Заказать проект</div>
                    </Button>
                </div>
                <button className="md:hidden cursor-pointer group flex w-10 h-10 text-black text-center items-center justify-end rounded transition z-[3000]" aria-pressed={pressedBurger} onClick={() => setPressedBurger(!pressedBurger)}>
                    <svg className="w-5 h-5 fill-current pointer-events-none" viewBox="0 0 16 16">
                        <rect className="origin-center -translate-y-[5px] translate-x-[0px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-pressed:translate-x-0 group-aria-pressed:translate-y-0 group-aria-pressed:rotate-[315deg]" y="7" width="16" height="2" rx="1"/>
                        <rect className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-pressed:rotate-45" y="7" width="16" height="2" rx="1"/> 
                        <rect className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-pressed:translate-y-0 group-aria-pressed:rotate-[135deg]" y="7" width="16" height="2" rx="1"/>
                    </svg>
                </button>
            </div>
            <AnimatePresence>
                {pressedBurger && (
                    <motion.div
                        key="burger-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[2000] w-screen h-screen bg-white flex flex-col gap-6 md:hidden p-10"
                        >
                        <a
                            href="#about"
                            onClick={() => setPressedBurger(false)}
                            className="text-black text-lg font-medium font-['Inter'] leading-tight cursor-pointer hover:underline"
                        >
                            О нас
                        </a>
                        <a
                            href="#advantages"
                            onClick={() => setPressedBurger(false)}
                            className="text-black text-lg font-medium font-['Inter'] leading-tight cursor-pointer hover:underline"
                        >
                            Преимущества
                        </a>
                        <a
                            href="#cases"
                            onClick={() => setPressedBurger(false)}
                            className="text-black text-lg font-medium font-['Inter'] leading-tight cursor-pointer hover:underline"
                        >
                            Кейсы
                        </a>
                        <a
                            href="#faq"
                            onClick={() => setPressedBurger(false)}
                            className="text-black text-lg font-medium font-['Inter'] leading-tight cursor-pointer hover:underline"
                        >
                            FAQ
                        </a>
                         <Button variant="outline">
                            <div className="justify-center text-black text-sm font-medium font-['Inter'] leading-tight">Заказать проект</div>
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}