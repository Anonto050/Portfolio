"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

import { motion } from "framer-motion";


const services = [
    {
        num : '01',
        title : 'Web Development',
        description : 'We build websites that are optimized for speed, SEO, and conversion. Our websites are designed to be user-friendly and easy to navigate.',
        href : ""
    },

    {
        num : '02',
        title : 'Mobile App Development',
        description : 'We develop mobile apps that are optimized for speed, SEO, and conversion. Our mobile apps are designed to be user-friendly and easy to navigate.',
        href : ""
    },

    {
        num: '03',
        title: 'SEO',
        description: 'We provide SEO services that are optimized for speed, SEO, and conversion. Our SEO services are designed to be user-friendly and easy to navigate.',
        href: ""
    },


    {
        num: '04',
        title: 'E-commerce Development',
        description: 'We provide e-commerce development services that are optimized for speed, SEO, and conversion. Our e-commerce development services are designed to be user-friendly and easy to navigate.',
        href: ""
    },
];
    

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4 , ease: 'easeIn' } }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >

                {services.map((service, index) => {
                    return (
                        <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                    {service.num}
                                </div>

                                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex items-center justify-center hover:-rotate-45">
                                    <BsArrowDownRight className="text-primary text-3xl" />
                                </Link>
                            </div>

                            {/* Heading */}

                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                {service.title}
                            </h2>

                            {/* Description */}
                            <p className="text-white/60 group-hover:text-white transition-all duration-500">
                                {service.description}
                            </p>

                            {/* Border */}

                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    );
                }
                )}
                </motion.div>
            </div>
        </section>
    );
    };

export default Services;