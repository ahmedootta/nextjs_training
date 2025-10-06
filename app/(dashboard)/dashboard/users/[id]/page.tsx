import React from "react";

function userDetailsPage({ params }: { params: { id: string } }) {
    const { id } = params;
    return (
        <div className="text-2xl font-bold text-center">
            User Details for ID: {id}
        </div>
    );
}

export default userDetailsPage;