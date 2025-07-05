import {
  ArrowRight,
  BookCopy,
  BookMarked,
  UserPen,
  Barcode,
  LetterText,
} from "lucide-react";
import { useForm } from "react-hook-form";
import type { IBookInput } from "../types";
import { useEditBookMutation, useGetBookByIdQuery } from "../redux/api/baseApi";
import { useParams } from "react-router";
import Spinner from "./Spinner";
import { useEffect, useMemo } from "react";
import toast from "react-hot-toast";

const EditBook = () => {
  // const navigate = useNavigate();
  const params = useParams();
  const { data, isLoading } = useGetBookByIdQuery(params.id);
  const book = data?.data;
  const [editBook, { isLoading: isEditing }] = useEditBookMutation();
  const oldData = useMemo(() => {
    if (!book) return null;
    return {
      title: book.title,
      author: book.author,
      genre: book.genre,
      isbn: book.isbn,
      copies: book.copies,
      description: book.description,
    };
  }, [book]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IBookInput>();

  useEffect(() => {
    if (book) {
      reset({
        title: book.title,
        author: book.author,
        genre: book.genre,
        isbn: book.isbn,
        copies: book.copies,
        description: book.description,
      });
    }
  }, [book, reset]);

  const onSubmit = async (formData: IBookInput) => {
    if (JSON.stringify(formData) === JSON.stringify(oldData)) {
      toast.error("No changes made!");
      return;
    }

    try {
      const res = await editBook({
        id: params.id,
        bookData: formData,
      });

      if (res?.data?.success) {
        toast.success(res.data.message);
      } else {
        toast.error("Failed to update book");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
        console.error("Failed to update book:", error.message);
      } else {
        toast.error("Failed to update book");
        console.error("Unknown error:", error);
      }
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center text-sm text-slate-800 py-20"
    >
      <p className="text-xs bg-indigo-200 text-indigo-600 font-medium px-3 py-1 rounded-full">
        Edit the book info
      </p>
      <h1 className="text-4xl font-bold py-4 text-center">{book.title}</h1>
      <p className="max-md:text-sm text-gray-500 pb-10 text-center">
        Fill out the form below and update the book information.
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
            min="0"
            type="number"
            placeholder="Enter number of copies"
            className="h-full px-2 w-full outline-none bg-transparent"
            {...register("copies", {
              valueAsNumber: true,
              required: "Copies are required",
            })}
          />
        </div>
        {errors.copies && (
          <p className="text-red-500 text-xs mb-2">{errors.copies.message}</p>
        )}

        {/* Description */}
        <label htmlFor="description" className="font-medium mt-4">
          Description
        </label>
        <div className="flex items-start mt-2 mb-4 gap-2 border border-slate-300 rounded-2xl focus-within:ring-2 focus-within:ring-indigo-400 transition-all px-3 py-2">
          <LetterText className="w-5 text-slate-500" />
          <textarea
            id="description"
            placeholder="Enter book description here"
            className="w-full outline-none bg-transparent resize-none text-sm"
            rows={3}
            {...register("description", {
              required: "Description is required",
            })}
          />
        </div>
        {errors.description && (
          <p className="text-red-500 text-xs">{errors.description.message}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isEditing}
          className={`flex items-center justify-center gap-1 mt-5 py-2.5 w-full rounded-full transition ${
            isEditing
              ? "bg-indigo-300 cursor-not-allowed"
              : "bg-indigo-500 hover:bg-indigo-600 text-white"
          }`}
        >
          {isEditing ? "Submitting..." : "Update info"}
          <ArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </form>
  );
};

export default EditBook;
