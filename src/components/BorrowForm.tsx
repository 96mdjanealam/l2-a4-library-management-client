import {
  useBorrowBookMutation,
  useGetBookByIdQuery,
} from "../redux/api/baseApi";
import { useForm } from "react-hook-form";
import type { IBorrow } from "../types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
type borrowFormProps = {
  borrowBookId: string;
  setBorrowBookId: React.Dispatch<React.SetStateAction<string | null>>;
};

const BorrowForm = ({ borrowBookId, setBorrowBookId }: borrowFormProps) => {
  const [borrowBook, { isLoading: isSubmitting }] = useBorrowBookMutation();
  const navigate = useNavigate();
  const { data, isLoading } = useGetBookByIdQuery(borrowBookId);
  const book = data?.data;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IBorrow>();

  const onSubmit = async (formData: IBorrow) => {
    if (formData.quantity > book.copies) {
      toast.error("Try less quantity");
      return;
    }
    try {
      const res = await borrowBook({
        id: borrowBookId,
        borrowData: formData,
      });

      if (res?.data?.success) {
        toast.success(res.data.message);
        setBorrowBookId(null);
        reset();
        navigate("/borrow-summary");
      } else {
        toast.error("Borrowing failed");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
        console.error(error.message);
      } else {
        toast.error("Failed to borrow book");
        console.error(error);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-24 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          {isLoading && "Title ..."}
          {book?.title}
        </h2>

        <label htmlFor="quantity" className="font-medium">
          Quantity
        </label>
        <input
          id="quantity"
          type="number"
          min={1}
          placeholder="Enter book quantity to borrow"
          required
          className="w-full border mt-1 border-gray-500/30 outline-none rounded-md p-2 mb-2"
          {...register("quantity", {
            required: "Quantity is required",
            valueAsNumber: true,
            min: 1,
          })}
        />
        {errors.quantity && (
          <p className="text-red-500 text-xs mb-2">{errors.quantity.message}</p>
        )}

        <label htmlFor="date" className="font-medium">
          Due Date
        </label>
        <input
          id="date"
          type="date"
          placeholder="Enter due date"
          required
          className="w-full border mt-1 border-gray-500/30 outline-none rounded-md p-2"
          {...register("dueDate", {
            required: "Due date is required",
          })}
        />
        {errors.dueDate && (
          <p className="text-red-500 text-xs mb-2">{errors.dueDate.message}</p>
        )}

        <div className="flex gap-4 mt-5">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex items-center justify-center gap-1 py-2.5 w-full rounded-md transition ${
              isSubmitting
                ? "bg-indigo-300 cursor-not-allowed"
                : "bg-indigo-500 hover:bg-indigo-600 text-white"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <button
            onClick={() => setBorrowBookId(null)}
            className="w-full md:w-36 h-10 rounded-md border border-gray-300 bg-white text-gray-600 font-medium text-sm hover:bg-gray-100 cursor-pointer active:scale-95 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BorrowForm;
