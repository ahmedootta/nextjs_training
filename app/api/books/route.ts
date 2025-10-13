import { NextRequest, NextResponse } from "next/server";
import { books } from "../db/route";

export async function GET(request: NextRequest) {
    return NextResponse.json(books);
}

export async function POST(request: NextRequest) {
    const newBook = await request.json();
    newBook.id = books.length + 1;
    books.push(newBook);
    return NextResponse.json({
        ...newBook,
        message: "Book created successfully"
    }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get("id") || "0");
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
    books.splice(index, 1);
    }
    return NextResponse.json({ message: "Book deleted" });
}