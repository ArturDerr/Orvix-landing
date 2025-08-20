import { useRef } from "react";
import arrow from "../../public/arrow.svg"

export const Cases = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null)

    const scroll = (direction: number) => {
        const container = scrollRef.current
        if (!container) return

        const first = container.firstElementChild as HTMLElement | null
        if (!first) return

        const styles = getComputedStyle(container)
        const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0

        const step = first.getBoundingClientRect().width + gap
        container.scrollBy({ left: direction * step, behavior: "smooth" })
    }
    return (
         <div className="flex justify-center left-0 right-0 top-0 transition-all relative hide-scrollbar" id="cases">
            <div className="mt-0 w-full p-4 justify-between items-center ml-[5px] mr-[5px] flex-col">
                <div className="w-full inline-flex flex-col justify-center items-center gap-4 h-[530px] bg-[#F8F8F8] rounded-[12px] border border-[#E2E8F0]">
                    <div className="px-2.5 py-1 rounded-full outline-1 outline-offset-[-1px] outline-theme-input inline-flex justify-center items-center mt-2">
                        <div className="text-center justify-center text-black text-[12px] font-semibold font-['Inter'] leading-none">Наши работы</div>
                    </div>
                    <div className="text-center justify-center text-black text-[30px] sm:text-[36px] font-semibold font-['Inter'] leading-10">Кейсы</div>
                    <div className="flex-row flex justify-center">
                         <button
                            onClick={() => scroll(-1)}
                            className="hidden sm:flex transform cursor-pointer w-[40px] h-[40px] bg-[#F8F8F8] rounded-full border border-stroke  items-center justify-center hover:border-green transition-colors z-10">
                            <img src={arrow} className="w-[15px] h-[15px]" />
                        </button>
                        <button
                            onClick={() => scroll(1)}
                            className="hidden sm:flex ml-2 transform cursor-pointer w-[40px] h-[40px] bg-[#F8F8F8] rounded-full border border-stroke  items-center justify-center hover:border-green transition-colors z-10">
                            <img src={arrow} className="w-[15px] h-[15px] rotate-180" />
                        </button>
                    </div>
                   
                    <div className="w-full max-w-[1240px] overflow-hidden mt-5">
                        <div
                        ref={scrollRef}
                        className="flex overflow-x-auto scroll-smooth hide-scrollbar gap-[20px] snap-x snap-mandatory">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div
                                key={i}
                                className="max-w-[395px] ml-2 h-72 bg-white rounded-xl border border-[#E2E8F0] flex-shrink-0 snap-start overflow-hidden">
                                <img className="w-full h-[140px] object-cover" src={`https://placehold.co/600x300?text=${i + 1}`} />
                                <div className="p-6">
                                    <div className="text-black text-2xl font-semibold mt-3">Корпоративный сайт</div>
                                    <div className="text-[18px] text-[#828282] leading-tight mt-2">
                                        Discover the transformative power of decluttering and learn…
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}