import { NextResponse } from "next/server";

import React from 'react'

export async function Post(request: Request) {
    const body = await request.json();
    const {email, password}= body;

    console.log('Login request:', email, password)
    

    return NextResponse.json (
        {

            message:'Login successful!',
            user:{email},
        },
        {status: 200}
        
    );
}
