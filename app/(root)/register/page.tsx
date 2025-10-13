"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [message, setMessage] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(null);
        setSuccess(false);
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, passwordConfirm }),
            });
            const data = await res.json();
            setMessage(data.message || "Registration failed");
            setSuccess(res.ok);
            if (res.ok) {
                setEmail("");
                setPassword("");
                setPasswordConfirm("");
                setTimeout(() => router.push("/login"), 1200);
            }
        } catch (err) {
            setMessage("An error occurred");
        }
    };

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
            <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
            <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    required
                    style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
                />
                <button
                    type="submit"
                    style={{
                        padding: 10,
                        borderRadius: 4,
                        background: "#22c55e",
                        color: "#fff",
                        border: "none",
                    }}
                >
                    Register
                </button>
            </form>
            {message && (
                <div style={{ marginTop: 16, color: success ? "green" : "red" }}>
                    {message}
                </div>
            )}
        </div>
    );
}
