import React from "react";
import { motion } from "motion/react";

export default function Marquee({ companies, start, end }){
    return (
        <>
            <motion.div 
                initial={{ x: start }}
                animate={{ x: end }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0">
                    {companies.map((company, index) => {
                        return <img className="h-12 pr-20" src={company} key={index} />
                    })}
            </motion.div>
            <motion.div 
                initial={{ x: start }}
                animate={{ x: end }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0">
                    {companies.map((company, index) => {
                        return <img className="h-12 pr-20" src={company} key={index} />
                    })}
            </motion.div>
        </>
    )
}