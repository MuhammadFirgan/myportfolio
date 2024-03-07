import { CarouselItem } from "@/components/ui/carousel"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Badge } from "@/components/ui/badge"
import Image from 'next/image';

export default function Carousel() {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        <figure>
            <img src="/img/project1.png" alt="" className='rounded-lg' />
            <figcaption className="text-left">
                <h1 className='mt-5 text-center text-xl italic font-semibold'>Company Profile</h1>
                <div className="text-center my-4">

                    <Dialog>
                        <DialogTrigger className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-offset-2 dark:border-gray-800 dark:focus:ring-gray-300 cursor-pointer bg-gradient-to-r from-teal-500 to-emerald-500 hover:bg-gradient-to-r hover:from-teal-600 hover:to-emerald-600 text-white mr-7">Open</DialogTrigger>
                        <Badge variant="outline">View Demo</Badge>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Company Profile</DialogTitle>
                                <DialogDescription>
                                    <figure className="">
                                        <Image src="/img/project1.png" width={200} height={50} alt="company profile" className="object-contain"/>
                                        <figcaption>
                                           <strong>Next Js | Typescript | Tailwind CSS</strong> <br />
                                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Et explicabo cum temporibus dolorum aut possimus soluta! Aspernatur, sequi illum perspiciatis impedit dolorum soluta placeat iure quos dolore rerum, adipisci corrupti.
                                        </figcaption>
                                    </figure>
                               
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                    
                </div>
            </figcaption>
        </figure>
    </CarouselItem>
  )
}
