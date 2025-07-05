import { IBookRegistration } from "@/interface/book.interface";

const BookCard = ({ book }: { book: IBookRegistration }) => {
  return (
    <div className="shadow p-4 rounded-sm">
      <h1 className="font-bold">{book.title}</h1>
      <p>
        <span className="font-bold">Category: </span>
        {book.genre}
      </p>
      <p className="text-primary2">In Stoke: {book.copies}</p>
    </div>
  );
};

export default BookCard;
