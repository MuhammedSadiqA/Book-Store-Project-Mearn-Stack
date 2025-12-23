import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { addBookAPI } from '../../services/allAPI'

function SellBook() {
    const [bookDetails, setBookDetails] = useState({
        title: "", author: "", pages: "", price: "", discountPrice: "", imageURL: "", abstract: "", language: "", publisher: "", isbn: "", category: "", uploadImages: []
    })
    console.log(bookDetails);
    
    const [preview, setPreview] = useState("")
    const [previewList, setPreviewList] = useState([])

    const handleUploadBookImage = (e) => {
        // get file which upload
        console.log(e.target.files[0]);
        // add to file to state
        const imgFileArray = bookDetails.uploadImages
        imgFileArray.push(e.target.files[0])
        setBookDetails({ ...bookDetails, uploadImages: imgFileArray })
        // convert file to url
        const url = URL.createObjectURL(e.target.files[0])
        console.log(url);
        setPreview(url)
        const bookImagesArray = previewList
        bookImagesArray.push(url)
        setPreviewList(bookImagesArray)
    }

    const handleUploadBook = async () => {
        const { title, author, pages, price, discountPrice, imageURL, abstract, language, publisher, isbn, category,uploadImages } = bookDetails
        if (!title || !author || !pages|| !price || !discountPrice || !imageURL || !abstract || !language || !publisher || !isbn || !category || uploadImages.length == 0) {
            toast.info("please fill the form completely!!!")
        } else {
            // api call - addbook api
            const token = sessionStorage.getItem("token")
            if (token) {
                const reqHeader = {
                    "Authorization": `Bearer ${token}`
                }
                const reqBody = new FormData()
                for (let key in bookDetails) {
                    if (key != "uploadImages") {
                        reqBody.append(key, bookDetails[key])
                    } else {
                        bookDetails.uploadImages.forEach(imgFile => {
                            reqBody.append("uploadImages", imgFile)
                        })
                    }
                }
                const result = await addBookAPI(reqBody, reqHeader)
                console.log(result);
                if (result.status == 200) {
                    toast.success("Book Added Successfully...")
                    resetUploadBookForm()
                } else if (result.status == 401) {
                    toast.warning(result.response.data)
                } else {
                    toast.error("Something Went Wrong")
                }
                resetUploadBookImage()

            }

        }
    }

    const resetUploadBookImage = () => {
        setBookDetails({
            title: "", author: "", pages: "", price: "", discountPrice: "", imageURL: "", abstract: "", language: "", publisher: "", isbn: "", category: "", uploadImages: []
        })
        setPreview("")
        setPreviewList([])
    }




    return (
        <div>
            <div className="p-10 my-20 mx-5 bg-gray-200">
                <h1 className="text-center text-3xl font-bold">Book Details</h1>
                <div className="md:grid grid-cols-2 mt-10 w-full">
                    <div className="px-3">
                        <div className="mb-3">
                            <input value={bookDetails.title} onChange={(e) => setBookDetails({ ...bookDetails, title: e.target.value })} placeholder='Book title' className="p-2 bg-white w-full rounded"></input>
                        </div>
                        <div className="mb-3">
                            <input value={bookDetails.author} onChange={(e) => setBookDetails({ ...bookDetails, author: e.target.value })} placeholder='Author' className="p-2 bg-white w-full rounded"></input>
                        </div>
                        <div className="mb-3">
                            <input value={bookDetails.pages} onChange={(e) => setBookDetails({ ...bookDetails, pages: e.target.value })} placeholder='No. of Pages' className="p-2 bg-white w-full rounded"></input>
                        </div>
                        <div className="mb-3">
                            <input value={bookDetails.imageURL} onChange={(e) => setBookDetails({ ...bookDetails, imageURL: e.target.value })} placeholder='Image URL' className="p-2 bg-white w-full rounded"></input>
                        </div>
                        <div className="mb-3">
                            <input value={bookDetails.price} onChange={(e) => setBookDetails({ ...bookDetails, price: e.target.value })} placeholder='Price' className="p-2 bg-white w-full rounded"></input>
                        </div>
                        <div className="mb-3">
                            <input value={bookDetails.discountPrice} onChange={(e) => setBookDetails({ ...bookDetails, discountPrice: e.target.value })} placeholder='Discount price' className="p-2 bg-white w-full rounded"></input>
                        </div>
                        <div className="mb-3">
                            <textarea value={bookDetails.abstract} onChange={(e) => setBookDetails({ ...bookDetails, abstract: e.target.value })} rows={5} type='text' placeholder='Abstract' className="p-2 bg-white w-full rounded"></textarea>
                        </div>
                    </div>
                    <div className="px-3">
                        <div className="mb-3">
                            <input value={bookDetails.language} onChange={(e) => setBookDetails({ ...bookDetails, language: e.target.value })} placeholder='Language' className="p-2 bg-white w-full rounded"></input>
                        </div>
                        <div className="mb-3">
                            <input value={bookDetails.publisher} onChange={(e) => setBookDetails({ ...bookDetails, publisher: e.target.value })} placeholder='Publisher' className="p-2 bg-white w-full rounded"></input>
                        </div>
                        <div className="mb-3">
                            <input value={bookDetails.isbn} onChange={(e) => setBookDetails({ ...bookDetails, isbn: e.target.value })} placeholder='ISBN' className="p-2 bg-white w-full rounded"></input>
                        </div>
                        <div className="mb-3">
                            <input value={bookDetails.category} onChange={(e) => setBookDetails({ ...bookDetails, category: e.target.value })} placeholder='Category' className="p-2 bg-white w-full rounded"></input>
                        </div>

                        <div className="mb-3 flex justify-center items-center mt-10">
                            <label htmlFor="uploadimg">
                                <input type="file" id='uploadimg' onChange={e => handleUploadBookImage(e)} hidden />
                                <img src={preview ? preview : "https://cdn.pixabay.com/photo/2021/10/11/00/59/upload-6699084_1280.png"} alt="upload" width={"250px"} />
                            </label>
                        </div>
                        {
                            preview &&
                            <div className="flex justify-center items-center">
                                {/* uploading images */}
                                {
                                    previewList?.map((bookImgURL, index) => (
                                        <img key={index} width={'70px'} height={'70px'} className='mx-3' src={bookImgURL} alt="upload book" />
                                    ))
                                }

                                {/* add more file upload button */}
                                {
                                    previewList.length < 3 &&
                                    <label htmlFor="bookImages">
                                        <input onChange={e => handleUploadBookImage(e)} type="file" id='bookImages' hidden />
                                        <FaPlus className='text-3xl ms-3' />
                                    </label>
                                }

                            </div>
                        }
                    </div>
                </div>
                <div className="flex justify-end mt-5">
                    <button onClick={resetUploadBookImage} className='bg-gray-600 text-white p-2 rounded me-5 hover:bg-white hover:text-gray-400'>RESET</button>
                    <button onClick={handleUploadBook} className='bg-blue-600 text-white p-2 rounded hover:bg-white hover:text-blue-400'>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default SellBook