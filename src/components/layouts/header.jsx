import { CTA } from "../basics/CTA";
import { NavBar } from "../basics/navBar";
import '../../fonts/grifter.css';
import phones from '../../assets/images/phones.svg';
import { motion } from 'framer-motion';

export function Header() {
    return (
        <>
            <div className="px-4 bg-[#F9F9F9]">
                <div className="flex flex-col items-center gap-[130px] max-w-[1264px] mx-auto">
                    <NavBar />
                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center gap-[40px]"
                    >
                        <div className="flex flex-col items-center gap-5">
                            <motion.h1 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="text-center text-[48px] font-bold max-w-[928px] leading-[48px]"
                                style={{ fontFamily: 'GRIFTER' }}
                            >
                                Simplify Your International Transactions With <span className="bg-gradient-to-t from-[#563ACC] to[#6364FF] bg-clip-text text-transparent">One Platform</span>
                            </motion.h1>
                            <motion.p 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 1 }}
                                className="text-center text-[18px] font-regular max-w-[644px]"
                            >
                                Say Goodbye to Hassles of Traditional Money Transfers. FinanceFast allows you effortlessly transfer money anywhere in the world with confidence and ease.
                            </motion.p>
                        </div>
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 1 }}
                        >
                            <CTA />
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 1 }}
                    >
                        <img src={phones} alt="" />
                    </motion.div>
                </div>
            </div>
        </>
    );
}
