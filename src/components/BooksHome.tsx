import { useState } from "react";
import { useDeleteBookMutation, useGetBooksQuery } from "../redux/api/baseApi";
import type { IBook } from "../types";
import Spinner from "./Spinner";
import ViewModal from "./ViewModal";
import BorrowForm from "./BorrowForm";
import { toast as permission } from "sonner";
import toast from "react-hot-toast";
import BookCard from "./BookCard";

const BooksHome = () => {
  const { data, isLoading } = useGetBooksQuery(12);
  const [deleteBook] = useDeleteBookMutation();
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [borrowBookId, setBorrowBookId] = useState<string | null>(null);

  const books = data?.data;

  const handleDeleteBook = (id: string) => {
    permission("Delete this book?", {
      action: {
        label: "Delete",
        onClick: async () => {
          try {
            const res = await deleteBook(id);
            if (res?.data?.success) {
              toast.success("Book deleted!");
            } else {
              toast.error("Failed to delete book");
            }
          } catch (error) {
            if (error instanceof Error) {
              toast.error(error.message);
              console.error(error.message);
            } else {
              toast.error("Something went wrong");
              console.error(error);
            }
          }
        },
      },
    });
  };

  if (isLoading) return <Spinner />;

  return (
     <div className="py-20 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex justify-center mb-8">
        <p className="text-xs w-fit bg-indigo-200 text-indigo-600 font-medium px-3 py-1 rounded-full">
          Latest books
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book: IBook) => (
          <BookCard
            key={book._id}
            book={book}
            onView={setSelectedBookId}
            onDelete={handleDeleteBook}
            onBorrow={setBorrowBookId}
          />
        ))}
      </div>

      {/* Show selected book data */}
      {selectedBookId && (
        <ViewModal
          selectedBookId={selectedBookId}
          setSelectedBookId={setSelectedBookId}
        />
      )}
      {borrowBookId && (
        <BorrowForm
          borrowBookId={borrowBookId}
          setBorrowBookId={setBorrowBookId}
        />
      )}
    </div>
  );
};

export default BooksHome;
