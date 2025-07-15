import { IBookRegistration } from "@/interface/book.interface";
import { IBorrow } from "@/interface/borrow.interface";
import {
  useAddBorrowBookMutation,
  useGetSingleBookQuery,
} from "@/redux/api/baseApi";
import { cn } from "@/utils/twMarge";

import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";

interface IBorrowFormData {
  dueDate: Date;
  quantity: number;
}
const BorrowBook = () => {
  const { bookId } = useParams() as { bookId: string };
  const { data, refetch } = useGetSingleBookQuery(bookId);
  const book: Partial<IBookRegistration> = data?.data;
  const navigate = useNavigate();

  const [addBorrowBook] = useAddBorrowBookMutation();
  const available = book?.copies || 0;
  const {
    register,
    handleSubmit,
    reset,
    setError,

    formState: { errors },
  } = useForm<IBorrowFormData>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (available < data.quantity) {
        setError("quantity", {
          message: `Only ${book.copies} copies is availabe`,
        });
        return;
      }
      const borroBookData: IBorrow = {
        book: bookId,
        ...data,
      };

      await addBorrowBook(borroBookData);

      toast.success("Book borrowed successfully", {
        onClose: () => {
          reset();
          navigate("/borrow-summary");
        },
      });
    } catch (error) {
      toast.error("Something went wrong");
    }
    await refetch();
  });

  return (
    <div className="flex flex-col max-w-[300px] mx-auto mt-10">
      <p className="text-center font-bold text-[18px]">Borrow Book</p>
      <div className="mt-4">
        <p className="font-bold">{book?.title}</p>
        <p>Genre: {book?.genre}</p>
        <p>Author: {book?.author}</p>
      </div>
      {book?.copies == 0 ? (
        <img
          className="max-w-[300px] flex justify-center p-5"
          src="https://i.ibb.co/dwpZGrRP/unavailable.png"
          alt=""
        />
      ) : (
        ""
      )}
      <form className="flex flex-col  gap-2 mt-5" onSubmit={onSubmit}>
        <div className="flex flex-col gap-1">
          <label className="font-bold">Due Date</label>
          <input
            type="date"
            className="bg-white h-[36px] outline-none px-2 focus:border-[1px] focus:border-[#eda100] border-[1px] rounded-sm border-gray-300"
            {...register("dueDate", { required: "Date is required" })}
            min={new Date().toISOString().split("T")[0]}
          />
          {errors.dueDate && (
            <p className="text-red-700">{errors.dueDate.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-bold">Quantity</label>
          <input
            type="number"
            className="bg-white h-[36px] outline-none px-2 focus:border-[1px] focus:border-[#eda100] border-[1px] rounded-sm border-gray-300"
            {...register("quantity", {
              required: "Quantity is required",
              min: { value: 1, message: "Minimum quantity must be 1" },
            })}
          />
          {errors.quantity && (
            <p className="text-red-700">{errors.quantity.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={book?.copies === 0}
          className={cn(
            "py-2 font-bold text-white mt-5 border-[1px] rounded-sm border-gray-300",
            {
              "bg-gray-400 cursor-not-allowed": book?.copies === 0,
              "bg-primary1 hover:bg-sky-500": book?.copies !== 0,
            }
          )}
        >
          Submit
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default BorrowBook;
