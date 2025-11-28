import React from 'react'

function BookStatus() {
  return (
    <div className="p-10 my-20 mx-5 shadow rounded">

      {/* book div duplicate */}
      <div className="bg-gray-200 p-5 rounded">
        <div className="md:grid grid-cols-[3fr_1fr]">

          <div>
            <h2 className="text-2xl">Title</h2>
            <h3 className="text-xl">Author</h3>
            <h4 className="text-lg text-red-500">$ 400</h4>
            <p className="text-justify">Abstract</p>

            <div className="flex mt-5">
              {/* pending */}
              <img width={'120px'} height={'120px'} src="https://img.freepik.com/premium-vector/approved-stamp-red-shade-with-tick-mark-grunge-look_597133-884.jpg?semt=ais_hybrid&w=740&q=80" alt="Approval image" />
              <img width={'120px'} height={'120px'} src="https://img.freepik.com/premium-vector/just-sold-stamp-red-rubber-stamp-white-background-just-sold-stamp-sign-just-sold-stamp_1089581-7756.jpg?semt=ais_hybrid&w=740&q=80" alt="Sold image" />
              <img width={'120px'} height={'120px'} src="https://img.freepik.com/premium-vector/pending-rubber-stamp-design-art-illustration_969463-2333.jpg?semt=ais_hybrid&w=740&q=80" alt="Pending img   " />
            </div>
          </div>
            <div className='px-4 mt-4 md:mt-0'>
                <img className='w-50' src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT_3Sol4GU3iYUtJP5iYyhVxA57PNcdv4q3weHxeDarcq6oqAHxRg2j1M4ZWZKGKxwrvwTZDWAleSiAlbmjX0BYwSELJ2hK8gFuo-24ttgBOK1MwUpFG5Vczg" alt="Book" />
                <div className='flex justify-end'>
                <button className='p-2 bg-red-600 text-white mt-5'>DELETE</button>
                </div>
            </div>
        
        </div >

      </div>

    </div>
  )
}

export default BookStatus
