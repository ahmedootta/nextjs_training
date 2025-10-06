import Link from "next/link";
import React from "react";

export default function DashboardPage() {
    return (
        <div className="text-2xl font-bold text-center">
            <ul className="list-decimal">
                <li>
                    <Link href="/dashboard/users/1">User 1</Link>
                </li>
                <li>
                    <Link href="/dashboard/users/2">User 2</Link>
                </li>
                <li>
                    <Link href="/dashboard/users/3">User 3</Link>
                </li>
            </ul>
        </div>
    );
}