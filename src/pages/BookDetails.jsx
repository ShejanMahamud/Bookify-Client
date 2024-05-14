import { Rating } from "@smastrom/react-rating";
import { useMutation, useQuery } from "@tanstack/react-query";
import { DatePicker, Modal, Tooltip } from "antd";
import moment from "moment";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoBookOutline } from "react-icons/io5";
import { LuTag, LuUser2 } from "react-icons/lu";
import { SlEnvolope } from "react-icons/sl";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TiltCard from "../Utils/TiltCard";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const BookDetails = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  console.log(id)
  const { data, refetch, isPending } = useQuery({
    queryKey: ["book", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/book/${id}`);
      return data;
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: async ({ book_name, borrowedBooks }) => {
      try {
        const { data } = await axiosSecure.post(
          `/borrowed_book/${book_name}/${user?.email}`,
          borrowedBooks
        );
        if (data?.message === 'Successfully Added Book!') {
          toast.success(data?.message);
          setOpen(false);
          setConfirmLoading(true);
          setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
          }, 2000);
        }else{
          return toast.error(data?.message);
        }
      } catch (error) {
        toast.error("Something Went Wrong!");
      }
    },
    onSuccess: () => {
      refetch();
    },
  });

  const handleBorrowBook = async (e) => {
    e.preventDefault();
    const return_date = e.target.date.value;
    const borrowed_date = moment().format("YYYY-MM-DD");
    const user_name = user?.displayName;
    const user_email = user?.email;
    const {
      book_name,
      book_photo,
      book_author,
      book_rating,
      book_description,
      book_category,
      _id,
    } = data;
    const borrowedBooks = {
      user_name,
      user_email,
      return_date,
      borrowed_date,
      book_name,
      book_photo,
      book_author,
      book_rating,
      book_description,
      book_category,
    };
    await mutateAsync({ book_name, borrowedBooks });
  };

  const showModal = () => {
    setOpen(true);
  };

  return (
    <>
      {isPending ? (
        <div className="w-full min-h-screen flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        </div>
      ) : (
        <div className="w-full font-inter">
      <div className="bg-banner-10 bg-no-repeat bg-cover bg-center flex flex-col items-center gap-5 w-full lg:px-20 md:px-10 px-5 py-16 mb-20">
        <div className="flex items-center justify-between w-full ">
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-primary font-medium">Book Details</h1>
            <span className=" font-bold lg:text-3xl md:text-xl text-lg text-white">
              {`Detail About Book `}
            </span>
            <p className=" text-sm text-white">
              Know more about your favorite one
            </p>
          </div>
            <ul className="flex items-center gap-1 text-white text-sm">
              <li>Home</li>
              <li>/</li>
              <li>{data?.book_category} Books</li>
              <li>/</li>
              <li>{data?.book_name}</li>
            </ul>

        </div>
      </div>
          <div className="w-[90%] mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 row-auto items-start gap-20">
            <div className="w-full h-full bg-banner-11 bg-no-repeat bg-center bg-cover  rounded-lg px-10 py-10 flex items-center justify-center relative group">
              <button className="flex items-center gap-3 bg-primary text-white px-2 py-2 rounded-md absolute top-0 right-0 text-sm">
                <IoBookOutline />
                <span>Read Book</span>
              </button>
              <TiltCard image={data.book_photo} width={'300px'} height={'450px'}/>
            </div>
            <div className="flex flex-col items-start gap-5 w-full">
              <div className="flex items-center gap-3">
                <button className="bg-primary text-white text-xs px-2 py-1 rounded-md">
                  #{data?.book_category}
                </button>
                <button className="bg-primary text-white text-xs px-2 py-1 rounded-md">
                  # No Charge
                </button>
              </div>
              <h1 className="text-2xl font-medium">{data?.book_name}</h1>
              <p className="text-primary text-sm font-medium">
                {data?.book_author}
              </p>
              <div className="flex items-center gap-1">
                <LuTag className="text-lg" />
                <span className="text-base font-medium">
                  {data?.book_category}
                </span>
              </div>

              <p className="text-red-500 text-sm font-medium">
                Stock Left: {data?.book_quantity}
              </p>
              <p>{data?.book_about}</p>
              <p>{data?.book_description}</p>
              <Rating
                style={{ maxWidth: 120 }}
                value={data?.book_rating}
                readOnly
              />

              <button
                disabled={data?.book_quantity === 0 && "true"}
                onClick={showModal}
                className="bg-primary text-white text-base font-medium px-4 py-2 rounded-md"
              >
                Borrow Book
              </button>

              <Modal
                open={open}
                confirmLoading={confirmLoading}
                onCancel={() => setOpen(false)}
                footer={null}
              >
                <h1 className="text-2xl font-medium mb-5">{`Borrow ${data?.book_name}`}</h1>
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
          </div>
          <div className="w-[90%] mx-auto my-20">
            <h1 className="font-medium text-3xl mb-5">Book Details</h1>
            <Tabs selectedTabClassName="react-tabs__tab--selected">
              <TabList>
                <Tab>Details</Tab>
                <Tab>Description</Tab>
                <Tab>About</Tab>
              </TabList>

              <TabPanel>
                <table className="table w-full my-5">
                  <tbody>
                    <tr className="hover">
                      <td className="font-medium">Title</td>{" "}
                      <td>{data?.book_name}</td>
                    </tr>
                    <tr className="hover">
                      <td className="font-medium">Rating</td>{" "}
                      <td>{data?.book_rating}</td>
                    </tr>
                    <tr className="hover">
                      <td className="font-medium">Category</td>{" "}
                      <td>{data?.book_category}</td>
                    </tr>
                    <tr className="hover">
                      <td className="font-medium">Stock</td>{" "}
                      <td>{data?.book_quantity}</td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel>
                <p className="my-5">{data?.book_description}</p>
              </TabPanel>
              <TabPanel>
                <p className="my-5">{data?.book_about}</p>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      )}
    </>
  );
};

export default BookDetails;
