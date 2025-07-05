import { CircleCheck, CircleX } from "lucide-react";
import { useGetBookByIdQuery } from "../redux/api/baseApi";

type ViewModalProps = {
  selectedBookId: string;
  setSelectedBookId: React.Dispatch<React.SetStateAction<string | null>>;
};

const ViewModal = ({ selectedBookId, setSelectedBookId }: ViewModalProps) => {
  const { data, isLoading } = useGetBookByIdQuery(selectedBookId);

  const book = data?.data;

  console.log(data);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-24 px-4">
        <div className="bg-white rounded-xl shadow-md py-6 px-5 md:w-[460px] w-[370px] border border-gray-300 flex flex-col items-center">
          <p className="text-sm text-gray-600">Loading book details...</p>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-24 px-4">
        <div className="bg-white rounded-xl shadow-md py-6 px-5 md:w-[460px] w-[370px] border border-gray-300 flex flex-col items-center">
          <p className="text-sm text-red-600">Book not found.</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => setSelectedBookId(null)}
            type="button"
            className="w-full md:w-36 h-10 rounded-md border border-gray-300 bg-white text-gray-600 font-medium text-sm hover:bg-gray-100 cursor-pointer active:scale-95 transition"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-24 px-4">
      <div className="bg-white rounded-xl shadow-md py-6 px-5 md:w-[460px] w-[370px] border border-gray-300">
        <h2 className="text-xl font-semibold text-violet-500 text-center mb-4">
          {book.title}
        </h2>
        <hr className="border-black/30 mb-4" />
        <p className="text-sm text-gray-600 mb-2">
          <strong>Author:</strong> {book.author}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Genre:</strong> {book.genre}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>ISBN:</strong> {book.isbn}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Copies:</strong> {book.copies}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Available:</strong>{" "}
          {book.available ? (
            <CircleCheck className="inline-block w-5 text-green-500" />
          ) : (
            <CircleX className="inline-block w-5 text-red-500" />
          )}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Description:</strong> {book.description}
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => setSelectedBookId(null)}
            type="button"
            className="w-full md:w-36 h-10 rounded-md border border-gray-300 bg-white text-gray-600 font-medium text-sm hover:bg-gray-100 cursor-pointer active:scale-95 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
