"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "Full Stack",
        title: "CineConnect : A movie enthusiast's app",
        description: "A full stack web application that allows users to search for movies, view movie details, and create a watchlist.",
        stack: [{name: "Next.js"}, {name: "Tailwind CSS"}, {name: "PostgreSQL"}, {name: "Express.js"}, {name: "Node.js"}],
        image: "/assets/work/cineconnect.png",
        live: "",
        github: "https://github.com/Anonto050/CineConnect-Ultimate-Movie-Enthusiasts-Hub"
    },

    {
        num: "02",
        category: "DevOps",
        title: "VaxHub : A vaccination registration system",
        description: "A full stack web application that allows users to register for a vaccination appointment. The application uses Docker and Kubernetes for containerization and orchestration and maintains CI/CD pipelines.",
        stack: [{name: "Svelte"}, {name: "PostgreSQL"}, {name: "Express.js"}, {name: "Node.js"}, {name: "Github Actions"} ,{name: "Docker"}, {name: "Kubernetes"}],
        image: "/assets/work/vaxhub.png",
        live: "",
        github: "https://github.com/Anonto050/vaxhub"
    },

    {
        num: "03",
        category: "Compilers",
        title: "A subset of the C compiler",
        description: "A compiler that translates a subset of the C programming language to x86 assembly language.",
        stack: [{name: "C"}, {name: "Flex"}, {name: "Bison"}],
        image: "/assets/work/compiler.png",
        live: "",
        github: "https://github.com/Anonto050/CSE-310-Compiler"
    
    }
];

const Work = () => {

    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        
        const currentIndex = swiper.activeIndex;

        setProject(projects[currentIndex]);
    }

    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } 
        }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]"> 
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline number */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>

                            {/* category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>

                            {/* project description */}
                            <p className="text-white/60">
                                {project.description}
                            </p>

                            {/* stack */}
                            <ul className="flex flex-wrap gap-x-2 gap-y-4">
                                {project.stack.map((item, index) => (
                                    <li key={index} className="text-xl text-accent">
                                    {item.name}
                                    {index !== project.stack.length - 1 && ", "}
                                    </li>
                                ))}
                            </ul>


                            {/* border */}
                            <div className="border border-white/20"></div>

                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                   
                                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
          
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* github */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                                                    <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>View code on GitHub</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex items-center justify-center bg-pink-50/20">
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">

                                            </div>

                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} alt={project.title} fill className="object-cover" />    
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            }
                            )}

                            {/* slide buttons */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex items-center justify-center transition-all duration-300" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Work;