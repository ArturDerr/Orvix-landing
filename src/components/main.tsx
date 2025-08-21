import { Button } from "./button"
import TextType from "./TextType"

export const Main = () => {
    return (
        <div className="flex justify-center left-0 right-0 top-0 z-[1000] transition-all">
            <div className="mt-40 w-[1280px] max-w-[1280px] p-4 justify-between items-center ml-[15px] mr-[15px] flex-col">
                <p className="whitespace-pre-wrap text-black text-[32px] sm:text-[40px] font-semibold font-['Inter']">
                    <span className="text-[#B7B7B7] absolute sm:relative">Создаем </span>
                    <TextType 
                        className="text-black font-semibold font-['Inter'] text-[32px] sm:text-[40px] mt-9 sm:mt-0"
                        text={["digital-решения", "сайты", "приложения", "платформы"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="_"
                    />
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