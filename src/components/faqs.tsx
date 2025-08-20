import { useState } from "react"
import { Button } from "./button"
import { FaqComponent } from "./faqComponent"

interface IProps {
    faq: any
}


export const Faqs = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "Сколько стоит разработка сайта или приложения?",
            content: "Стоимость зависит от сложности проекта, функционала и сроков. Мы предлагаем индивидуальные расчёты и всегда согласовываем бюджет до начала работы.",
            open: false
        },
        {
            question: "Сколько времени занимает создание сайта или приложения?",
            content: "Сроки зависят от масштаба проекта. В основном 10 дней. Точный график мы предоставляем после обсуждения всех требований.",
            open: false
        },
        {
            question: "Нужно ли мне предоставлять дизайн?",
            content: "Нет, мы можем разработать дизайн с нуля по вашему бренду и пожеланиям или использовать уже готовый макет, если он есть.",
            open: false
        },
        {
            question: "Предоставляете ли вы поддержку после запуска?",
            content: "Да, мы предлагаем техническую поддержку, обновления и сопровождение сайта или приложения после релиза.",
            open: false
        },
        {
            question: "Что делать, если остались вопросы?",
            content: "Вы можете написать со всеми вопросами в телеграм - @kirilllrrr09",
            open: false
        },
    ])

    const toggleFAQ = (index: any) => {
        setFaqs(
            faqs.map((faq:any, i) => {
                if (i === index) {
                    faq.open = !faq.open
                } else {
                    faq.open = false
                }
                return faq
            })
        )
    }
    return (
        <div className="flex justify-center transition-all" id="faq">
            <div className="mt-15 w-full max-w-[1280px] p-4 justify-between items-center ml-[15px] mr-[15px] flex-col">
                <div className="w-full inline-flex flex-col justify-center items-center gap-4">
                    <div className="px-2.5 py-1 rounded-full outline-1 outline-offset-[-1px] outline-theme-input inline-flex justify-center items-center mt-10">
                        <div className="text-center justify-center text-black text-[12px] font-semibold font-['Inter'] leading-none">Часто задаваемые вопросы</div>
                    </div>
                    <div className="text-center justify-center text-black text-[30px] sm:text-[36px] font-semibold font-['Inter'] leading-10">FAQs</div>
                    <div className="text-center justify-center text-[#828282] text-[18px] font-normal font-['Inter'] leading-normal mb-3 px-9">Мы собрали ответы на самые популярные <br className="hidden md:flex"/>вопросы, чтобы вам было проще разобраться <br className="hidden md:flex"/>в процессе работы с нами.</div>
                    <Button variant="default" className="cursor-pointer">
                        Задать вопрос 
                    </Button>
                </div>
                <div className="max-w-[1280px] mt-10">
                    {faqs.map((faq, index) => (
                        <FaqComponent faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                    ))}
                </div>
            </div>
        </div>
    )
}