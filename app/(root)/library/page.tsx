"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/app/components/spinner";

type Book = {
  id: number;
  title: string;
  author: string;
};

export default function LibraryPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const res = await fetch("/api/books");
      const data = await res.json();
      setBooks(data);
      setLoading(false);
    };
    fetchBooks();
  }, []);

  const handleBookClick = (id: number) => {
    setIsNavigating(true);
    router.push(`/library/${id}`);
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "0 auto",
        padding: 24,
        marginBottom: 10,
      }}
    >
      {loading || isNavigating ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 120,
          }}
        >
          <Spinner />
        </div>
      ) : (
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
                cursor: "pointer",
                transition: "box-shadow 0.2s, border-color 0.2s",
              }}
              onClick={() => handleBookClick(book.id)}
              onMouseOver={(e) =>
                (e.currentTarget.style.boxShadow = "0 4px 16px #bbb")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.boxShadow = "0 2px 8px #eee")
              }
            >
              <div>
                <div style={{ fontWeight: "bold" }}>{book.title}</div>
                <div style={{ color: "#555" }}>{book.author}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
