import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { Mail, Paperclip } from "lucide-react";
import Container from "./container";


export const Presentation = () => {
    return (
        <Container>
            <div className="text-center md:text-left mb-10 md:mb-0">
                <h3 className="text-xl mb-3">Hello 👋, I´m</h3>
                <h1 className="text-4xl font-bold mb-3">Benjamín Carías 🧑🏽‍💻</h1>
                <h2 className="text-2xl text-gray-400">Software Developer</h2>
                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-10 mx-auto">
                    <Link className={buttonVariants()} href="#contact">
                        <Mail className="mr-2" /> Contact Me
                    </Link>

                    <Link className={buttonVariants({ variant: 'secondary' })}
                        href="/cv-tarre.pdf"
                        target="_blank">
                        <Paperclip className="mr-2" /> Download CV
                    </Link>
                </div>
            </div>
            <div className="">
                <Image src="/avatar_flash.png" alt="Profile pic" width={230} height={230} />
            </div>
        </Container>

    );
}
