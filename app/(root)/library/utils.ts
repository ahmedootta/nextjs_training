import { books } from "@/app/api/db/route";

type Book = {
    id: number;
    title: string;
    author: string;
};

export function getBookById(id: number): Book | undefined {
    return books.find((b) => b.id === id);
}