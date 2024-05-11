import React from "react";
import toast from "react-hot-toast";
import { FaRegStar } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { IoIosArrowRoundBack, IoMdBook } from "react-icons/io";
import { IoImageOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import useAxiosSecure from "../hooks/useAxiosSecure";

const UpdateBooks = () => {
  const navigate = useNavigate();
  const { data } = useLoaderData();
  const {
    book_name,
    book_author,
    book_category,
    book_photo,
    book_rating,
    _id,
  } = data;
  const axiosSecure = useAxiosSecure();
  const handleUpdateBook = async (e) => {
    e.preventDefault();

    const book_name = e.target.name.value;
    const book_photo = e.target.photo.value;
    const book_category = e.target.category.value;
    const book_author = e.target.author.value;
    const book_rating = e.target.rating.value;

    const book = {
      book_name,
      book_author,
      book_category,
      book_photo,
      book_rating,
    };

    try {
      const { data } = await axiosSecure.patch(`/book/${_id}`, book);

      if (!data?.access) {
        toast.error("Only Librarian Can Update Book!");
        return;
      }

      if (data?.access && data?.res?.modifiedCount > 0) {
        toast.success("Successfully Updated Book!");
      }
    } catch (error) {
      toast.error("An error occurred while adding the book.");
    }
  };

  return (
    <form
      onSubmit={handleUpdateBook}
      className="w-full py-20 font-poppins flex items-center flex-col"
    >
      <div
        onClick={() => navigate("/")}
        className="flex items-center w-[90%] mx-auto mb-10 cursor-pointer"
      >
        <IoIosArrowRoundBack className="text-2xl" />
        <span className=" text-base font-medium">Back to home</span>
      </div>
      <div className="flex flex-col items-start gap-2 w-[90%] mx-auto mb-10">
        <h1 className="text-primary font-medium">Update Books</h1>
        <span className=" font-bold lg:text-3xl md:text-xl text-lg">
          {`Update ${book_name}`}
        </span>
        <p className="text-[#737D8C] w-[60%] text-sm">
          Add and manage books easily
        </p>
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
              className="focus:outline-none bg-transparent"
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
            <option value="novel">Novel</option>
            <option value="thriller">Thriller</option>
            <option value="history">History</option>
            <option value="drama">Drama</option>
            <option value="islamic">Islamic</option>
            <option value="life">Life</option>
          </select>

          <label class="flex items-center justify-between gap-2 mb-3 border border-primary border-opacity-50 focus:border-opacity-80 py-3 rounded-lg px-5 ">
            <input
              type="number"
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
