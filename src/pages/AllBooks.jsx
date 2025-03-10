import { Rating } from "@smastrom/react-rating";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import BookCard from "../Utils/BookCard";
import useAxiosCommon from "../hooks/useAxiosCommon";

const AllBooks = () => {
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const [showList, setShowList] = useState(false);
  const [isOpen,setIsOpen] = useState(false)
  const [books, setBooks] = useState([]);
  const [isPending,setIsPending] = useState(true)
  const axiosCommon = useAxiosCommon()
  const [itemsPerPage,setItemsPerPage] = useState(5);
  const [count,setCount] = useState(0)
  const numberOfPages = Math.ceil(count / itemsPerPage)
  const [currentPage, setCurrentPage] = useState(1)
  const pages = [...Array(numberOfPages).keys()].map(num => num  + 1)
  useEffect(()=>{
    const getBooks = async () => {
      const {data} = await axiosCommon.get(`/books?page=${currentPage}&size=${itemsPerPage}`)
      setBooks(data.books);
      setCount(data.count)
      setTimeout(()=>{
        setIsPending(false)
      },1000)
    }
    getBooks()
  },[currentPage,itemsPerPage])

  const handleAvailableBook = async () => {
    setIsPending(true)
    const {data} = await axiosCommon.get(`/books?page=${currentPage}&size=${itemsPerPage}&available_books=true`)
    setBooks(data.books);
      setCount(data.count)
    setIsPending(false)
  }

  // useEffect(()=>{
  //   if(isTokenInvalid){
  //     navigate('/login')
  //   }
  // },[])
  // useEffect(()=>{
  //   const handleNavigate = async () => {
  //     const {data} = await axiosSecure.get('/user_role')
  //     if(!data.access){
  //       toast.error('Only Librarian Can Access!')
  //       return navigate(`/`)
  //     }
  //     setLoading(false)
  //   }
  //   handleNavigate()
  // },[user])

  if(isPending || loading){
    return <div className="w-full min-h-screen flex items-center justify-center space-x-2">
    <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
  </div>
  }
  const items = [
    {
      key: '1',
      label: (
        <a>
          Show Available Book
        </a>
      ),
    }
  ];
  return (
    <div className="font-inter w-full">
      <div className="bg-banner-10 bg-no-repeat bg-cover bg-center flex flex-col items-center gap-5 w-full lg:px-20 px-5 py-20">
        <div className="flex items-center justify-between w-full ">
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-primary font-medium">Find Books</h1>
            <span className=" font-bold lg:text-3xl md:text-xl text-lg text-white">
              {`All Books `}
            </span>
            <p className=" text-sm text-white">
              Add and manage books easily
            </p>
          </div>
            <ul className="flex items-center gap-1 text-white text-sm">
              <li>Home</li>
              <li>/</li>
              <li>All Books</li>
            </ul>

        </div>
      </div>
      <div className="py-10 lg:px-20 px-5">
        <div className="flex w-full items-center justify-end">
          <div className="flex items-center gap-5">
<button onClick={handleAvailableBook} className="lg:px-4 px-2 lg:text-base text-xs py-2 rounded-md bg-primary text-white font-medium">Show Available Book</button>

            {/* <div className="border border-[#E4E5E8] px-5 py-2 rounded-lg flex items-center gap-5">
              <Tooltip title="Grid View">
              <button
                onClick={() => setShowList(false)}
                className={`px-1 py-1 bg-[#E4E5E8] rounded-md`}
              >
                <BiSolidCategory className={`text-2xl ${showList ? 'text-[#939AAD]' : 'text-primary'}`} />
              </button>
              </Tooltip>
            <Tooltip title="List View">
            <button
                onClick={() => setShowList(true)}
                className="px-1 py-1 bg-[#E4E5E8] rounded-md"
              >
                <MdTableRows className={`text-2xl ${showList ? 'text-primary' : 'text-[#939AAD]'}`} />
              </button>
            </Tooltip>
            </div> */}
            <button onClick={()=>setIsOpen(!isOpen)} className="border border-primary px-4 py-2 rounded-md text-primary text-sm relative">Choose View
            {
              isOpen && <div className="bg-white font-medium flex flex-col px-5 py-2 items-center gap-3 absolute right-0 top-10 text-sm">
                <button onClick={() => setShowList(true)}>Table View</button>
                <button onClick={() => setShowList(false)}>Card View</button>
              </div>
            }
            </button>
            
          </div>
        </div>
      </div>
      <div
        className={`py-10 lg:px-20 px-5 w-full grid ${
          showList ? "grid-cols-1" : "lg:grid-cols-2 md:grid-cols-2 grid-cols-1"
        } row-auto gap-10 items-stretch`}
      >
        {showList
          ? 
          <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>Book Details</th>
        <th>Book About</th>
        <th>Rating</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
          {
            books.map(book=> (
              <tr key={book._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                      <img src={book?.book_photo} alt="book" />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="font-bold w-full">{book?.book_name}</div>
                    <div className="text-sm opacity-50">{book?.book_author}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex flex-col gap-2">
                <p className="text-ellipsis overflow-hidden ...">{book?.book_description}</p>
                <span className="badge badge-ghost badge-md">{book?.book_category}</span>
                </div>
              </td>
              <td>
              <Rating
style={{ maxWidth: 100 }}
value={book?.book_rating}
readOnly
/>
              </td>
              <th>
                <button onClick={()=>navigate(`/book/${book?._id}`)} className="uppercase text-xs text-white px-4 py-2 rounded-md bg-primary">Details</button>
              </th>
            </tr>
            ))
          }
    </tbody>
    
  </table>
</div>
          : books.map((book) => <BookCard key={book._id} book={book} />)}
          
      </div>
      <div className="flex items-center gap-5 py-10 px-20 w-full justify-center">
      <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage === 1} className={` flex items-center justify-center h-10 w-10 rounded-full text-2xl ${currentPage === 1 ? 'text-[#99C2FF] bg-[#E7F0FA]' : 'bg-[#E7F0FA] text-primary'}`}>
      <IoIosArrowBack />
            </button>
         {
          pages.map(page => (
            <button key={page} onClick={()=>setCurrentPage(page)} className={`flex items-center justify-center h-10 w-10 rounded-full text-lg font-medium ${currentPage === page ? 'bg-primary text-white ': 'bg-[#F1F2F4] text-[#5E6670]'}`}>
            {page}
            </button>
          ))
         }
               <button disabled={currentPage === numberOfPages} onClick={()=>setCurrentPage(currentPage + 1)} className={`bg-[#E7F0FA] flex items-center justify-center h-10 w-10 rounded-full text-2xl text-primary} ${currentPage === numberOfPages ? 'text-[#99C2FF] bg-[#E7F0FA]' : 'bg-[#E7F0FA] text-primary'}`}>
      <IoIosArrowForward/>
            </button>
      </div>
    </div>
  );
};

export default AllBooks;
