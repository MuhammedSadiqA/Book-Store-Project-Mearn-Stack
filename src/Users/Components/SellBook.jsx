import React from 'react'

function SellBook() {
  return (
    <div>
        <div className="p-10 my-20 mx-5 bg-gray-200">
            <h1 className='text-center text-3xl font-bold'>Book Details</h1>
            <div className='md:grid grid-cols-2 mt-10 w-full'>
                <div className='px-3'>
                    <div className='mb-3'>
                    <input type="text" placeholder='Book Title' className='p-2 bg-white w-full rounded'  />
                    </div>
                     <div className='mb-3'>
                    <input type="text" placeholder='Author' className='p-2 bg-white w-full rounded'  />
                    </div>
                     <div className='mb-3'>
                    <input type="text" placeholder='No. of pages' className='p-2 bg-white w-full rounded'  />
                    </div>
                     <div className='mb-3'>
                    <input type="text" placeholder='Original Price' className='p-2 bg-white w-full rounded'  />
                    </div>
                     <div className='mb-3'>
                    <input type="text" placeholder='Discount Price' className='p-2 bg-white w-full rounded'  />
                    </div>
                     <div className='mb-3'>
                    <input type="text" placeholder='Book image URL' className='p-2 bg-white w-full rounded'  />
                    </div>
                     <div className='mb-3'>
                    <input type="text" placeholder='Book Abstract' className='p-2 bg-white w-full rounded'  />
                    </div>
                     
                </div>
                <div className='px-3'>
                     <div className='mb-3'>
                    <input type="text" placeholder='Language' className='p-2 bg-white w-full rounded'  />
                    </div>
                     <div className='mb-3'>
                    <input type="text" placeholder='Publisher' className='p-2 bg-white w-full rounded'  />
                    </div>
                     <div className='mb-3'>
                    <input type="text" placeholder='ISBN' className='p-2 bg-white w-full rounded'  />
                    </div>
                     <div className='mb-3'>
                    <input type="text" placeholder='Category' className='p-2 bg-white w-full rounded'  />
                    </div>
                    <div className='mb-3 flex justify-center items-center mt-10'>

                            <label htmlFor="uploadImg">
                                <input type="file" id='uploadImg' hidden />
                                <img width={'200px'} src="https://www.pngall.com/wp-content/uploads/2/Upload-Transparent.png" alt="Upload" />
                            </label>
                    </div>
                </div>

            </div>
            <div className="flex justify-end mt-5">
                <button className='mx-2 bg-gray-400 rounded p-2'>RESET</button>
                <button className='bg-blue-500 rounded text-white p-2'>SUBMIT</button>
            </div>
        </div>
    </div>
  )
}

export default SellBook