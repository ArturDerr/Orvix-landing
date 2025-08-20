import arrow from "../../public/arrow-.svg"

interface IProps {
    faq: any
    index: any
    toggleFAQ: any
}

export const FaqComponent = ({ faq, index, toggleFAQ }: IProps) => {
    return (
        <div className="max-w-[1280px] sm:mx-auto mt-2">
            <div className="text-white flex-row h-auto border-b border-[#E2E8F0] lg:ml-[0] lg:mr-[0] ml-[15px] mr-[15px] transition-colors" key={index}>
                <div className="flex items-center justify-between w-full cursor-pointer" onClick={() => toggleFAQ(index)}>
                    <p className="pt-[20px] pb-[20px] text-[18px] text-black font-['Inter'] leading-normal font-medium  hover:underline">
                        {faq.question}
                    </p>
                    <img src={arrow} className={`w-[15px] h-[15px] transition-transform duration-300 ease-in-out ${faq.open ? "rotate-[-90deg]" : "rotate-0"}`}/>
                </div>
                <div>
                    {faq.open && (
                        <div className="overflow-hidden pb-[20px] text-[18px] text-black font-['Inter'] leading-normal font-regular">
                            <p>{faq.content}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}