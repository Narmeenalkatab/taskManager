'usecclient';
import React from 'react'
import Link from 'next/link';

export default function Navbar() {
    

    return (
        <>
            <nav className='bg-gray-900 text-white p-4 flex justify-between'>


<div className='font-bold text-lg'> Task Manager</div>
<div className='flex gap-4'>
<Link href='/' className='hover:underline'>Home</Link>
<Link href='/login' className='hover:underline'>Login</Link>
<Link href='/register' className='hover:underline hover:bg-pink-300'>Register</Link>

</div>

            </nav>
        </>
    )
}
