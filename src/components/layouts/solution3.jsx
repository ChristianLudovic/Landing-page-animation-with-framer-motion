import { Seperator } from "../basics/seperator";
import effortlessPayment from "../../assets/images/effortlessPayment.svg";
import '../../fonts/grifter.css'
import { Title } from "../basics/title";
import titleInfos from '../../data/titleInfos.json'
import { motion } from 'framer-motion';

export function Solution3 (){
    return (
        <>
            <div className="px-4 pt-[110px]">
                <div className="flex flex-col items-center gap-[90px] max-w-[1264px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.7 }}
                    >
                        <Title 
                            subTitle={titleInfos[2].subTitle} 
                            title={titleInfos[2].title}   
                            message={titleInfos[2].message}
                        />
                    </motion.div>
                    <div className="flex items-center gap-[33px] w-full justify-center">
                        <div className="max-w-[556px] w-full pl-[10px] flex flex-col gap-7">
                            
                                <div className="pl-2 flex flex-col gap-7">
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <svg class="heroicons-outline-x-mark" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12L12 4M4 4L12 12" stroke="#C0C0C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="text-[16px] font-[300] text-[#3A3A3A]">Expensive high fees and unfavorable exchange rates</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <svg class="heroicons-outline-x-mark" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12L12 4M4 4L12 12" stroke="#C0C0C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="text-[16px] font-[300] text-[#3A3A3A]">Tranfer delays and inconvenience</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <svg class="heroicons-outline-x-mark" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12L12 4M4 4L12 12" stroke="#C0C0C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="text-[16px] font-[300] text-[#3A3A3A]">Fraud and loss of funds</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <svg class="heroicons-outline-x-mark" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12L12 4M4 4L12 12" stroke="#C0C0C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="text-[16px] font-[300] text-[#3A3A3A]">Traditional in-person transactions</p>
                                    </div>
                                </div>
                                <motion.div
                                    initial={{ x: -100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
                                    viewport={{ once: true, amount: 0.7 }}
                                    className="flex items-center gap-3 bg-[#F9F9F9] max-w-[206px] w-full px-3 py-2 border border-solid border-[#c9c9c9] rounded-full"
                                >
                                    <div>
                                        <svg className="heroicons-outline-x-mark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 18L18 6M6 6L18 18" stroke="#F20C0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-[16px] font-[300] text-[#3A3A3A]">Lack of transparency</p>
                                </motion.div>
                                <div className="pl-2 flex flex-col gap-7">
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <svg class="heroicons-outline-x-mark" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12L12 4M4 4L12 12" stroke="#C0C0C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="text-[16px] font-[300] text-[#3A3A3A]">Limited payment methods</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <svg class="heroicons-outline-x-mark" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12L12 4M4 4L12 12" stroke="#C0C0C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="text-[16px] font-[300] text-[#3A3A3A]">Complex verification process</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <svg class="heroicons-outline-x-mark" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12L12 4M4 4L12 12" stroke="#C0C0C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="text-[16px] font-[300] text-[#3A3A3A]">Long payment wait times</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <svg class="heroicons-outline-x-mark" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12L12 4M4 4L12 12" stroke="#C0C0C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="text-[16px] font-[300] text-[#3A3A3A]">Hidden costs</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <svg class="heroicons-outline-x-mark" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 12L12 4M4 4L12 12" stroke="#C0C0C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <p className="text-[16px] font-[300] text-[#3A3A3A]">Currency exchange rates</p>
                                    </div>
                                
                            </div>
                        </div>
                        <Seperator />
                        <div className="bg-[#F9E8FE] rounded-[24px] pt-[48px] pb-[32px] pl-[32px] pr-[32px] ">
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true, amount: 0.7 }}
                                className="w-full max-w-[618px] flex items-center justify-center"
                            >
                                <img src={effortlessPayment} alt="" />
                            </motion.div>
                            
                            <div className="flex flex-col gap-2 max-w-[459px] mt-[30px]">
                                <h2 
                                    style={{
                                        fontFamily: 'Grifter', 
                                    }}
                                    className="text-[32px] font-bold text-[#1A1A1A]"
                                >Effortless Payments</h2>
                                <p className="text-[16px] font-[300] text-[#3A3A3A]">Simplify Your Money Management with Receive & Request Payments on FinanceFast.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}