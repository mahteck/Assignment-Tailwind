'use client'

import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                <div className="text-xl font-bold">MyAPP</div>
                <button className="block lg:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </button>
                <ul className={`flex flex-col lg:flex-row lg:space-x-6 absolute lg:static bg-gray-800 w-full lg:w-auto 
                        ${isMenuOpen ? "top-16 left-0" : "hidden"} lg:flex`}>
                    <li className="py-2 lg:py-0 px-4">
                        <a href="/">Home</a>
                    </li>
                    <li className="py-2 lg:py-0 px-4">
                        <a href="/Aboutus">About us</a>
                    </li>
                    <li className="py-2 lg:py-0 px-4">
                        <a href="/Contactus">Contact us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}