import { useEffect, useState } from "react"
import { AnimatedNumber } from "./motion-primitives/animated-number"

export const Numbers = () => {
    const [value, setValue] = useState(0)
    const [value2, setValue2] = useState(0)


    useEffect(() => {
        setValue(30)
    }, [])

    useEffect(() => {
        setValue2(10)
    }, [])
    return (
        <div className="flex justify-center left-0 right-0 top-0 z-[1000] transition-all">
            <div className="mt-20 w-full max-w-[1280px] px-4 flex justify-center items-center">
                <div className="flex flex-col md:flex-row justify-center items-center gap-16">
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="text-center text-black text-[30px] font-semibold font-['Inter'] leading-9">
                        2 года
                    </div>
                    <div className="text-center text-[#828282] text-lg font-normal font-['Inter'] leading-normal">
                        опыта в IT-разработке
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="text-center text-black text-[30px] font-semibold font-['Inter'] leading-9">
                        <AnimatedNumber
                            className="text-center text-black text-[30px] font-semibold font-['Inter'] leading-9"
                            springOptions={{
                            bounce: 0,
                            duration: 5000,
                            }}
                            value={value}
                        />
                        +
                    </div>
                    <div className="text-center text-[#828282] text-lg font-normal font-['Inter'] leading-normal">
                        реализованных проектов
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="text-center text-black text-[30px] font-semibold font-['Inter'] leading-9">
                        <AnimatedNumber
                            className="text-center text-black text-[30px] font-semibold font-['Inter'] leading-9"
                            springOptions={{
                            bounce: 0,
                            duration: 5000,
                            }}
                            value={value2}
                        />
                        ‎ дней
                    </div>
                    <div className="text-center text-[#828282] text-lg font-normal font-['Inter'] leading-normal">
                        средний срок запуска проекта
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}