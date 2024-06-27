import React from 'react';
import { motion } from 'framer-motion';
import ihuffposti from '../../assets/images/ihuffposti.svg';
import bloomberg from '../../assets/images/bloomberg.svg';
import techcrunch from '../../assets/images/techcrunch.svg';
import harvard from '../../assets/images/harvard.svg';
import combinator from '../../assets/images/combinator.svg';
import fastCompagny from '../../assets/images/fastCompagny.svg';

export function Sponsors() {
  const logos = [
    ihuffposti,
    bloomberg,
    techcrunch,
    harvard,
    combinator,
    fastCompagny,
  ];

  const scrollAnimation = {
    x: ['0%', '-100%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20,
        ease: 'linear',
      },
    },
  };

  return (
    <div className="flex items-center py-[40px] bg-[#E5DBFB] gap-[80px] pl-[80px] z-50">
      <p className="max-w-[320px] text-[18px] font-[500] text-[#3A3A3A]">
        We're have been recognized by Leading Finance Publications and Organizations.
      </p>
      <div className="relative flex overflow-hidden w-full">
        <motion.div className="flex" animate={scrollAnimation}>
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="" className="mr-[90px]" />
          ))}
          {logos.map((logo, index) => (
            <img key={index + logos.length} src={logo} alt="" className="mr-[90px]" />
          ))}
        </motion.div>
      </div>
    </div>
  );
}