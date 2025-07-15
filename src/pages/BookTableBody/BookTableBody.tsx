import { useDeleteBookMutation, useGetbooksQuery } from "@/redux/api/baseApi";
import BookTableRow from "../BookTableRow/BookTableRow";
import { IGetBook } from "@/interface/book.interface";
import { useLocation } from "react-router";
import Swal from "sweetalert2";

const BookTableBody = () => {
  const { data, isLoading } = useGetbooksQuery(undefined);
  const [deleteBook] = useDeleteBookMutation();
  const path = useLocation().pathname;

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      text: "Are you sure to delete the book?",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
      width: "350px",
    });
    if (result.isConfirmed) {
      try {
        const res = await deleteBook(id);
        if (res.data.success) {
          Swal.fire({
            title: "Deleted!",
            text: "The book is deleted successfull",
            icon: "success",
            padding: "10px",
          });
        }
      } catch {
        Swal.fire({
          text: "Failed to delete the book.",
          icon: "error",
          width: "300px",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center mt-3">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return (
    <div className=" mt-5 overflow-x-auto">
      <h1 className="text-[18px] font-bold pl-3">Books</h1>
      <table className="table">
        <thead>
          <tr className="shadow-">
            <th className="p-3 ">SL</th>
            <th className="p-3 ">Title</th>
            <th className="p-3">Author</th>
            <th className="p-3 r">Genre</th>
            <th className="p-3 text-center">ISBN</th>
            <th className="p-3 text-center">Copies</th>
            <th className="p-3 text-center">Availability</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="h-2">
          {data?.data?.map((book: IGetBook, index: number) => (
            <BookTableRow
              book={book}
              key={book.isbn}
              index={index}
              onDelete={handleDelete}
              path={path}
            ></BookTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTableBody;
