import { dataAboutMe, dataSlider } from "@/data";
import Title from "./shared/title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";

export const About = () => {
    return (
        <section className="p-6 my-16 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
            <Title title="Know Me" subtitle="About Me" />

            <div className="grid md:grid-cols-2">
                <div className="py-12 my-8 md:py-0 flex items-center justify-center">
                   <Carousel opts={{ align: 'start' }} orientation="vertical" className="w-full max-w-xs h-fit">
                       <CarouselContent className="-mt-1 h-[200px]">
                            {
                                dataSlider.map( (data) => (
                                    <CarouselItem key={ data.id }>
                                        <div className="flex items-center justify-center">
                                            <Image src={ data.url } alt="Image" width={250} height={400} className="w-full h-auto rounded-lg"/>
                                        </div>
                                    </CarouselItem>
                                ))
                            }
                       </CarouselContent> 
                       <CarouselPrevious/>
                       <CarouselNext/>
                   </Carousel> 
                </div>
                <div>
                    <div className="grid md:grid-cols-3 md:mt-7 gap-4">
                        {
                            dataAboutMe.map( ( data ) => (
                                <div key={ data.id } className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800">
                                    {data.icon}
                                    <p className="my-2">{ data.name }</p>
                                    <p className="text-gray-400">{ data.description }</p>
                                </div>
                            ))
                        }
                    </div>
                    <p className="my-8 md:my-10 text-justify">Soy un apasionado desarrollador de software con una curiosidad insaciable por la tecnología. Estoy constantemente buscando aprender nuevas tecnologías y técnicas para mejorar mis habilidades y enfrentar desafíos cada vez más complejos. Fuera del trabajo me gusta jugar al fútbol y ver animes.</p>
                </div>
            </div>
        </section>
    );
}
