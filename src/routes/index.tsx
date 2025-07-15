import Home from "@/pages/Home/Home";
import App from "../App";
import { createBrowserRouter } from "react-router";
import BookTableBody from "@/pages/BookTableBody/BookTableBody";
import CreateBook from "@/pages/CreateBook/CreateBook";
import BookDetails from "@/pages/BookDetails/BookDetails";
import UpdateBook from "@/pages/UpdateBook/UpdateBook";
import BorrowBook from "@/pages/BorroBook/BorrowBook";
import BorrowedBooks from "@/pages/BorrowedBooks/BorrowedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/books",
        element: <BookTableBody></BookTableBody>,
      },
      {
        path: "/create-book",
        element: <CreateBook></CreateBook>,
      },
      {
        path: "books/:id",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/edit-book/:id",
        element: <UpdateBook></UpdateBook>,
      },
      {
        path: "/borrow/:bookId",
        element: <BorrowBook></BorrowBook>,
      },
      {
        path: "/borrow-summary",
        element: <BorrowedBooks></BorrowedBooks>,
      },
    ],
  },
]);

export default router;
