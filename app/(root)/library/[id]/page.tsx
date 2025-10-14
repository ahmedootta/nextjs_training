import type { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: { id: string };
}): Promise<Metadata> {
    const id = parseInt(params.id);
    const book = (books as Book[]).find((b) => b.id === id);
    if (!book) {
        return {
            title: "Book Not Found",
            description: "No book found with this ID.",
        };
    }
    return {
        title: book.title,
        description: `Book by ${book.author}`,
    };
}
import { books } from "@/app/api/db/route";

type Book = {
    id: number;
    title: string;
    author: string;
};

type Props = { params: { id: string } };

export default function BookPage({ params }: Props) {
    const id = parseInt(params.id);
    const book = (books as Book[]).find((b) => b.id === id);

    if (!book) {
        return (
            <div
                style={{
                    maxWidth: 400,
                    margin: "40px auto",
                    padding: 24,
                    border: "1px solid #eee",
                    borderRadius: 8,
                    color: "red",
                }}
            >
                <h2>Book Not Found</h2>
                <p>No book found with id {params.id}.</p>
            </div>
        );
    }

    return (
        <div
            style={{
                maxWidth: 400,
                margin: "40px auto",
                padding: 24,
                border: "1px solid #eee",
                borderRadius: 8,
            }}
        >
            <h2 className="text-2xl font-bold mb-4 text-center">Book Details</h2>
            <div style={{ marginBottom: 12 }}>
                <strong>ID:</strong> {book.id}
            </div>
            <div style={{ marginBottom: 12 }}>
                <strong>Title:</strong> {book.title}
            </div>
            <div style={{ marginBottom: 12 }}>
                <strong>Author:</strong> {book.author}
            </div>
        </div>
    );
}
