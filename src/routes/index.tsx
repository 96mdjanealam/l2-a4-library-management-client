import { createBrowserRouter } from "react-router";
import App from "../App";
import BooksHome from "../components/BooksHome";
import AddBook from "../components/AddBook";
import EditBook from "../components/EditBook";
import AllBooks from "../components/AllBooks";
import BorrowSummary from "../components/BorrowSummary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <BooksHome></BooksHome>,
      },
      {
        path: "/create-book",
        element: <AddBook></AddBook>,
      },
      {
        path: "/edit-book/:id",
        element: <EditBook></EditBook>,
      },
      {
        path: "/all-books",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummary></BorrowSummary>,
      },
    ],
  },
]);

export default router;
