import { motion } from 'framer-motion';
import cta from '../../assets/images/CTA.svg';
import receive from '../../assets/images/reveive.svg';
import sent from '../../assets/images/sent.svg';
import convert from '../../assets/images/convert.svg';  
import stone from '../../assets/images/stone.svg';

const floatingVariants1 = {
    initial: { y: 0 },
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
        },
    },
};

const floatingVariants2 = {
    initial: { y: 0 },
    animate: {
        y: [0, -15, 0],
        transition: {
            duration: 2.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
        },
    },
};

const floatingVariants3 = {
    initial: { y: 0 },
    animate: {
        y: [0, -20, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
        },
    },
};

const floatingVariants4 = {
    initial: { y: 0 },
    animate: {
        y: [0, -12, 0],
        transition: {
            duration: 2.2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
        },
    },
};

export function CallToAction() {
    return (
        <>
            <div className='px-4 pt-[132px]'>
                <div
                    style={{
                        backgroundImage: `url(${cta})`,
                    }}
                    className='relative max-w-[1264px] w-full min-h-[432px] bg-cover bg-center flex items-center mx-auto'
                >
                    <div className='flex flex-col gap-6 ml-[54px]'>
                        <h2 
                            style={{
                                fontFamily: 'Grifter',
                            }}
                            className='text-bold font-bold text-white text-[40px] max-w-[729px] leading-[48px]'
                        >Make International Payments a Breeze with FinanceFast</h2>
                        <div className='flex items-center gap-[54px]'>
                            <div className='flex items-center gap-3'>
                                <div className='flex items-center justify-center'>
                                    <svg className="heroicons-outline-check" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.5 13.25L10.5 19.25L19.5 5.75" stroke="#EDEDED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className='text-[20px] font-[300] text-white'>No hidden fees</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='flex items-center justify-center'>
                                    <svg className="heroicons-outline-check" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.5 13.25L10.5 19.25L19.5 5.75" stroke="#EDEDED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className='text-[20px] font-[300] text-white'>Secure transactions</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='flex items-center justify-center'>
                                    <svg className="heroicons-outline-check" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.5 13.25L10.5 19.25L19.5 5.75" stroke="#EDEDED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className='text-[20px] font-[300] text-white'>Fast transfers</p>
                            </div>
                        </div>
                    </div>
                    <motion.div 
                        className='absolute right-[170px] top-[107px]'
                        variants={floatingVariants1}
                        initial="initial"
                        animate="animate"
                    >
                        <img src={receive} alt="" />
                    </motion.div>
                    <motion.div 
                        className='absolute right-[40.17px] top-[195.64px]'
                        variants={floatingVariants2}
                        initial="initial"
                        animate="animate"
                    >
                        <img src={sent} alt="" />
                    </motion.div>
                    <motion.div 
                        className='absolute right-[95px] bottom-[73px]'
                        variants={floatingVariants3}
                        initial="initial"
                        animate="animate"
                    >
                        <img src={convert} alt="" />
                    </motion.div>
                    <motion.div 
                        className='absolute right-[39px] top-[74px]'
                        variants={floatingVariants4}
                        initial="initial"
                        animate="animate"
                    >
                        <img src={stone} alt="" />
                    </motion.div>
                </div>
            </div>
        </>
    );
}
