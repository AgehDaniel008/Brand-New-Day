import React from 'react';
import assets from '../assets/assets (1)';
import Title from './Title';
import ServiceCard from './ServiceCard';
import { motion } from "motion/react";

const Services = () => {
    const serviceData = [
        {
            title: "Web Development",
            description: "Custom web applications built with the latest technologies.",
            icon: assets.airbnb_logo
        },
        {
            title: "Mobile Development",
            description: "Native and cross-platform mobile applications for iOS and Android.",
            icon: assets.Mobile
        },
        {
            title: "UI/UX Design",
            description: "Beautiful and intuitive user interfaces designed for optimal user experience.",
            icon: assets.webDev
        },
        {
            title: "SEO Optimization",
            description: "For better online visibility and easier search engine optimization",
            icon: assets.Seo
        }
    ];

    return (
        <motion.div 
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
        id='services' className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-black dark:text-white">
            <img src={assets.bgImage2} alt="" className="absolute -top-119 -left-70 -z-1 dark:hidden" />

            <Title title='How can I help ?' desc='From strategy to execution we craft digital solutions that move your business forward' />

            <div className='flex flex-col md:grid grid-cols-2'>
                {serviceData.map((service, index) =>(
                    <ServiceCard key={index} service={service} index={index}/>
                ))}
            </div>
        </motion.div>
    )
}

export default Services;