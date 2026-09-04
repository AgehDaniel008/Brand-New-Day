import company1 from '../assets/slack-logo-svgrepo-com.svg';
import company2 from '../assets/google-icon-logo-svgrepo-com.svg';
import company3 from '../assets/microsoft-logo-svgrepo-com.svg';
import company4 from '../assets/arrow_icon (1).svg';
import company5 from '../assets/tinder-1-logo-svgrepo-com.svg';
import { motion } from "motion/react"

const company_logos = [company1, company2, company3, company4, company5];

const TrustedBy = () => {
    return (
        <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white/80">
            <motion.h3
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-semibold">
                Trusted By Leading Companies
            </motion.h3>

            <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
                 className="flex items-center justify-center flex-wrap gap-10 m-4">
                {company_logos.map((logo, index) => (
                   
                        <motion.img
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.4 }}
                        key={index}
                        src={logo} alt={`Company ${index + 1}`} className="max-h-16 sm:max-h-17 dark:drop-shadow" />
                ))}
            </motion.div>
        </motion.div>
    )
}

export default TrustedBy;