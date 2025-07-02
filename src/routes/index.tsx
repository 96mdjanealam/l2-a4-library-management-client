import { createBrowserRouter } from "react-router";
import App from "../App"
import BooksHome from "../components/BooksHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[{
        path:"/",
        element:<BooksHome></BooksHome>
    }]
  },
]);

export default router;
