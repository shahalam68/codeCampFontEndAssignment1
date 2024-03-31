import { BookImage } from "./BookImage";

export const Book = ({ book }) => {
  console.log(book);
  const { author, title, imageUrl, price } = book;

  return (
    <>
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <BookImage img={imageUrl} />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{author}</div>
          <p className="text-gray-700 text-base">This is a book description.</p>
        </div>
      </div>
    </>
  );
};
