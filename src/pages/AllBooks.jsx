import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Tooltip } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import { IoBookOutline } from "react-icons/io5";
import { MdTableRows } from "react-icons/md";
import BookCard from "../Utils/BookCard";
import BookListCard from "../Utils/BookListCard";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/books`
      );
      setBooks(data);
    };
    getBooks();
  }, []);

  return (
    <div className="font-inter w-full">
      <div className="bg-[#F1F2F4] py-10 flex flex-col items-center gap-5 w-full px-20">
        <div className="flex items-center justify-between w-full ">
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-primary font-medium">Find Books</h1>
            <span className=" font-bold lg:text-3xl md:text-xl text-lg">
              {`All Books `}
            </span>
            <p className="text-[#737D8C] text-sm">
              Add and manage books easily
            </p>
          </div>
          <Breadcrumb
            items={[
              {
                href: "/",
                title: <HomeOutlined />,
              },
              {
                href: "",
                title: (
                  <div className="flex items-center gap-1">
                    <IoBookOutline />
                    <span>All Books</span>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
      <div className="py-10 px-20">
        <div className="flex w-full items-center justify-end">
          <div className="flex items-center gap-5">
            <div className="flex items-center px-5 py-3 gap-3 rounded-lg border border-[#E4E5E8]">
              <span className="text-xs">Items Per Page</span>
              <select
                // defaultValue={itemsPerPage}
                //  onChange={handleItemsPerPage}
                name="page"
                className="text-sm focus:outline-none"
              >
                <option value="5" selected>
                  5
                </option>
                <option value="10" selected>
                  10
                </option>
                <option value="15" selected>
                  15
                </option>
                <option value="20" selected>
                  20
                </option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="#9199A3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="border border-[#E4E5E8] px-5 py-2 rounded-lg flex items-center gap-5">
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
            </div>
          </div>
        </div>
      </div>
      <div
        className={`py-10 px-20 w-full grid ${
          showList ? "grid-cols-1" : "grid-cols-2"
        } row-auto gap-10 items-stretch`}
      >
        {showList
          ? books.map((book) => <BookListCard key={book._id} book={book} />)
          : books.map((book) => <BookCard key={book._id} book={book} />)}
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
  );
};

export default AllBooks;
