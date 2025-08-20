export const DoingCard = () => {
    return (
        <div className="max-w-[1280px] px-4 py-30 w-full mx-auto flex flex-col justify-center items-center gap-8" id="advantages">
            <div className="w-[672px] max-w-[672px] flex flex-col justify-start items-center gap-3">
                <div className="px-2.5 py-1 rounded-full outline-1 outline-offset-[-1px] outline-theme-input inline-flex justify-center items-center">
                    <div className="text-center justify-center text-theme-foreground text-xs font-semibold font-['Inter'] leading-none">
                        Преимущества
                    </div>
                </div>
                <div className="text-center justify-center text-theme-foreground text-[30px] sm:text-[36px] font-semibold font-['Inter'] leading-9">
                    Почему выбирают нас
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 ml-[15px] mr-[15px] xl:ml-0 xl:mr-0">
                <div className="w-full xl:max-w-[605px] min-h-[212px] h-full p-6 bg-theme-background rounded-xl outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] flex flex-col gap-4">
                    <div className="text-4xl">🚀</div>
                    <div className="self-stretch inline-flex flex-col gap-2 mt-10">
                        <div className="text-2xl font-semibold text-theme-foreground">Скорость</div>
                        <div className="text-[18px] text-[#828282] leading-normal font-normal">Быстрый запуск MVP и готовых решений.</div>
                    </div>
                </div>

                <div className="w-full xl:max-w-[605px] min-h-[212px] h-full p-6 bg-theme-background rounded-xl outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] flex flex-col gap-4">
                    <div className="text-4xl">🎨</div>
                    <div className="self-stretch inline-flex flex-col gap-2 mt-10"> 
                        <div className="text-2xl font-semibold text-theme-foreground">Дизайн</div>
                        <div className="text-[18px] text-[#828282] leading-normal font-normal">Уникальный UI/UX под задачи бизнеса.</div>
                    </div>
                </div>

                <div className="w-full xl:max-w-99 min-h-[212px] h-full p-6 bg-theme-background rounded-xl outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] flex flex-col gap-4">
                    <div className="text-4xl">⚙️</div>
                    <div className="self-stretch inline-flex flex-col gap-2 mt-3">
                        <div className="text-2xl font-semibold text-theme-foreground">Технологии</div>
                        <div className="text-[18px] text-[#828282] leading-normal font-normal">Современный стек и <br/> проверенные инструменты.</div>
                    </div>
                </div>

                <div className="w-full xl:max-w-98 min-h-[212px] h-full p-6 bg-theme-background rounded-xl outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] flex flex-col gap-4">
                    <div className="text-4xl">🤝</div>
                    <div className="self-stretch inline-flex flex-col gap-2 mt-3">
                        <div className="text-2xl font-semibold text-theme-foreground">Прозрачность</div>
                        <div className="text-[18px] text-[#828282] leading-normal font-normal">Фиксированные сроки и прозрачное ценообразование.</div>
                    </div>
                </div>

                <div className="w-full xl:max-w-99 min-h-[212px] h-full p-6 bg-theme-background rounded-xl  outline outline-1 outline-offset-[-1px] outline-[#E2E8F0] flex flex-col gap-4">
                    <div className="text-4xl">🔒</div>
                    <div className="self-stretch inline-flex flex-col gap-2 mt-3">
                        <div className="text-2xl font-semibold text-theme-foreground">Надёжность</div>
                        <div className="text-[18px] text-[#828282] leading-normal font-normal">Поддержка и сопровождение после релиза.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}