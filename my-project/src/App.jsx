import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { useRef } from 'react'

import './App.css'
import Chat_bubble from './Components/Chat_bubble'
import { AiOutlineSend } from 'react-icons/ai'
import Chat_pdf from './Components/Chat_pdf'
import Chat from './Pages/Chat'
import Home from './Pages/Home'
// import Routes from './Routes/Routes'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'

// function App() {
//   const fileRef = useRef(null);
//   const [count, setCount] = useState(0)
//   const [uploadStatus,SetUploadStatus] = useState('')
//   const [QresLoading,setQresLoading] = useState(false)
//   const [File,setFile] = useState(null)
//   const [Query,SetQuery]= useState('')
//   const [chat,Setchat]= useState([{
//          'Human':'',
//          'Ai':'',
//          'files' : ''

//   }])
//   console.log(Array.isArray(chat));
//   console.log(chat);

   
//   function Handle_file_hange(e){
//     console.log("FIRED");
//     let selected_file = e.target.files[0]
//     console.log(selected_file.name)
//     if (!selected_file) return ;
//     if(selected_file.type !== 'application/pdf') {
//       return alert('select only pdf files')
//     }
//     setFile(selected_file)
//     console.log('file_uploaded',selected_file.name)
//     alert('File uploaded')
//     e.target.files = null
//     fileRef.current.value = null

//   }
//  async function Handle_Query_Submit(e){
//   try{
//    let tempMessage ={
//     Human : Query,
//     Ai:'loading',
//     files:{ name : File?.name || '',
//       size:File?.size || ''
//     }
//    }
//    Setchat((prev)=>[...prev,tempMessage])
//     setQresLoading(true)
//     let formData = new FormData()
//     formData.append('query',Query)
//     setFile(null)
//      SetQuery('')
    
//     let response = await fetch('http://127.0.0.1:8000/ask-question/',{
//       method:'POST',
//       body:formData
//     })
//      if(!response.ok){
//          throw new Error('upload failed')
        
//        }

//     let res = await response.json()
//     console.log('check ==1')
    
//       console.log('Ai',res)
//       Setchat((prev)=>
//         prev.map((item,index)=>
//         index===prev.length-1?
//       {...item,Ai:res?.result?.answer}
//       :item))

      
//     setQresLoading(false)
//      console.log(res)
//     //  setFile(null)
//     //  SetQuery('')
    



//   }catch(e){
//     console.log('errore',e)
//     Setchat((prev)=>
//       prev.map((item,index)=>
//       index === prev.length-1?
//       {...item,Ai:'Something went wrong...'}:item))
//       setFile(null)
//      SetQuery('')

//   }

//   }
// //   console.log(File)
// //  console.log(Query)
//   function On_change(e){
//     SetQuery(e.target.value)}
  
//   async function FileUpload(File){
//     if(!File) return ;
     
//     try{
//       SetUploadStatus('loading')
//       let Upload_file = new FormData()
//       Upload_file.append('files',File)

//       let res = await fetch('http://127.0.0.1:8000/upload-pdf/',{
//         method:'POST',
//         body:Upload_file
//       })
//       if(!res.ok){
//         throw new Error('upload failed')
//       }
//       SetUploadStatus('success') 

//     }catch(e){
//       SetUploadStatus('error')
//       console.log('error in uploading file',e)
//     }
//   }
//   useEffect(()=>{
//     FileUpload(File)
//   },[File])
  

//   return (
//     <>
//     <div>
//       <div className='flex flex-col  items-center'>
//         <h1 className='text-center text-4xl capitalize text-[#15422D] font-semibold py-5'>interactive health assistant</h1>
//         <p className='w-[50%] text-md font-sans text-center '>Upload medical reports, prescriptions, or healthcare documents and receive intelligent answers through our AI-powered RAG Medical Assistant.</p>
//       </div>

//       {/* chat section  */}
//       <div className='w-[80%] justify-between m-auto relative bg-[#F3F5F4] mt-6 h-[75vh] flex flex-col  shadow-2xl '>
//        <div className='overflow-y-scroll scrollbar-thumb-[#15422D]'>
//         <div className="w-full py-4 px-6 flex justify-between items-center border-b border-[#E4E7E5] bg-white">
//     <div className="flex items-center gap-3">
//       <div className="w-10 h-10 rounded-full bg-[#15422D] text-white flex items-center justify-center">
//         AI
//       </div>
//       <div>
//         <h3 className="font-semibold text-[#15422D]">
//           AI Medical Assistant
//         </h3>
//         <p className="text-xs text-gray-500">
//           Online • Ready to help
//         </p>
//       </div>
//     </div>


// <button onClick={()=>Setchat([{
//   Human : '',
//   Ai:'',
//   files:{
//     name:'',
//     size:''
//   }
// }])}
    
    
//      className="px-4 py-2 bg-white border cursor-pointer border-[#E4E7E5] text-sm rounded-lg hover:bg-gray-50">
//   Reset Chat
// </button>


//      </div >
//      {/* chat components */}
//      <div className="flex flex-col gap-4 p-6">

//   {/* Bot Message */}
//   <div className="flex justify-start">
//     <div className="max-w-[70%] bg-white px-4 py-3 rounded-2xl shadow">
//       🩺 Welcome! I'm your Medical AI Assistant, here to help with your health-related questions. What would you like to know today?
//     </div>
//   </div>

//   </div>
//   {
//     chat.map((item,index)=>{return <Chat_bubble key={index} value={item}/>})
//   }
     
     
//      </div>
//      <div className='justify-self-end px-4 pb-2'>
//       {
//   File && (
//     <div>
//       {uploadStatus === 'loading' && <p className='text-sm text-green-800 pl-2'>uploading ...</p>
//       }
//       {uploadStatus === 'error' && <p className='text-sm text-red-800 pl-2'>error in uploading file</p>}
//       {uploadStatus === 'success' && <p className='text-sm text-green-800 pl-2'>file uploaded successfully</p>
//       }
      
      
//       <Chat_pdf File={File} setFile={setFile}/>
    
//     </div>
//   )
// }
//       <div className="flex items-center  gap-2">
//         {/* file section  which is hidden */}

//       <input
//         ref={fileRef}
//         type="file"
//         accept=".pdf"
//         className="hidden"
//         onChange={Handle_file_hange}
//       />

//       <button
//         onClick={() => fileRef.current.click()}
//         className="w-10 h-10 rounded-full shadow-2xl hover:cursor-pointer bg-[#e3e7e5]"
//       >
//         📎
//       </button>
//     {/* input section which is visibel */}
//       <input
//         type="text"
//         placeholder="Ask about your document..."
//         value={Query}
//         onChange={On_change}
//         className="flex-1 border-[#15422D]  rounded-xl px-4 py-3 outline-[#15422D]"
//       />
//       {Query?
//       <button onClick={Handle_Query_Submit} disabled={!Query}  className="px-5 py-3 bg-[#15422D] text-white rounded-xl">
//         <AiOutlineSend/>
//       </button>:<div className='px-5 py-3 bg-[#15422D] rounded-xl hover:cursor-not-allowed'><AiOutlineSend className=' text-gray-500 hover:cursor-not-allowed'/></div>}

//        </div>
//      </div>
     
//       </div>
       


//     </div>
    

//     </>


   
//   )
// }
function App(){
  return(
    <>
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/chat-with-medical-assistant" element={ <Chat/> } />
      </Routes>
    </BrowserRouter>
    {/* <Chat/> */}

    
    
    </>
  )
}


export default App
