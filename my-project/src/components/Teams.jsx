import React from "react";
import Title from "./Title";
import { teamData } from "../assets/assets (1)";
import { motion } from "motion/react";

const Teams = () => {
    return(

        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChild: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-black dark:text-white"
        >
            <Title title='Meet the team' desc='A passionate Team of Digital experts that deliver on time'/>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                {teamData.map((team, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-gray-white/5 hover:scale-103 tranisition-all duration-400"
                    >
                        <img src={team.image} className="w-12 h-12 rounded-full" alt="" />
                        <div className="flex-1">
                            <h3 className="fi=ont-bold text-sm">{team.name}</h3>
                            <p className="text-xs dark:opacity-60">{team.title}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>

    )
}

export default Teams