import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FaRegStar } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { IoMdBook } from "react-icons/io";
import { IoImageOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import useAxiosSecure from "../hooks/useAxiosSecure";

const UpdateBooks = () => {
  const navigate = useNavigate();
  const { data } = useLoaderData();
  const axiosSecure = useAxiosSecure();

  const {
    book_name,
    book_author,
    book_category,
    book_photo,
    book_rating,
    _id,
    book_quantity
  } = data;

  const handleUpdateBook = async (e) => {
    e.preventDefault();

    const book_name = e.target.name.value;
    const book_photo = e.target.photo.value;
    const book_category = e.target.category.value;
    const book_author = e.target.author.value;
    const book_rating = parseInt(e.target.rating.value);

    const book = {
      book_name,
      book_author,
      book_category,
      book_photo,
      book_rating,
      book_quantity
    };

    try {
      const { data } = await axiosSecure.patch(`/book/${_id}`, book);

      if (!data?.access) {
        toast.error("Only Librarian Can Update Book!");
        e.target.reset();
        return;
      }

      if (data?.access && data?.res?.modifiedCount > 0) {
        toast.success("Successfully Updated Book!");
      }
    } catch (error) {
      toast.error("An error occurred while adding the book.");
    }
  };

  useEffect(()=>{
    const handleNavigate = async () => {
      const {data} = await axiosSecure.get('/user_role')
      if(!data.access){
        return navigate(`/login`)
      }
    }
    handleNavigate()
  },[])

  return (
    <form
      onSubmit={handleUpdateBook}
      className="w-full font-poppins flex items-center flex-col"
    >
      <div className="bg-banner-10 bg-no-repeat bg-cover bg-center flex flex-col items-center gap-5 w-full px-20 mb-20 py-16">
        <div className="flex items-center justify-between w-full ">
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-primary font-medium">Update Book</h1>
            <span className=" font-bold lg:text-3xl md:text-xl text-lg text-white">
              {`Update Book in Library`}
            </span>
            <p className=" text-sm text-white">
              Update correct information of books
            </p>
          </div>
            <ul className="flex items-center gap-1 text-white text-sm">
              <li>Home</li>
              <li>/</li>
              <li>Update Book</li>
              <li>/</li>
              <li>{book_name}</li>
            </ul>

        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 row-auto items-center gap-x-10 gap-y-10 my-5 ">
          <label class="flex items-center justify-between gap-2 mb-3 border border-primary border-opacity-50 focus:border-opacity-80 py-3 rounded-lg px-5 ">
            <input
              type="text"
              class="grow"
              name="name"
              defaultValue={book_name}
              placeholder="* Book Name"
              required
              className="focus:outline-none bg-transparent w-full"
            />
            <IoMdBook className="text-primary text-xl opacity-70" />
          </label>

          <label class="flex items-center justify-between gap-2 mb-3 border border-primary border-opacity-50 focus:border-opacity-80 py-3 rounded-lg px-5 ">
            <input
              type="text"
              class="grow"
              name="photo"
              placeholder="* Photo URL"
              required
              defaultValue={book_photo}
              className="focus:outline-none bg-transparent w-full"
            />
            <IoImageOutline className="text-primary text-xl opacity-70" />
          </label>
          <select
            name="category"
            defaultValue={book_category}
            className="w-full flex items-center justify-between gap-2 mb-3 border border-primary border-opacity-50 focus:border-opacity-80 py-3 rounded-lg px-5 focus:outline-none bg-transparent"
          >
            <option disabled selected className="text-gray-400">
              Category
            </option>
            <option value="Novel">Novel</option>
            <option value="Thriller">Thriller</option>
            <option value="History">History</option>
            <option value="Drama">Drama</option>
            <option value="Islamic">Islamic</option>
            <option value="Careers">Careers</option>
          </select>

          <label class="flex items-center justify-between gap-2 mb-3 border border-primary border-opacity-50 focus:border-opacity-80 py-3 rounded-lg px-5 ">
            <input
              type="text"
              class="grow"
              name="rating"
              defaultValue={book_rating}
              placeholder="* Rating"
              required
              className="focus:outline-none bg-transparent w-full"
            />
            <FaRegStar className="text-primary text-xl opacity-70" />
          </label>

          <label class="flex items-center justify-between gap-2 mb-3 border border-primary border-opacity-50 focus:border-opacity-80 py-3 rounded-lg px-5 col-span-2">
            <input
              type="text"
              class="grow"
              name="author"
              placeholder="* Author Name"
              required
              defaultValue={book_author}
              className="focus:outline-none bg-transparent w-full"
            />
            <LuUser2 className="text-primary text-xl opacity-70" />
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-[90%] mx-auto uppercase bg-primary text-white font-bold text-base px-4 py-3 rounded-md flex items-center gap-3 justify-center my-10"
      >
        <span>Submit</span>
        <GoArrowRight className="text-2xl" />
      </button>
      <Tooltip id="email" />
      <Tooltip id="name" />
    </form>
  );
};

export default UpdateBooks;
