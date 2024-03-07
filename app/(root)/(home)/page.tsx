import { 
  BiLogoGithub, 
  BiLogoInstagram, 
  BiLogoUpwork, 
  BiLogoHtml5, 
  BiLogoCss3, 
  BiLogoReact, 
  BiLogoTailwindCss, 
  BiLogoTypescript,
  BiSolidMobile,
  BiSolidGroup,
  BiSolidStar,
  BiGitBranch
 } 
from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



import Image from 'next/image';
import Card from '../../../components/Card';
import Button from "@/components/Button";
import Link from "next/link";

export default function page() {

  
  return (
    <main className='p-10 !text-stone-800'>
        <section className='flex justify-center gap-16 flex-col lg:flex-row sm:h-screen sm:items-center'>
            <div className='max-w-sm'>
                <h5 className='text-lg font-light'>Hi I'm</h5>
                <h1 className='text-5xl font-black '>Muhammad <br /> Firgan</h1>
                <div className='border-2 my-7'></div>
                <Link href="mailto:muhammadfirgan077@gmail.com" className=' px-10 py-3 text-lg text-white rounded-full shadow-lg bg-gradient-to-r from-teal-500 to-emerald-500 hover:bg-gradient-to-r hover:from-teal-600 hover:to-emerald-600'>Hire Me</Link>
            </div>
            <div className='relative'>
              <div className='w-52 h-52 bg-gradient-to-r from-teal-500 to-emerald-500 absolute -left-10 -top-10'></div>
              <Image src='/img/imgwithbg.JPG' fill alt='my-image' className=' drop-shadow-2xl realtive' />
              <div className='w-52 h-full bg-gradient-to-r from-teal-500 to-emerald-500 absolute -z-50 -right-10 -bottom-10'></div>
            </div>
            <div className='max-w-sm'>
                <h1 className='font-semibold'>Based In Indonesia <br />I'm Frontend Developer</h1>
                <p className='font-light my-4'>As a front-end developer with experience in React.js, Next, and founder of Antarctic.px. Additionally, have backend knowledge using Laravel and mobile development with React Native.</p>
                <div className="flex text-4xl gap-10 text-gray-500 cursor-pointer">
                  <Link href="https://github.com/MuhammadFirgan">
                    <BiLogoGithub className="hover:text-teal-500"/>
                  </Link>
                  <Link href="">
                    <BiLogoInstagram className="hover:text-teal-500" />
                  </Link>
                  <Link href="https://www.upwork.com/freelancers/~01252e7a5a4cfd8472?mp_source=share">

                    <BiLogoUpwork className="hover:text-teal-500" />
                  </Link>
                </div>
            </div>
        </section>
        <section className="py-20 sm:py-24">
          <div className='flex justify-center gap-20 text-6xl flex-wrap'>
            <BiLogoHtml5 className="text-orange-500" />
            <BiLogoCss3 className="text-blue-500"/>
            <BiLogoTypescript className="text-blue-600" />
            <BiLogoTailwindCss className="text-sky-500" />
            <BiLogoReact className="text-sky-600" />
            <SiNextdotjs />
          </div>
          <div className="flex flex-col justify-center items-center my-20 gap-7 lg:flex-row">
            <div className="max-w-md">
              <h1 className='font-semibold text-[65px] drop-shadow-md'>Why Hire <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500">Me</span> for Your Next <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500">Project</span></h1>
            </div>
            
            <div className="flex items-center flex-wrap justify-center gap-5 max-w-3xl">
              <div className="max-w-xs min-h-56 flex flex-col gap-3 justify-center px-7 border-2 border-teal-500 rounded-xl">
                <BiSolidMobile className='text-3xl text-teal-500' />
                <h3 className="text-xl font-semibold">Responsiveness Development</h3>
                <span className="text-sm">create websites that can run on various devices and screen sizes</span>
              </div>
              <div className="max-w-xs min-h-56 flex flex-col gap-3 justify-center px-7 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl">
                <BiSolidGroup className='text-3xl text-white' />
                <h3 className="text-xl font-semibold">Collaborative</h3>
                <span className="text-sm">Collaborate with teams to develop high-performance applications</span>
              </div>
              <div className="max-w-xs min-h-56 flex flex-col gap-3 justify-center px-7 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl">
                <BiSolidStar className='text-3xl text-white' />
                <h3 className="text-xl font-semibold">Focusing in popular framework</h3>
                <span className="text-sm">I have an understanding of popular frameworks such as React and NextJS</span>
              </div>
              <div className="max-w-xs min-h-56 flex flex-col gap-3 justify-center border-2 border-teal-500 px-7 rounded-xl">
                <BiGitBranch className='text-3xl text-teal-500'/>
                <h3 className="text-xl font-semibold">Multitalent</h3>
                <span className="text-sm">I am not only good in frontend language but also have knowledge in backend using Laravel as well as mobile app with React Native.</span>
              </div>
            </div>
           
          </div>
          
        </section>
        <section className="mb-28">
          <div>
            <h1 className="text-5xl font-semibold">My <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500 drop-shadow-md">Projects</span></h1>
            <span className="my-5 text-gray-700 block">These are some of the projects I have made</span>
          </div>
          <div className="px-10">
            <Carousel>
              <CarouselContent>
                {/* <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <figure>
                      <img src="/img/project1.png" alt="" className='rounded-lg' />
                      <figcaption className="text-left">
                          <h1 className='mt-5 text-center text-xl italic font-semibold'>Company Profile</h1>
                          <div className="text-center my-4">

                            <Dialog>
                              <DialogTrigger className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-offset-2 dark:border-gray-800 dark:focus:ring-gray-300 cursor-pointer bg-gradient-to-r from-teal-500 to-emerald-500 hover:bg-gradient-to-r hover:from-teal-600 hover:to-emerald-600 text-white">Open</DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                                  <DialogDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                  </DialogDescription>
                                </DialogHeader>
                              </DialogContent>
                            </Dialog>

                            <Badge variant="outline">View Demo</Badge>
                          </div>
                      </figcaption>
                  </figure>
                </CarouselItem> */}
                <Card />
                
                
                
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

        </section>
    </main>
  )
}
