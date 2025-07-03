import { createBrowserRouter } from "react-router";
import App from "../App";
import BooksHome from "../components/BooksHome";
import AddBook from "../components/AddBook";

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
    ],
  },
]);

export default router;
