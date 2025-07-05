import { useGetBorrowSummaryQuery } from "../redux/api/baseApi";
import type { IBorrowSummary } from "../types";
import Spinner from "./Spinner";

const BorrowSummary = () => {
  const { data, isLoading } = useGetBorrowSummaryQuery(undefined);
  const borrowedBooks: IBorrowSummary[] = data?.data || [];

  if (isLoading) return <Spinner />;

  return (
    <div className="overflow-x-auto w-full py-20 px-3 md:px-16 lg:px-24 xl:px-32">
      <div className="flex justify-center mb-8">
        <p className="text-xs w-fit bg-indigo-200 text-indigo-600 font-medium px-3 py-1 rounded-full">
          Borrow Summary
        </p>
      </div>
      <div className="border border-gray-300 rounded-md overflow-hidden">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 border-b border-gray-300 uppercase">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Book Title</th>
              <th className="px-4 py-2">ISBN</th>
              <th className="px-4 py-2">Quantity Borrowed</th>
            </tr>
          </thead>
          <tbody>
            {borrowedBooks.map((book, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-50 ${
                  borrowedBooks.length === index + 1
                    ? ""
                    : "border-b border-gray-300"
                } `}
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{book.book.title}</td>
                <td className="px-4 py-2">{book.book.isbn}</td>
                <td className="px-4 py-2">{book.totalQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorrowSummary;
