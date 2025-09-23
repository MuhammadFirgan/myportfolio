'use client'

import { 
    BiLogoGithub, 
    BiLogoInstagram, 
    BiLogoUpwork, 
} 
from "react-icons/bi";
import Image from 'next/image';
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className='flex justify-center gap-16 flex-col lg:flex-row sm:h-screen sm:items-center'>
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 5, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='max-w-sm'>
                <h5 className='text-lg font-light'>Hi I'm</h5>
                <h1 className='text-5xl font-black '>Muhammad <br /> Firgan</h1>
                <div className='border-2 my-7'></div>
                <Link href="mailto:muhammadfirgan077@gmail.com" className=' px-10 py-3 text-lg text-white rounded-full shadow-lg bg-primary hover:bg-gradient-to-r hover:from-teal-600 hover:to-emerald-600'>Hire Me</Link>
            </motion.div>
            <div className='relative'>
              <div className='w-52 h-52 bg-primary absolute -left-10 -top-10'></div>
              <Image src='/img/imgwithbg.JPG' width={370} height={370} alt='my-image' className='drop-shadow-2xl relative' priority quality={100} />
              <div className='w-52 h-full bg-primary absolute -z-50 -right-10 -bottom-10'></div>
            </div>
            <motion.div
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 10, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='max-w-sm'>
                <h1 className='font-semibold'>Based In Indonesia <br />I'm Frontend Developer</h1>
                <p className='font-light my-4'>As a front-end developer with experience in React.js, Next, and founder of Antarctic.px. Additionally, have backend knowledge using Laravel and mobile development with React Native.</p>
                <div className="flex text-4xl gap-10 text-gray-500 cursor-pointer">
                  <Link href="https://github.com/MuhammadFirgan">
                    <BiLogoGithub className="hover:text-teal-500"/>
                  </Link>
                  <Link href="https://www.instagram.com/fir.code?igsh=MTM0ZTZxZXBzamN3dg==">
                    <BiLogoInstagram className="hover:text-teal-500" />
                  </Link>
                  <Link href="https://www.upwork.com/freelancers/~01252e7a5a4cfd8472?mp_source=share">

                    <BiLogoUpwork className="hover:text-teal-500" />
                  </Link>
                </div>
            </motion.div>
        </section>
  )
}
