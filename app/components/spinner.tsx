import React from "react";

const spinnerStyle: React.CSSProperties = {
    display: "inline-block",
    width: 48,
    height: 48,
    border: "5px solid #f3f3f3",
    borderTop: "5px solid #3498db",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
};

export default function Spinner() {
    return (
        <>
            <style>{`
				@keyframes spin {
					0% { transform: rotate(0deg); }
					100% { transform: rotate(360deg); }
				}
			`}</style>
            <div style={spinnerStyle} />
        </>
    );
}
