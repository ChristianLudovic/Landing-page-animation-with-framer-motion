import { Title } from "../basics/title";
import titleInfos from '../../data/titleInfos.json'
import { Question } from "../basics/question";
import faqQuestion from '../../data/faqQuestion.json'
import { motion } from 'framer-motion';

export function FAQ () {
    return (
        <>
            <div className="px-4 pt-[124px]">
                <div className="flex flex-col  max-w-[1264px] items-center gap-[88px] mx-auto">
                <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        <Title 
                            subTitle={titleInfos[4].subTitle} 
                            title={titleInfos[4].title}   
                            message={titleInfos[4].message}
                        />
                    </motion.div>
                    <div className="flex flex-col gap-4">
                        <Question 
                            question = {faqQuestion[0].question}
                            answer = {faqQuestion[0].answer}
                        />
                        <hr className="max-w-[719px] bg-[#BCB7C7] h-[2px]"/>
                        <Question 
                            question = {faqQuestion[1].question}
                            answer = {faqQuestion[1].answer}
                        />
                        <hr className="max-w-[719px] bg-[#BCB7C7] h-[2px]"/>
                        <Question 
                            question = {faqQuestion[2].question}
                            answer = {faqQuestion[2].answer}
                        />
                        <hr className="max-w-[719px] bg-[#BCB7C7] h-[2px]"/>
                        <Question 
                            question = {faqQuestion[3].question}
                            answer = {faqQuestion[3].answer}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}