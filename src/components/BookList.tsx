import books from "../data/bookData.json";
import { Book } from "./book";

export const BookList = () => {
  // console.log(books);
  return (
    <div className="grid grid-cols-3 gap-4 px-16 pt-7 ">
      {books.map((book) => (
        <Book key={book.author} book={book}></Book>
      ))}
    </div>
  );
};
