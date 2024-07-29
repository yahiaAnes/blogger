import React from 'react'
import { Link } from '@inertiajs/react';

const Header = ({auth}) => {
  return (
    <div className="w-full flex items-center  fixed top-0 z-20">
    <div className=" w-full max-w-2xl px-6 lg:max-w-7xl">
        <header className="grid grid-cols-2 items-center gap-2 py-5 lg:grid-cols-3">
            <div className="flex lg:justify-center lg:col-start-2">
               
               
            </div>
            <nav className="-mx-3 flex flex-1 justify-end">
                {auth.user ? (
                    <Link
                        href={route('dashboard')}
                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link
                            href={route('login')}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Log in
                        </Link>
                        <Link
                            href={route('register')}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Register
                        </Link>
                    </>
                )}
            </nav>
        </header>

        

      
    </div>
    </div>
  )
}

export default Header
