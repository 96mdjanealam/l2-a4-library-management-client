export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  available: boolean;
}

export interface IBookInput {
  title: string;
  author: string;
  genre:
    | "FICTION"
    | "NON_FICTION"
    | "SCIENCE"
    | "HISTORY"
    | "BIOGRAPHY"
    | "FANTASY";
  isbn: string;
  description: string;
  copies: number;
}

export interface IBorrow {
  quantity: number;
  dueDate: string;
}

export interface IBorrowSummary {
  book: { title: string; isbn: string };
  totalQuantity: number;
}
