import { IBookRegistration } from "@/interface/book.interface";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "@/redux/api/baseApi";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate, useParams } from "react-router";

const UpdateBook = () => {
  const { id } = useParams<{ id: string }>();

  const { data: existingBookData, refetch } = useGetSingleBookQuery(id);

  const navigate = useNavigate();

  const [udpateBook] = useUpdateBookMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Partial<IBookRegistration>>();

  const gnereOptions = [
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY",
  ];

  useEffect(() => {
    if (existingBookData?.data) {
      reset(existingBookData.data);
    }
  }, [existingBookData?.data, reset]);

  const onSubmit = handleSubmit(async (data) => {
    const updatedData: Partial<IBookRegistration> = {
      title: data.title,
      author: data.author,
      genre: data.genre,
      isbn: data.isbn,
      description: data.description,
      copies: data.copies,
    };

    try {
      await udpateBook({ id, updatedData }).unwrap();
      await refetch();
      toast.success("Book update successfully", {
        onClose: () => {
          reset();
          navigate("/books");
        },
      });
      reset();
    } catch (error) {
      toast.error("Something went wrong");
    }
  });

  return (
    <div className="flex min-h-[80vh] p-1">
      <div className=" p-3 md:p-5 lg:px-10 w-full lg:w-2/3 m-auto rounded-md">
        <h1 className="text-center font-bold text-[18px]">Update Book</h1>
        <form className="flex flex-col  gap-5" onSubmit={onSubmit}>
          <div className="flex flex-col gap-1">
            <label className="font-bold">Title</label>
            <input
              type="text"
              className="bg-white h-[36px] outline-none px-2 focus:border-[1px] focus:border-[#eda100] border-[1px] rounded-sm border-gray-300"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <p className="text-red-700">{errors.title.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold">Author</label>
            <input
              type="text"
              className="bg-white h-[36px] outline-none px-2 focus:border-[1px] focus:border-[#eda100] border-[1px] rounded-sm border-gray-300"
              {...register("author", { required: "Author name is required" })}
            />
            {errors.author && (
              <p className="text-red-700">{errors.author.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold">Genre</label>
            <select
              className="bg-white h-[36px] outline-none px-2 focus:border-[1px] focus:border-[#eda100] border-[1px] rounded-sm border-gray-300"
              {...register("genre", { required: "Genre is required" })}
            >
              <option value="" disabled selected>
                Select an genre
              </option>
              {gnereOptions.map((genre) => (
                <option value={genre}>{genre}</option>
              ))}
            </select>
            {errors.genre && (
              <p className="text-red-700">{errors.genre.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold">ISBN</label>
            <input
              type="text"
              className="bg-white h-[36px] outline-none px-2 focus:border-[1px] focus:border-[#eda100] border-[1px] rounded-sm border-gray-300"
              {...register("isbn", { required: "ISBN is required" })}
            />
            {errors.isbn && (
              <p className="text-red-700">{errors.isbn.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold">Description</label>
            <textarea
              className="bg-white h-[100px] outline-none px-2 focus:border-[1px] focus:border-[#eda100] rounded-sm border-[1px] border-gray-300"
              {...register("description")}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold">Qyantity</label>
            <input
              type="number"
              className="bg-white h-[36px] outline-none px-2 focus:border-[1px] focus:border-[#eda100] border-[1px] rounded-sm border-gray-300"
              {...register("copies", {
                required: "Quantity is required",
                min: { value: 0, message: "Minimum quantity must be 0" },
              })}
            />
            {errors.copies && (
              <p className="text-red-700">{errors.copies.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-primary2 py-2 font-bold text-white mt-5 hover:bg-[#52a2cd] border-[1px] rounded-sm border-gray-300"
          >
            <input type="submit" />
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default UpdateBook;
