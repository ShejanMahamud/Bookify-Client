import React from 'react'
import { BsBook } from "react-icons/bs"
import useBorrowedBooks from "../hooks/useBorrowedBooks"
import BorrowedBook from './../Utils/BorrowedBook'

const BorrowedBooks = () => {
const {data:books,isPending} = useBorrowedBooks();

if(isPending){
 return <div className="w-full min-h-screen flex items-center justify-center space-x-2">
	<div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
	<div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
	<div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
</div>
}

  return (
    <div className="font-inter w-full pb-20">
      <div className="bg-banner-10 bg-no-repeat bg-cover bg-center flex flex-col items-center gap-5 w-full px-20 mb-10 py-16">
        <div className="flex items-center justify-between w-full ">
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-primary font-medium">Borrowed Books</h1>
            <span className=" font-bold lg:text-3xl md:text-xl text-lg text-white">
              {`All Borrowed Books `}
            </span>
            <p className=" text-sm text-white">
              Manage your borrowed books easily
            </p>
          </div>
            <ul className="flex items-center gap-1 text-white text-sm">
              <li>Home</li>
              <li>/</li>
              <li>Borrowed Books</li>
            </ul>

        </div>
      </div>
      <div className=" px-20">

      </div>
        {
          books && books.length === 0 && <div className="w-full flex flex-col gap-3 items-center justify-center">
            <BsBook className="text-9xl text-primary"/>
              <h1 className="font-medium text-2xl">No Borrowed Books</h1>

          </div>
        }
      <div
        className={` px-20 w-full grid grid-cols-2 row-auto gap-10 items-stretch`}
      >
        {books && books.map((book) => <BorrowedBook key={book._id} book={book} />)}
      </div>
      {/* <div className="flex items-center gap-5 py-10 px-20 w-full justify-center">
      <button disabled={currentPage < 2} onClick={handlePrevPage} className={`bg-[#E7F0FA] flex items-center justify-center h-10 w-10 rounded-full text-2xl ${currentPage < 2  ? 'text-[#99C2FF]' : 'text-primary'}`}>
      <IoIosArrowBack />
            </button>
         {
          pages.map(page => (
            <button onClick={()=>setCurrentPage(page+1)} key={page+1} className={`${currentPage === page+1 ? 'bg-primary text-white' : 'bg-[#F1F2F4] text-[#5E6670]' } flex items-center justify-center h-10 w-10 rounded-full text-lg font-medium`}>
            {page+1}
            </button>
          ))
         }
               <button disabled={currentPage === pages.length} onClick={handleNextPage} className={`bg-[#E7F0FA] flex items-center justify-center h-10 w-10 rounded-full text-2xl ${currentPage === pages.length ? 'text-[#99C2FF]' : 'text-primary'}`}>
      <IoIosArrowForward/>
            </button>
      </div> */}
    </div>
  )
}

export default BorrowedBooks