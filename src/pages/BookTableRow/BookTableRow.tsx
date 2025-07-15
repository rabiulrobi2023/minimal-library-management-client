import { IGetBook } from "@/interface/book.interface";

import { cn } from "@/utils/twMarge";
import { Edit, Eye, Trash } from "lucide-react";

import { Link, useLocation } from "react-router";

const BookTableRow = ({
  book,
  index,
  onDelete,
}: {
  book: IGetBook;
  index: number;
  onDelete: (id: string) => void;
  path: string;
}) => {
  const loaction = useLocation();
  return (
    <tr className="hover:bg-gray-100">
      <td>{index + 1}</td>
      <td className="p-3  whitespace-nowrap">{book.title}</td>
      <td className="p-3 whitespace-nowrap">{book.author}</td>
      <td className="p-3 whitespace-nowrap">{book.genre}</td>
      <td className="p-3 whitespace-nowrap">{book.isbn}</td>
      <td className="p-3 whitespace-nowrap text-center">{book.copies}</td>
      <td
        className={cn("p-0 text-center whitespace-nowrap", {
          "text-primary1": book?.copies != 0,
          "text-primary2": book?.copies == 0,
        })}
      >
        {book?.copies != 0 ? "Available" : "Unavailable"}
      </td>
      <td className="p-3">
        <div className="flex justify-center gap-4 items-center whitespace-nowrap">
          <Link to={`/books/${book._id}`}>
            <button className="text">
              <Eye className="hover:text-[#52a2cd] h-5" />
            </button>
          </Link>
          <Link to={`/edit-book/${book._id}`}>
            <button className="text">
              <Edit className="hover:text-[#52a2cd] h-5" />
            </button>
          </Link>
          <button
            onClick={() => onDelete(book._id)}
            className="flex content-center p-0"
          >
            <Trash className="hover:text-red-900 h-5 text-red-600" />
          </button>

          <Link to={`/borrow/${book._id}`} state={loaction.pathname}>
            <button className="hover:text-[#eda100] text-primary1">
              Borrow
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default BookTableRow;
