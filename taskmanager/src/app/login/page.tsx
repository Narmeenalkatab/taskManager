'use client';
import React from 'react'
import { useState } from 'react';


export default function LoginPage() {
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
         e.preventDefault();
         try {
            const res = await fetch('/api/login', {
                method:'POST',
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({email, password})
            });
            const data= await res.json();
            alert(data.message);
         }
         catch(error){
            console.log('Login Error:', error);
            alert('email or password are incorrect');

         }

    }

    return (
        <>
          <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded shadow'>
            <h2 className='text-2xl font-bold mb-4'> Login </h2>

            <form className='flex flex-col gap-4' onSubmit={handleLogin}>
                <input type='email' placeholder='Enter your email' className='border p-2 rounded' value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                <input type='password' placeholder='password' className='border p-2 rounded'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button type='submit' className='bg-blue-600 text-white p-2 rounded hover:bg-blue-700'> Login </button>


            </form>
            
            </div>  
        </>
    );
}
