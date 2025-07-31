'use client';

import React from 'react'
import { useState } from 'react';


export default function RegisterPage() {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');

    const handelRegister= async (e:React.FormEvent) => {
        e.preventDefault();

        try{
            const res =await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            });
            const data = await res.json();
            alert(data.message);
        }
        catch(error){
            console.error('registration error:', error);
            alert('Something went wrong!');
        }

    }


    return (
        <>
            <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded shadow'>
<h2 className='text-2xl font-bold mb-4'>Register</h2>
<form className='flex flex-col gap-4' onSubmit={handelRegister}>

    <input type='email' placeholder='email' className='border p-2 rounded'
    value={email}
    onChange={(e)=> setEmail(e.target.value)}
    />

    
    <input type='password' placeholder='password' className='border p-6 rounded'
    value={password}
    onChange={(e)=> setPassword(e.target.value)}
    />
    <button type='submit' className='bg-green-600 text-white p-2 rounded hover:bg-green-700'> Create account</button>
</form>

            </div>
        </>
    )
}
