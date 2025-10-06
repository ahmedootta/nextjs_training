import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="dashboard-layout">
            <header className="header text-center text-blue-300">Dashboard Header </header>
            <div className="content">
                {children}
            </div>
            <footer className="footer text-center text-blue-300">Dashboard Footer</footer>
        </div>
    );
}
