import { useGetBookByIdQuery } from "../redux/api/baseApi";

type ViewModalProps = {
  selectedBookId: string;
  setSelectedBookId: React.Dispatch<React.SetStateAction<string | null>>;
};

const ViewModal = ({ selectedBookId, setSelectedBookId }: ViewModalProps) => {

    const {data, isLoading}= useGetBookByIdQuery(selectedBookId)

    console.log(data)

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-24 px-4">
      <div className="flex flex-col items-center bg-white shadow-md rounded-xl py-6 px-5 md:w-[460px] w-[370px] border border-gray-300">
        <h2 className="text-gray-900 font-semibold mt-4 text-xl">Are you sure?</h2>
        <p className="text-sm text-gray-600 mt-2 text-center">
          Do you really want to continue? This action
          <br />
          cannot be undone.
        </p>
        <p className="mt-2 text-xs text-gray-500">Book ID: {selectedBookId}</p>
        <div className="flex items-center justify-center gap-4 mt-5 w-full">
          <button
            onClick={() => setSelectedBookId(null)}
            type="button"
            className="w-full md:w-36 h-10 rounded-md border border-gray-300 bg-white text-gray-600 font-medium text-sm hover:bg-gray-100 active:scale-95 transition"
          >
            Cancel
          </button>
          <button
            type="button"
            className="w-full md:w-36 h-10 rounded-md text-white bg-red-600 font-medium text-sm hover:bg-red-700 active:scale-95 transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
