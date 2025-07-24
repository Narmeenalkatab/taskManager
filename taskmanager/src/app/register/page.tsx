import React from 'react'

export default function RegisterPage() {
    

    return (
        <>
            <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded shadow'>
<h2 className='text-2xl font-bold mb-4'>Register</h2>
<form className='flex flex-col gap-4'>

    <input type='email' placeholder='email' className='border p-2 rounded'/>
    <input type='password' placeholder='password' className='border p-6 rounded'/>
    <button type='submit' className='bg-green-600 text-white p-2 rounded hover:bg-green-700'> Create account</button>
</form>

            </div>
        </>
    )
}
