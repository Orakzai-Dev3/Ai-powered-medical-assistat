import React from 'react'
import ReactMarkdown from "react-markdown";
import PDF_comp from './PDF_comp'
import Loading from './Loading';

function Chat_bubble({value }) {
  console.log(value)
  return (

    <div   className="flex flex-col-reverse gap-4 p-6">

  {/* Bot Message */}
  <div className="flex justify-start">
   {value.Ai == 'loading' ? <Loading/> : value.Ai && (<div className="max-w-[70%] whitespace-pre-wrap bg-white px-4 py-3 rounded-2xl shadow">
      {/* Hello Its and Medical Ai Assistant How can I help you today? */} 
      <ReactMarkdown>
        {value.Ai}
      </ReactMarkdown>
        
    </div>)}
  </div>

  {/* User Message */}
  <div className="flex flex-col items-end ">
    
   {value.Human && (<div className="max-w-[70%] font-  bg-[#15422D] text-white px-4 py-3 rounded-2xl shadow">
      {/* Summarize my uploaded report.  */}{value.Human}
    </div>)}
   {value.files.name &&  <PDF_comp files={value.files} />}
   
  </div>
  
  </div>
  )
}

export default Chat_bubble