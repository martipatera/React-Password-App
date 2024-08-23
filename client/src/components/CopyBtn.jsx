import React, { useState } from 'react'
import { FaRegCopy } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";




function CopyBtn(props) {//pres props posilam heslo, kazdy button ma svoje heslo

  const [copy, setCopy] = useState(<FaRegCopy/>)

    const handleCopy = (e) =>{
        e.preventDefault()
        navigator.clipboard.writeText(props.password)//zkopiruje do schranky props heslo
        setCopy(<IoMdCheckmark/>)
        setTimeout(() => {
          setCopy(<FaRegCopy/>)
          
        }, 2000)

      
    }
    
  return (
    <div className='flex items-center justify-center border rounded-full px-2 py-1 text-sm border-pink-500 bg-pink-400 text-white font-semibold hover:bg-pink-500 transition-colors' >
      <button className='text-xl' onClick={handleCopy}>{copy}</button>
    </div>
  )
}

export default CopyBtn
