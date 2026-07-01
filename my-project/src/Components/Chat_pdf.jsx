import React from 'react'

function Chat_pdf({File,setFile}) {
  return (
    <div className="mb-3 flex items-center gap-3 w-fit bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
      
      <div className="w-10 h-10 rounded-lg bg-[#E8F2EC] flex items-center justify-center">
        📄
      </div>

      <div>
        <p className="text-sm font-medium text-[#15422D]">
          {File.name}
        </p>
        <p className="text-xs text-gray-500">
          {(File.size / 1024).toFixed(1)} KB
        </p>
      </div>

      <button
        onClick={() => setFile(null)}
        className="ml-2 text-gray-400 hover:text-red-500"
      >
        ✕
      </button>

    </div>
  )
}

export default Chat_pdf