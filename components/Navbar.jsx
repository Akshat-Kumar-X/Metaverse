'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="xPaddings py-8 relative"
  >
    <div className="gradient-01 absolute inset-0 w-[50%]" />
    <div className="innerWidth mx-auto flex justify-between gap-8">
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-white text-[24px] leading-[30px]">
        METAVERSUS
      </h2>
      <div className="flex gap-2.5 items-center">
        <Link href="https://github.com/Akshat-Kumar-X" target="_blank">
          <button
            type="button"
            className="rounded-full font-semibold bg-[#323232] py-1.5 px-2 text-sm text-white transition-all shadow-md hover:scale-110"
          >
            <img src="/github.svg" alt="github" />
          </button>
        </Link>
        <Link href="https://www.linkedin.com/in/akshat-kumar-86203224a/" target="_blank">
          <button
            type="button"
            className="rounded-full font-semibold py-2 px-2.5 bg-[#0A66C2] text-sm text-white transition-all shadow-md hover:scale-110"
          >
            <img src="/linkedin.svg" alt="linkedin" />
          </button>
        </Link>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
