import { CarouselItem } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image';
import Link from "next/link";

interface CarouselProps {
    img: string;
    title: string;
    link: string;
}

export default function Carousel({ img, title, link } : CarouselProps) {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        <figure>
            <Image width={400} height={400} src={img} alt={`My Project | ${title}`} className='rounded-lg' />
            <figcaption className="text-center">
                <h1 className='my-5 text-center text-xl italic font-semibold'>{title}</h1>
                <Link href={link}>
                    <Badge variant="primary">View Demo</Badge>
                </Link>
            </figcaption>
        </figure>
    </CarouselItem>
  )
}
