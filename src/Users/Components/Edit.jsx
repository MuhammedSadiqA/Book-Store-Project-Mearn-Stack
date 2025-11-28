import React from 'react'
import { FaEdit } from 'react-icons/fa'


function Edit() {
    return (
        <div>
            <button className='flex items-center text-blue-600 p-2 rounded hover:text-white hover:bg-blue-600'>
                EDIT <FaEdit className='ms-3' /></button>
            {/* offCanvas */}
            <div>
                <div className='fixed inset-0 bg-gray-500/75 w-full h-ful'>
                </div>
                <div className='bg-white h-full w-90 fixed top-0 left-0'>
                    {/* header */}
                    <div className='bg-black p-3 flex justify-between'>

                    </div>
                    {/* body */}
                </div>
            </div>
        </div>
    )
}

export default Edit