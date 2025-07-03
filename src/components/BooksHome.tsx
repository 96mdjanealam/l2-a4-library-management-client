import { useState } from "react";
import { HandHelping, Pencil, Trash2 } from "lucide-react";
import {
  useGetBooksQuery,
} from "../redux/api/baseApi";
import type { IBook } from "../types";
import Spinner from "./Spinner";
import ViewModal from "./ViewModal";

const BooksHome = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

  const books = data?.data;

  if (isLoading) return <Spinner />;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-20 px-6 md:px-16 lg:px-24 xl:px-32">
        {books.map((book: IBook) => (
          <div
            key={book._id}
            className="text-sm flex flex-col justify-between text-gray-500 border border-gray-500/30 rounded bg-white"
          >
            <div className="flex flex-col items-center justify-between py-8 space-y-2">
              <h2 className="text-lg text-gray-800 font-semibold px-2 text-center">
                {book.title}
              </h2>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
              <p>ISBN: {book.isbn}</p>
              <p>Copies: {book.copies}</p>
              <div className="flex gap-4">
                <p
                  className={`px-2 py-0.5 rounded-full text-xs border ${
                    book.available
                      ? "bg-green-500/20 text-green-600 border-green-500/30"
                      : "bg-red-500/20 text-red-600 border-red-500/30"
                  }`}
                >
                  {book.available ? "Available" : "Not Available"}
                </p>
                <p
                  className="underline cursor-pointer font-bold hover:text-violet-500 text-gray-500"
                  onClick={() => setSelectedBookId(book._id)}
                >
                  View
                </p>
              </div>
            </div>
            <div className="flex items-center divide-x divide-gray-500/30 border-t border-gray-500/30">
              <button type="button" className="flex items-center justify-center gap-2 w-1/3 py-3 px-2">
                <Pencil size={18} className="md:hidden lg:block" />
                Edit
              </button>
              <button type="button" className="flex items-center justify-center gap-2 w-1/3 py-3 px-2">
                <Trash2 size={18} className="md:hidden lg:block" />
                Delete
              </button>
              <button type="button" className="flex items-center justify-center gap-2 w-1/3 py-3 px-2">
                <HandHelping size={18} className="md:hidden lg:block" />
                Borrow
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show selected book data */}
      {selectedBookId && (
  <ViewModal
    selectedBookId={selectedBookId}
    setSelectedBookId={setSelectedBookId}
  />
)}
    </>
  );
};

export default BooksHome;
