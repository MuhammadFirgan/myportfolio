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
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Card from '@/components/Card';

import Home from "./Home";

export default function page() {

  
  return (
    <main className='p-10 !text-white'>
        <Home />
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
            <span className="my-5 text-gray-200 block">These are some of the projects I have made</span>
          </div>
          <div className="px-10 my-10">
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
                <Card img="/img/project1.png" title="Company Profile" link="" />
                <Card img="/img/project2.png" title="VR Landing Page" link="https://vr-landing-page-ten.vercel.app/" />
                
                
                
                
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

        </section>
    </main>
  )
}
