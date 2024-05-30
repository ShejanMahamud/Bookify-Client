import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { FaRegStar } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { IoMdBook } from "react-icons/io";
import { IoImageOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const LibrarianUpdateBook = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const {id} = useParams()

    const {data:book,isPending} = useQuery({
        queryKey: ['single_book',id],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/book/${id}`)
            return data
        }
    })

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

//   useEffect(()=>{
//     const handleNavigate = async () => {
//       const {data} = await axiosSecure.get('/user_role')
//       if(!data.access){
//         return navigate(`/login`)
//       }
//     }
//     handleNavigate()
//   },[])

if(isPending){
    return <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
    <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
  </div>
  }

  return (
    <form
      onSubmit={handleUpdateBook}
      className="w-full min-h-screen border-l border-[#E4E5E8] py-20 px-10 font-poppins flex items-center flex-col"
    >
        <h1 className='text-xl font-medium mb-10'>Update {book?.book_name}</h1>

      <div className="w-[90%] mx-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 row-auto items-center gap-x-10 gap-y-10 my-5 ">
          <label class="flex items-center justify-between gap-2 mb-3 border border-primary border-opacity-50 focus:border-opacity-80 py-3 rounded-lg px-5 ">
            <input
              type="text"
              class="grow"
              name="name"
              defaultValue={book?.book_name}
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
              defaultValue={book?.book_photo}
              className="focus:outline-none bg-transparent w-full"
            />
            <IoImageOutline className="text-primary text-xl opacity-70" />
          </label>
          <select
            name="category"
            defaultValue={book?.book_category}
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
              defaultValue={book?.book_rating}
              placeholder="* Rating"
              required
              className="focus:outline-none bg-transparent w-full"
            />
            <FaRegStar className="text-primary text-xl opacity-70" />
          </label>

          <label class="flex items-center justify-between gap-2 mb-3 border border-primary border-opacity-50 focus:border-opacity-80 py-3 rounded-lg px-5 lg:col-span-2 md:col-span-2">
            <input
              type="text"
              class="grow"
              name="author"
              placeholder="* Author Name"
              required
              defaultValue={book?.book_author}
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

export default LibrarianUpdateBook;
