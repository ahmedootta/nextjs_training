"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok && data.token) {
                localStorage.setItem("token", data.token);
                setMessage("Login successful!");
                router.push("/library");
            } else {
                setMessage(data.message || "Login failed");
            }
        } catch (err) {
            setMessage("An error occurred");
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
            <h2 className="text-2xl font-bold mb-4 text-center">Welcome Back Bro!</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
                />
                <button type="submit" style={{ padding: 10, borderRadius: 4, background: "#0070f3", color: "#fff", border: "none" }}>
                    Login
                </button>
            </form>
            {message && (
                <div style={{ marginTop: 16, color: message === "Login successful!" ? "green" : "red" }}>
                    {message}
                </div>
            )}
        </div>
    );
}