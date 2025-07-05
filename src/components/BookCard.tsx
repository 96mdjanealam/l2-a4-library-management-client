import { HandHelping, Pencil, Trash2 } from "lucide-react";
import type { IBook } from "../types";
import { Link } from "react-router";

type Props = {
  book: IBook;
  onView: (id: string) => void;
  onDelete: (id: string) => void;
  onBorrow: (id: string) => void;
};

const BookCard = ({ book, onView, onDelete, onBorrow }: Props) => {
  return (
    <div className="text-sm flex flex-col justify-between text-gray-500 border border-gray-500/30 rounded bg-white">
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
            className="underline cursor-pointer font-bold hover:text-violet-500 text-gray-600"
            onClick={() => onView(book._id)}
          >
            View
          </p>
        </div>
      </div>

      <div className="flex items-center divide-x divide-gray-500/30 border-t border-gray-500/30">
        <Link
          to={`/edit-book/${book._id}`}
          className="flex items-center hover:text-violet-600 cursor-pointer justify-center gap-2 w-1/3 py-3 px-2"
        >
          <Pencil size={18} className="md:hidden lg:block" />
          Edit
        </Link>
        <button
          onClick={() => onDelete(book._id)}
          type="button"
          className="flex items-center hover:text-violet-600  cursor-pointer justify-center gap-2 w-1/3 py-3 px-2"
        >
          <Trash2 size={18} className="md:hidden lg:block" />
          Delete
        </button>
        <button
          onClick={() => onBorrow(book._id)}
          disabled={book.copies <= 0}
          type="button"
          className={`${
            book.copies <= 0 ? "cursor-not-allowed" : "cursor-pointer"
          } hover:text-violet-600  flex items-center justify-center gap-2 w-1/3 py-3 px-2"`}
        >
          <HandHelping size={18} className="md:hidden lg:block" />
          Borrow
        </button>
      </div>
    </div>
  );
};

export default BookCard;
