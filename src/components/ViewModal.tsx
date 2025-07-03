import { useGetBookByIdQuery } from "../redux/api/baseApi";

type ViewModalProps = {
  selectedBookId: string;
  setSelectedBookId: React.Dispatch<React.SetStateAction<string | null>>;
};

const ViewModal = ({ selectedBookId, setSelectedBookId }: ViewModalProps) => {
  const { data, isLoading } = useGetBookByIdQuery(selectedBookId);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-24 px-4">
        <div className="bg-white rounded-xl shadow-md py-6 px-5 md:w-[460px] w-[370px] border border-gray-300 flex flex-col items-center">
          <p className="text-sm text-gray-600">Loading book details...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-24 px-4">
        <div className="bg-white rounded-xl shadow-md py-6 px-5 md:w-[460px] w-[370px] border border-gray-300 flex flex-col items-center">
          <p className="text-sm text-red-600">Book not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-24 px-4">
      <div className="bg-white rounded-xl shadow-md py-6 px-5 md:w-[460px] w-[370px] border border-gray-300">
        <h2 className="text-xl font-semibold text-gray-900 text-center mb-4">
          {data?.title}
        </h2>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Author:</strong> {data.author}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Genre:</strong> {data.genre}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>ISBN:</strong> {data.isbn}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Copies:</strong> {data.copies}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <strong>Available:</strong> {data.available ? "Yes" : "No"}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Description:</strong> {data.description}
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => setSelectedBookId(null)}
            type="button"
            className="w-full md:w-36 h-10 rounded-md border border-gray-300 bg-white text-gray-600 font-medium text-sm hover:bg-gray-100 active:scale-95 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
