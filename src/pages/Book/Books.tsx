import { IBookRegistration } from "@/interface/book.interface";
import BookCard from "@/modules/Book/BookCard";
import { useGetbooksQuery } from "@/redux/api/baseApi";

const Books = () => {
  const { data } = useGetbooksQuery(undefined);

  return (
    <div className="mt-3">
      <h1 className="font-bold">Books</h1>
      <div className="grid grid-cols-4 gap-5 mt-4">
        {data?.data?.map((book: IBookRegistration) => (
          <BookCard book={book} key={book.isbn}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
