export const Footer = () => {
    return (
        <div className="flex justify-center bg-[#F8F8F8] border border-[#E2E8F0] mt-30">
            <div className="w-[1280px] max-w-[1280px] p-4 inline-flex justify-between items-center text-center ml-[15px] mr-[15px] mt-2 mb-2 flex-col md:flex-row">
                <div className="justify-start text-black text-[21px] font-extrabold font-artegra">
                    ORVIX
                </div>
                <div>
                    <p className="text-[#828282] text-sm font-medium font-['Inter'] leading-tight mt-2 md:mt-0">ООО «Нева Логистик» ИНН 7840101991</p>
                </div>
                <div className="justify-start items-start gap-8 md:flex">
                    <a className="justify-center text-[#828282] text-sm font-medium font-['Inter'] leading-tight cursor-pointer hover:underline" href="https://t.me/kirilllrrr09">Связаться с нами</a>
                </div>
            </div>
        </div>
    )
}