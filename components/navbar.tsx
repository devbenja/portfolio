import { itemsNavbar } from "@/data";
import Link from "next/link";


export const NavBar = () => {
    return (
        <nav className="fixed z-20 flex flex-row items-center justify-center mt-auto h-max w-full bottom-20 lg:flex-row lg:items-center lg:justify-start lg:h-full lg:bottom-0 lg:pl-10">
            <div className="flex flex-row items-center gap-8 lg:gap-3 justify-center lg:flex-col px-4 py-1 dark:bg-white/10 bg-slate-800/10 backdrop-blur-md rounded-full">
                {itemsNavbar.map((item) => (
                    <div key={item.id} className="cursor-pointer hover:dark-bg-slate-800 hover:bg-slate-400 py-3 px-3 md:px-1 rounded-full transition duration-150">
                        <Link href={item.link}>{item.icon}</Link>
                    </div>
                ))}
            </div> 
        </nav>
    );
}