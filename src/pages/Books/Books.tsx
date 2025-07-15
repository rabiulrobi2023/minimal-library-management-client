import { IGetBook } from "@/interface/book.interface";
import BookCard from "@/modules/Book/BookCard";
import { useGetbooksQuery } from "@/redux/api/baseApi";

const Books = () => {
  const { data, isLoading } = useGetbooksQuery(undefined);
  if (isLoading) {
    return (
      <div className="flex justify-center mt-3">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="mt-3 px-2 lg:px-0">
      <h1 className="font-bold text-[16px]">Books</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
        {data?.data?.map((book: IGetBook) => (
          <BookCard book={book} key={book.isbn}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
