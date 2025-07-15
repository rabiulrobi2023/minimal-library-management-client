import { IGetBook } from "@/interface/book.interface";
import { useGetSingleBookQuery } from "@/redux/api/baseApi";
import { Link, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useGetSingleBookQuery(id);
  const bookData: IGetBook = data?.data;
  return (
    <div className="px-2 md:px-5 lg:px-40 min-h-[90vh] flex flex-col mx-auto">
      <div className="flex gap-5 md:gap-10 lg:gap-20 flex-col lg:flex-row   mt-5 ">
        <div>
          <img
            className="w-[290px]"
            src="https://i.ibb.co/yByLyRG6/book2.png"
            alt="Book Image"
          />
        </div>
        <div className="pt-2 flex-col space-y-3 ">
          <p className="font-bold text-[24px]">{bookData?.title}</p>
          <p>
            <span className="font-bold">ISBN:</span>{" "}
            <span>{bookData?.isbn}</span>
          </p>
          <p>
            <span className="font-bold">Author:</span>{" "}
            <span className="capitalize">{bookData?.author}</span>
          </p>
          <p>
            <span className="font-bold">Genre:</span>{" "}
            <span className="capitalize">{bookData?.genre}</span>
          </p>

          <p>
            <span className="font-bold">Copies: </span>
            <span className="text-primary2 font-bold">{bookData?.copies}</span>
          </p>
          <Link to={`/borrow/${bookData?._id}`}>
            <button
              type="submit"
              className="bg-primary2 py-2 font-bold text-white mt-5 hover:bg-amber-500 border-[1px] rounded-sm border-gray-200 w-full"
            >
              Borrow
            </button>
          </Link>
        </div>
      </div>
      <div>
        <p className="text-justify">
          <span className="font-bold">Decription:</span> <br />
          <span className="">{bookData?.description || "NA"}</span>
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
