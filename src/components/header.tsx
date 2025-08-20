import { useEffect, useState } from "react";
import { Button } from "./button"

export const Header = () => {
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
                <div className="hidden justify-start items-center gap-1 md:flex">
                    <Button variant="outline">
                        <div className="justify-center text-black text-sm font-medium font-['Inter'] leading-tight">Заказать проект</div>
                    </Button>
                </div>
                <div className="w-6 h-6 flex md:hidden">
                    <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 17.5H19.5" stroke="#020618" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                        <path d="M4.5 12H19.5" stroke="#020618" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                        <path d="M4.5 6.5H19.5" stroke="#020618" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}