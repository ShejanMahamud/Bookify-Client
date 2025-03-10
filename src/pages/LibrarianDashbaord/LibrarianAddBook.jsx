import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaRegStar } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { IoMdBook } from "react-icons/io";
import { IoAnalytics, IoImageOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const AddBooks = () => {
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const handleAddBook = async (e) => {
      e.preventDefault();
    
      const book_name = e.target.name.value;
      const book_description = e.target.description.value;
      const book_photo = e.target.photo.value;
      const book_category = e.target.category.value;
      const book_author = e.target.author.value;
      const book_rating = parseInt(e.target.rating.value);
      const book_quantity = parseInt(e.target.quantity.value);
      const book_about = e.target.about.value;
      const author_photo = e.target.author_photo.value;
    
      const book = { book_name, book_about, book_author, book_category, book_description, book_photo, book_rating, book_quantity,author_photo }
    
      try {
        const {data} = await axiosSecure.post('/books', book);

        if (!data?.access) {
          toast.error('Only Librarian Can Add Book!');
          return; 
        }
        
        if (data?.access && data?.res?.insertedId) {
          toast.success('Successfully Added Book!');
          e.target.reset();
        }
      } catch (error) {
        toast.error('An error occurred while adding the book.');
      }
    }
    

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

if(loading){
  return <div className="w-full min-h-screen flex items-center justify-center space-x-2">
  <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
  <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
  <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
</div>
}

  return (
    <form
      onSubmit={handleAddBook}
      className="w-full min-h-screen border-l border-[#E4E5E8] p-10 font-poppins flex items-center flex-col"
    >
 <h1 className='text-xl font-medium mb-10 text-start'>Add Book</h1>
      <div className="w-[90%] mx-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 row-auto items-center gap-x-10 gap-y-10 my-5 ">
          <label class="flex items-center justify-between gap-2 mb-3 border border-primary border-opacity-50 focus:border-opacity-80 py-3 rounded-lg px-5 ">
            <input
              type="text"
              class="grow"
              name="name"
              placeholder="* Book Name"
              required
              className="focus:outline-none bg-transparent w-full"
            />
            <IoMdBook className="text-primary text-xl opacity-70" />
          </label>

          <label class="flex items-center justify-between gap-2 mb-3 border border-primary border-opacity-50 focus:border-opacity-80 py-3 rounded-lg px-5 ">
            <input
              type="text"
              class="py-5 grow"
              placeholder="* Short Description"
              name="description"
              required
              className="focus:outline-none bg-transparent w-full"
            />
            <FaPencil className="text-primary text-xl opacity-70" />
          </label>

          <label class="flex items-center justify-between gap-2 mb-3 border border-primary border-opacity-50 focus:border-opacity-80 py-3 rounded-lg px-5 ">
            <input
              type="text"
              class="grow"
              name="photo"
              placeholder="* Photo URL"
              required
              className="focus:outline-none bg-transparent w-full"
            />
            <IoImageOutline className="text-primary text-xl opacity-70" />
          </label>
          <select
            name="category"
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
              type="number"
              class="grow"
              name="quantity"
              placeholder="* Quantity"
              required
              className="focus:outline-none bg-transparent w-full"
            />
            <IoAnalytics className="text-primary text-xl opacity-70" />
          </label>
          <label class="flex items-center justify-between gap-2 mb-3 border border-primary border-opacity-50 focus:border-opacity-80 py-3 rounded-lg px-5 ">
            <input
              type="number"
              class="grow"
              name="rating"
              placeholder="* Rating"
              required
              className="focus:outline-none bg-transparent w-full"
            />
            <FaRegStar className="text-primary text-xl opacity-70" />
          </label>
          <label class="flex items-center justify-between gap-2 mb-3 border border-primary border-opacity-50 focus:border-opacity-80 py-3 rounded-lg px-5 ">
            <input
              type="text"
              class="grow"
              name="about"
              placeholder="* About Book"
              required
              className="focus:outline-none bg-transparent w-full"
            />
            <IoMdBook className="text-primary text-xl opacity-70" />
          </label>
          <label class="flex items-center justify-between gap-2 mb-3 border border-primary border-opacity-50 focus:border-opacity-80 py-3 rounded-lg px-5 ">
            <input
              type="text"
              class="grow"
              name="author"
              placeholder="* Author Name"
              required
              className="focus:outline-none bg-transparent w-full"
            />
            <LuUser2 className="text-primary text-xl opacity-70" />
          </label>
          <label class="flex items-center justify-between gap-2 mb-3 border border-primary border-opacity-50 focus:border-opacity-80 py-3 rounded-lg px-5 ">
            <input
              type="text"
              class="grow"
              name="author_photo"
              placeholder="* Author Photo URL"
              required
              className="focus:outline-none bg-transparent w-full"
            />
            <IoImageOutline className="text-primary text-xl opacity-70" />
          </label>
        </div>
      </div>

      <button type="submit" className="w-[90%] mx-auto uppercase bg-primary text-white font-bold text-base px-4 py-3 rounded-md flex items-center gap-3 justify-center my-10">
        <span>Add Book</span>
        <GoArrowRight className="text-2xl" />
      </button>
    </form>
  );
};

export default AddBooks;
