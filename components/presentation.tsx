import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { Mail, Paperclip } from "lucide-react";

export const Presentation = () => {
    return (
        <div className="text-center" id="home">
            <h3 className="text-xl mb-3">Hello 👋, I´m</h3>
            <h1 className="text-4xl font-bold mb-3">Benjamín Carías 🧑🏽‍💻</h1>
            <h2 className="text-2xl text-gray-400">Software Developer</h2>
            <div className="flex items-center">
                <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
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
            <Image src="" alt="Profile pic" width={500} height={500} />
        </div>
    );z
}
