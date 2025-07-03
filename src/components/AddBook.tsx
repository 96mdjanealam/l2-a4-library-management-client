import {
  ArrowRight,
  BookCopy,
  BookMarked,
  BookType,
  UserPen,
  Barcode,
} from "lucide-react";

const AddBook = () => {
  return (
    <form className="flex flex-col items-center text-sm text-slate-800 py-20">
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
            name="title"
            type="text"
            className="h-full px-2 w-full outline-none bg-transparent"
            placeholder="Enter the book title"
            required
          />
        </div>

        {/* Author */}
        <label htmlFor="author" className="font-medium mt-4">
          Author
        </label>
        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
          <UserPen className="w-5 text-slate-500" />
          <input
            id="author"
            name="author"
            type="text"
            className="h-full px-2 w-full outline-none bg-transparent"
            placeholder="Enter author name"
            required
          />
        </div>

        {/* Genre */}
        <label htmlFor="genre" className="font-medium mt-4">
          Genre
        </label>
        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
          <BookType className="w-5 text-slate-500" />
          <input
            id="genre"
            name="genre"
            type="text"
            className="h-full px-2 w-full outline-none bg-transparent"
            placeholder="Enter genre"
            required
          />
        </div>

        {/* ISBN */}
        <label htmlFor="isbn" className="font-medium mt-4">
          ISBN
        </label>
        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
          <Barcode className="w-5 text-slate-500" />
          <input
            id="isbn"
            name="isbn"
            type="text"
            className="h-full px-2 w-full outline-none bg-transparent"
            placeholder="Enter ISBN number"
            required
          />
        </div>

        {/* Copies */}
        <label htmlFor="copies" className="font-medium mt-4">
          Copies
        </label>
        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
          <BookCopy className="w-5 text-slate-500" />
          <input
            id="copies"
            name="copies"
            type="number"
            min={1}
            className="h-full px-2 w-full outline-none bg-transparent"
            placeholder="Enter number of copies"
            required
          />
        </div>

        {/* Submit Button */}
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
