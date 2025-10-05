"use client";

import { use, useEffect } from "react";

function Hello() {
    useEffect(() => {
        console.log("Hello Component FROM CLIENT--inside useEffect");
    }, []);
    console.log("Hello Component FROM CLIENT-- outside useEffect");
    return <div>Hello from the Hello component!</div>;
}

export default Hello;
