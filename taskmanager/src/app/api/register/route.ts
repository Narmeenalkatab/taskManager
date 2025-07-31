import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const body = await request.json();
    const {email, password}= body;
    console.log('Requester request:',{email, password});

    return NextResponse.json(
       {
        message: 'User registed successfully!',
        user: {email},
       }
    );
}
