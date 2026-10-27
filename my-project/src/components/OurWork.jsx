import React from 'react';
import Title from './Title';
import assets from '../assets/assets (1)';
import { motion } from "motion/react"

const OurWork = () =>{

    const workData = [
        {
            title:'Mobile app Marketing',
            description:'We turn bold ideas into powerful digital solutions that connect, engage...',
            image: assets.work_mobile_app
        },
          {
            title:'Dashboard management',
            description:'We help you plan your next step',
            image: assets.work_dashboard_management
        },
          {
            title:'Fitness',
            description:'We help create a strategy that works for you and your business',
            image: assets.work_fitness_app
        },
    ]

    return(
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChild: 0.2 }}
            viewport={{ once: true }} 
            id='our-works' 
            className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-black dark:text-white'
            >
            <Title title='Our latest work' desc='From strategy execution, we craft digital solution that move your business forward'/>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
                {
                    workData.map((work, index)=>(
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className='hover:scale-102 duration-500 transition-all cursor-pointer'
                        >
                            <img src={work.image} className="w-full rounded-xl" alt="" />
                            <h3 className='mt-3 mb-2 text-lg font-medium'>{work.title}</h3>
                            <p className='text-sm dark:opacity-60 w-5/6'>{work.description}</p>
                        </motion.div>
                    ))
                }

            </div>
        </motion.div>
    )
}

export default OurWork