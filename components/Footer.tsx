import Link from "next/link";
import { BiLogoGithub, 
  BiLogoInstagram,  
  BiLogoUpwork } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-zinc-100 p-16">
        <h1 className="text-3xl font-semibold ">Get In Touch</h1>
        <span className="my-6 block">Contact me for bussiness in muhammadfirgan077@gmail.com</span>
        <div className="flex text-4xl gap-10  cursor-pointer text-zinc-100">
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
    </footer>  
  )
}
