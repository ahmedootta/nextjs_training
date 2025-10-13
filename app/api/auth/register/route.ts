import { NextRequest, NextResponse } from "next/server";
import { users } from "@/app/api/db/route";

export async function POST(request: NextRequest) {
	const { email, password, passwordConfirm } = await request.json();

	// Basic validation
	if (!email || !password || !passwordConfirm) {
		return NextResponse.json({ message: "All fields are required." }, { status: 400 });
	}
	if (password !== passwordConfirm) {
		return NextResponse.json({ message: "Passwords do not match." }, { status: 400 });
	}
	if (users.find(u => u.email === email)) {
		return NextResponse.json({ message: "Email already exists." }, { status: 409 });
	}

	// Add new user
	users.push({ email, password });
	return NextResponse.json({ message: "Registration successful." }, { status: 201 });
}
