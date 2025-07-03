import {
  ArrowRight,
  BookCopy,
  BookMarked,
  UserPen,
  Barcode,
} from "lucide-react";
import { useForm } from "react-hook-form";
import type { IBookInput } from "../types";

const AddBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IBookInput>();

  const onSubmit = (data: IBookInput) => {
    console.log("Submitted book data:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center text-sm text-slate-800 py-20"
    >
      <p className="text-xs bg-indigo-200 text-indigo-600 font-medium px-3 py-1 rounded-full">
        Add a new book
      </p>
      <h1 className="text-4xl font-bold py-4 text-center">Insert a New Tale</h1>
      <p className="max-md:text-sm text-gray-500 pb-10 text-center">
        Every great story deserves a spot — log your book below.
      </p>

      <div className="max-w-96 w-full px-4">
        {/* Title */}
        <label htmlFor="title" className="font-medium">
          Title
        </label>
        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
          <BookMarked className="w-5 text-slate-500" />
          <input
            id="title"
            type="text"
            placeholder="Enter the book title"
            className="h-full px-2 w-full outline-none bg-transparent"
            {...register("title", { required: "Title is required" })}
          />
        </div>
        {errors.title && (
          <p className="text-red-500 text-xs mb-2">{errors.title.message}</p>
        )}

        {/* Author */}
        <label htmlFor="author" className="font-medium mt-4">
          Author
        </label>
        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
          <UserPen className="w-5 text-slate-500" />
          <input
            id="author"
            type="text"
            placeholder="Enter author name"
            className="h-full px-2 w-full outline-none bg-transparent"
            {...register("author", { required: "Author is required" })}
          />
        </div>
        {errors.author && (
          <p className="text-red-500 text-xs mb-2">{errors.author.message}</p>
        )}

        {/* Genre */}
        <label htmlFor="genre" className="font-medium mt-4">
          Genre
        </label>
        <div className="mt-2 mb-4">
          <select
            id="genre"
            className="w-full h-10 px-3 border border-slate-300 rounded-full bg-transparent outline-none focus:ring-2 focus:ring-indigo-400 transition-all text-slate-700"
            {...register("genre", { required: "Genre is required" })}
          >
            <option value="">Select a genre</option>
            <option value="FICTION">Fiction</option>
            <option value="NON_FICTION">Non-fiction</option>
            <option value="SCIENCE">Science</option>
            <option value="HISTORY">History</option>
            <option value="BIOGRAPHY">Biography</option>
            <option value="FANTASY">Fantasy</option>
          </select>
        </div>
        {errors.genre && (
          <p className="text-red-500 text-xs mb-2">{errors.genre.message}</p>
        )}

        {/* ISBN */}
        <label htmlFor="isbn" className="font-medium mt-4">
          ISBN
        </label>
        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
          <Barcode className="w-5 text-slate-500" />
          <input
            id="isbn"
            type="text"
            placeholder="Enter ISBN number"
            className="h-full px-2 w-full outline-none bg-transparent"
            {...register("isbn", { required: "ISBN is required" })}
          />
        </div>
        {errors.isbn && (
          <p className="text-red-500 text-xs mb-2">{errors.isbn.message}</p>
        )}

        {/* Copies */}
        <label htmlFor="copies" className="font-medium mt-4">
          Copies
        </label>
        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
          <BookCopy className="w-5 text-slate-500" />
          <input
            id="copies"
            type="number"
            min={1}
            placeholder="Enter number of copies"
            className="h-full px-2 w-full outline-none bg-transparent"
            {...register("copies", {
              required: "Copies are required",
              min: { value: 1, message: "At least one copy is required" },
              valueAsNumber: true,
            })}
          />
        </div>
        {errors.copies && (
          <p className="text-red-500 text-xs">{errors.copies.message}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="flex items-center cursor-pointer justify-center gap-1 mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 w-full rounded-full transition"
        >
          Submit Form
          <ArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </form>
  );
};

export default AddBook;
