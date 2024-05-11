import { DatePicker, Modal, Tooltip } from "antd";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { LuUser2 } from "react-icons/lu";
import { SlEnvolope } from "react-icons/sl";
import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const BookDetails = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { data:book } = useLoaderData();
const axiosSecure = useAxiosSecure();
  const {
    book_name,
    book_photo,
    book_author,
    book_rating,
    book_description,
    book_category,
    _id
  } = book;

  const {user} = useAuth();

  const showModal = () => {
    setOpen(true);
  };

  const handleBorrowBook = async (e) => {
    e.preventDefault();
    const date = e.target.date.value;
    const user_name = user?.displayName;
    const user_email = user?.email;
    const borrowedBooks = {user_name,user_email,date,book_name,book_photo,book_author,book_rating,book_description,book_category}
    try{
        const {data} = await axiosSecure.post(`/borrowed_books/${_id}`,borrowedBooks)
        if(!data.success){
           return toast.error('Book Not In Stock!')
        }
        if(data.success && data?.res?.insertedId){
            toast.success('Successful Borrowed Book!');
            setOpen(false)
            setConfirmLoading(true);
            setTimeout(() => {
              setOpen(false);
              setConfirmLoading(false);
            }, 2000);
        }
    }
    catch(error){
        toast.error('Something Went Wrong!')
    }
  };

  return (
    <div className="w-full my-28 font-inter">
      <button
        onClick={showModal}
        className="bg-primary text-white text-lg font-medium px-4 py-2 rounded-md"
      >
        Borrow Book
      </button>
      <Modal open={open} confirmLoading={confirmLoading} onCancel={()=>setOpen(false)} footer={null}>
        <h1 className="text-2xl font-medium mb-5">{`Borrow ${book_name}`}</h1>
        <form
          onSubmit={(e) => handleBorrowBook(e)}
          className="w-full flex flex-col items-start gap-3"
        >
          <div className="mt-3 w-full">
            <label
              for="date"
              class="block text-sm text-gray-800 mb-2 font-medium"
            >
              Return Date
            </label>
            <DatePicker
              name="date"
              format="YYYY-MM-DD"
              className="w-full py-2 rounded-lg border border-primary border-opacity-50 focus:border-opacity-80"
            />
          </div>
    <Tooltip title="You Can't Change Name">
    <div className="mt-3 w-full">
            <label
              for="name"
              class="block text-sm text-gray-800 mb-2 font-medium"
            >
              User Name
            </label>

            <div className="flex items-center justify-between w-full py-2 rounded-lg border border-primary border-opacity-50 focus:border-opacity-80 px-3">
              <input
                type="text"
                class="grow"
                name="name"
                placeholder="User Name"
                disabled
                defaultValue={user?.displayName}
                required
                className="focus:outline-none bg-transparent w-full"
              />
              <LuUser2 className="text-primary text-xl opacity-70" />
            </div>
          </div>
    </Tooltip>
          <Tooltip title="You Can't Change Email">
          <div className="mt-3 w-full">
            <label
              for="email"
              class="block text-sm text-gray-800 mb-2 font-medium"
            >
              User Email
            </label>


<div className="flex items-center justify-between w-full py-2 rounded-lg border border-primary border-opacity-50 focus:border-opacity-80 px-3">
              <input
                type="text"
                class="grow"
                name="email"
                placeholder="User Email"
                required
                disabled
                defaultValue={user?.email}
                className="focus:outline-none bg-transparent w-full"
              />
              <SlEnvolope className="text-primary text-xl opacity-70" />
            </div>

          </div>
          </Tooltip>
          <button
            className="mt-3 w-full bg-primary text-white font-medium text-lg py-2 rounded-md flex items-center justify-center gap-2"
            type="submit"
          >
            {confirmLoading && (
              <div className="w-4 h-4 border-2 border-dashed rounded-full animate-spin  border-white dark:border-white"></div>
            )}
            <span>Borrow</span>
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default BookDetails;
