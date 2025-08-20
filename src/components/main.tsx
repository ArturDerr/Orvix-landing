import { Button } from "./button"
import { TextLoop } from "./motion-primitives/text-loop"

export const Main = () => {
    return (
        <div className="flex justify-center left-0 right-0 top-0 z-[1000] transition-all">
            <div className="mt-40 w-[1280px] max-w-[1280px] p-4 justify-between items-center ml-[15px] mr-[15px] flex-col">
                <p className="whitespace-pre-wrap text-black text-[32px] sm:text-[40px] font-semibold font-['Inter']">
                    <span className="text-[#B7B7B7]">Создаем </span>
                    <span className="block sm:inline">
                        <TextLoop
                            className="overflow-y-clip"
                            transition={{
                                type: "spring",
                                stiffness: 900,
                                damping: 80,
                                mass: 10,
                            }}
                            variants={{
                                initial: { y: 20, rotateX: 90, opacity: 0, filter: "blur(4px)" },
                                animate: { y: 0, rotateX: 0, opacity: 1, filter: "blur(0px)" },
                                exit: { y: -20, rotateX: -90, opacity: 0, filter: "blur(4px)" },
                            }}>
                            <span>digital-решения</span>
                            <span>сайты</span>
                            <span>приложения</span>
                            <span>платформы</span>
                        </TextLoop>
                    </span>
                    <p className="text-black leading-6">для <span className="text-[#B7B7B7]">бизнеса.</span></p>
                </p>
                <p className="font-normal font-['Inter'] text-[17px] leading-5 mt-[25px]">Мы помогаем компаниям запускать продукты<br/> быстрее и эффективнее.</p>
                <Button variant="default" className="mt-8 cursor-pointer">
                    Консультация
                </Button>
            </div>
        </div>
    )
}