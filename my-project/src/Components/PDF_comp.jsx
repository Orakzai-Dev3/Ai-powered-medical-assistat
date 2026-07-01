import React from 'react'

function PDF_comp({files}) {
  console.log('files',files)
    
  return (
    <div className="mb-3 mt-1 flex items-center gap-3 w-fit bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
      
      <div className="w-10 h-10 rounded-lg bg-[#E8F2EC] flex items-center justify-center">
        📄
      </div>

      <div>
        <p className="text-sm font-medium text-[#15422D]">
          {files.name}
        </p>
        <p className="text-xs text-gray-500">
          {(files.size / 1024).toFixed(1)} KB
        </p>
      </div>

     
    </div>
  )
}

export default PDF_comp