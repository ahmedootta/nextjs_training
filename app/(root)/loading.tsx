export default function Loading() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <div className="bouncing-dots-spinner">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <style>{`
				.bouncing-dots-spinner {
					display: flex;
					gap: 8px;
				}
				.bouncing-dots-spinner span {
					width: 16px;
					height: 16px;
					background: #3498db;
					border-radius: 50%;
					display: inline-block;
					animation: bounce 0.6s infinite alternate;
				}
				.bouncing-dots-spinner span:nth-child(2) {
					animation-delay: 0.2s;
				}
				.bouncing-dots-spinner span:nth-child(3) {
					animation-delay: 0.4s;
				}
				@keyframes bounce {
					to {
						transform: translateY(-20px);
						opacity: 0.7;
					}
				}
			`}</style>
        </div>
    );
}
