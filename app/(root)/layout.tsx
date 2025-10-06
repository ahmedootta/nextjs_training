import React from "react";

const rootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            {/* <h1 className="text-center font-bold">Layout of all root routes</h1> */}
            {children}
        </div>
    );
};

export default rootLayout;
