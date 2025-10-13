import React from "react";

type Book = {
    id: number;
    title: string;
    author: string;
};

// Server component to fetch books and render children with books data
export default async function BooksProvider({
    children,
}: {
    children: (books: Book[]) => React.ReactNode;
}) {
    const res = await fetch("http://localhost:3000/api/books", {
        cache: "no-store",
    });
    const books: Book[] = await res.json();
    return <>{children(books)}</>;
}
