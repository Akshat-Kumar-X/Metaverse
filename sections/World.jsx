'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from "../components"

const World = () => (
  <section className="paddings relative z-10">
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false,  amount: 0.25 }}
      className='innerWidth mx-auto flex  flex-col'
    >
      <TypingText 
        title='| People on the World' 
        textStyles="text-center"
      />
      <TitleText 
        title={
          <>
            Track friends around you and play together in the same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex w-full h-[550px]'
      >
        <img 
          src="/map.png" 
          alt="map"
          className='w-full h-full object-cover' 
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="people" className='w-full h-full'/>
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="people" className='w-full h-full'/>
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="people" className='w-full h-full'/>
        </div>
        <div className="absolute bottom-52 left-20 w-[150px] h-[120px] p-[10px]  rounded-2xl">
          <img src="/planet-06.png" alt="world" className='w-full h-full rounded-2xl object-cover  shadow-xl'/>
        </div>
        <div className="absolute top-15 right-20 w-[150px] h-[120px] p-[10px]  rounded-2xl">
          <img src="/planet-02.png" alt="world" className='w-full h-full rounded-2xl object-cover  shadow-xl '/>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
