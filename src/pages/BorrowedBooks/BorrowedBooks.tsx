/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetBorrowedBookQuery } from "@/redux/api/baseApi";

import BorrowedBook from "./BorrowedBook";

const BorrowedBooks = () => {
  const { data } = useGetBorrowedBookQuery(undefined);

  return (
    <div className=" mt-5 overflow-x-auto">
      <h1 className="text-[18px] font-bold pl-3">Borrowed Books</h1>
      <table className="table ">
        <thead>
          <tr className="shadow-">
            <th className="p-2 ">SL</th>
            <th className="p-2 ">Title</th>
            <th className="p-2 text-center">ISBN</th>
            <th className="p-2 pr-1 text-center">Borrowed Qty</th>
          </tr>
        </thead>
        <tbody className="h-2">
          {data?.data?.map((borrowedBook: any, index: number) => (
            <BorrowedBook
              borrowedBook={borrowedBook}
              key={borrowedBook._id}
              index={index}
            ></BorrowedBook>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowedBooks;
