import React from 'react'
import FetchSession from '~/hooks/FetchSession'
import Button from './common/Button';
import { signIn, signOut } from "next-auth/react"

export default function HomePage() {
    let session = FetchSession();
  return (
    <div>
        
        <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Google_Drive_logo.png/768px-Google_Drive_logo.png" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Drive Clone</span>
        </a>
        <div className="flex items-center md:order-2">
            <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src={session?.user.image} alt="user photo" />
            </button>
            <div>
            {session ? <Button onClick={() => signOut()} btnclass={"btn-primary"} title={"Sign-Out"}/> 
        : <Button onClick={() => signIn()} btnclass={"btn-primary"} title={"Sign-Up"}/>}
        </div>
        </div>
        </div>
        </nav>

    </div>
  )
}
