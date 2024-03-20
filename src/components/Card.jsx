import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}}  className={`relative h-56 w-[175px] z-30 px-4 pt-5 overflow-hidden text-white rounded-[30px] bg-[#1c1b1b]`}>
      <FaRegFileAlt />
      <div className='h-[130px] mt-3 overflow-y-scroll hide'>
      <p className='text-[12px] '>{data.notes}</p>
      </div>
      <div className={`absolute flex items-center justify-center bottom-0 ${data.color} left-0 h-10 w-full`}>
        <p className={`text-sm text-black font-semibold r mb-1`}>{data.tag}</p>
      </div>
    </motion.div>
  )
}

export default Card