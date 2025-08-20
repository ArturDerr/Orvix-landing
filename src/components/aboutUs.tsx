export const AboutUs = () => {
    return (
        <div className="flex justify-center left-0 right-0 top-0 z-[1000] transition-all" id="about">
            <div className="mt-20 w-full max-w-[1280px] p-4 justify-between items-center ml-[15px] mr-[15px] flex-col">
                <div className="w-full inline-flex flex-col justify-center items-center gap-4 min-h-64 h-full bg-[#F8F8F8] rounded-[12px] border border-[#E2E8F0]">
                    <div className="px-2.5 py-1 rounded-full outline-1 outline-offset-[-1px] outline-theme-input inline-flex justify-center items-center mt-10">
                        <div className="text-center justify-center text-black text-[12px] font-semibold font-['Inter'] leading-none">О нас</div>
                    </div>
                    <div className="text-center justify-center text-black text-[30px] sm:text-[36px] font-semibold font-['Inter'] leading-10">Что мы делаем?</div>
                    <div className="text-center justify-center text-[#828282] text-[18px] font-normal font-['Inter'] leading-normal mb-10 px-9">Наша команда разрабатывает современные сайты, мобильные<br className="hidden md:flex"/> приложения и сервисы на заказ. Мы берём на себя весь цикл:<br className="hidden md:flex"/> проектирование, дизайн, разработку, тестирование и поддержку.</div>
                </div>
            </div>
        </div>
    )
}