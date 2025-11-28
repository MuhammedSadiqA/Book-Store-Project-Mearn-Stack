import React from 'react'

function Purchase() {
  return (
    <div>
         <div className="bg-gray-200 p-5 rounded">
        <div className="md:grid grid-cols-[3fr_1fr]">

          <div>
            <h2 className="text-2xl">Title</h2>
            <h3 className="text-xl">Author</h3>
            <h4 className="text-lg text-red-500">$ 400</h4>
            <p className="text-justify">Abstract</p>

            <div className="flex mt-5">
              {/* pending */}
              <img width={'120px'} height={'120px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0N5naO4x-aHmqQ4V7T60HOre82_OLKWh6vg&s" alt="Approval image" />
            </div>
          </div>
            <div className='px-4 mt-4 md:mt-0'>
                <img className='w-50' src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT_3Sol4GU3iYUtJP5iYyhVxA57PNcdv4q3weHxeDarcq6oqAHxRg2j1M4ZWZKGKxwrvwTZDWAleSiAlbmjX0BYwSELJ2hK8gFuo-24ttgBOK1MwUpFG5Vczg" alt="Book" />
                <div className='flex justify-end'>
                </div>
            </div>
        
        </div >

      </div>
    </div>
  )
}

export default Purchase