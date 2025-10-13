import BooksProvider from "@/app/components/booksProvider";

type Book = {
  id: number;
  title: string;
  author: string;
};

export default function LibraryPage() {
  return (
    <BooksProvider>
      {(books: Book[]) => (
        <div
          style={{
            maxWidth: 600,
            margin: "0 auto",
            padding: 24,
            marginBottom: 10,
          }}
        >
          <h1>Library</h1>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {books.map((book) => (
              <div
                key={book.id}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: 8,
                  padding: 16,
                  boxShadow: "0 2px 8px #eee",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontWeight: "bold" }}>{book.title}</div>
                  <div style={{ color: "#555" }}>{book.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </BooksProvider>
  );
}
