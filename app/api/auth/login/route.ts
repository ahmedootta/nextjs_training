import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { users } from "../../db/route";


// POST /api/auth
export async function POST(request: NextRequest) {
    const { email, password } = await request.json();

    // Check if user exists and password matches
    const user = users.find(
        (u) => u.email === email && u.password === password
    );

    if (!user) {
        return NextResponse.json(
            { message: "Invalid email or password" },
            { status: 401 }
        );
    }

    // Generate JWT
    const secret = process.env.SECRET_KEY as string;
    const token = jwt.sign({ email: user.email }, secret, { expiresIn: "1h" });

    return NextResponse.json({ token });
}