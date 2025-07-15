import { IGetBook } from "@/interface/book.interface";

import { Link, useLocation } from "react-router";

const BookCard = ({ book }: { book: IGetBook }) => {
  const location = useLocation()
  return (
    <div className="shadow p-4 rounded-sm flex flex-col gap-1 justify-between">
      <h1 className="font-bold">{book.title}</h1>
      <p>
        <span className="font-bold">Category: </span>
        {book.genre}
      </p>
      <p>Author Name: {book.author}</p>
      <p className="text-primary2">In Stoke: {book.copies}</p>

      <div className="flex justify-between mt-5">
        <Link to={`/borrow/${book?._id}`} state={location.pathname}>
          <button className="bg-primary1 text-white px-3 py-1 font-semibold rounded-[2px]">
            Borrow
          </button>
        </Link>
        <Link className="text-primary2" to={`/books/${book?._id}`}>
          Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
