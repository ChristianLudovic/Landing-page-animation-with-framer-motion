import { Title } from "../basics/title";
import titleInfos from '../../data/titleInfos.json'
import { TestimonialsCard } from "../basics/testimonialsCard";
import testimonialDatas from "../../data/testimonialDatas.json"
import { motion } from 'framer-motion';

export function Testimonials(){
    return (
        <>
            <div className="px-4 pt-[124px]">
                <div className="flex flex-col gap-[72px] max-w-[1264px] mx-auto">
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
                    <div className="flex gap-[40px] w-full overflow-x-hidden">
                        <TestimonialsCard 
                            message={testimonialDatas[0].message}  
                            name={testimonialDatas[0].name}
                            position={testimonialDatas[0].position}
                            imagePath={testimonialDatas[0].imagePath}
                            bodyColor={testimonialDatas[0].bodyColor}
                            footerColor={testimonialDatas[0].footerColor}
                        />
                        <TestimonialsCard 
                            message={testimonialDatas[1].message}  
                            name={testimonialDatas[1].name}
                            position={testimonialDatas[1].position}
                            imagePath={testimonialDatas[1].imagePath}
                            bodyColor={testimonialDatas[1].bodyColor}
                            footerColor={testimonialDatas[1].footerColor}
                        />
                        <TestimonialsCard 
                            message={testimonialDatas[2].message}  
                            name={testimonialDatas[2].name}
                            position={testimonialDatas[2].position}
                            imagePath={testimonialDatas[2].imagePath}
                            bodyColor={testimonialDatas[2].bodyColor}
                            footerColor={testimonialDatas[2].footerColor}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}