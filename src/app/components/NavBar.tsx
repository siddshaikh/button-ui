"use client";
import { Moon, Sun, Crown, } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const navItems = [{ name: 'Examples', path: '/tailwind', icon: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000" }, { name: 'Tailwind Buttons', path: '/tailwind', icon: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000" }, { name: 'MUI Buttons', path: '/mui', icon: "https://img.icons8.com/?size=100&id=gFw7X5Tbl3ss&format=png&color=000000" }]
const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDarkMode) {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }
    }, []);
    return (
        <div className="border-b-gray-600 border-b-[1px] py-2 px-10 flex items-center justify-between sticky top-0 z-10">
            <Link href="/">
                <h1 className="font-bold tracking-wide text-2xl">bui</h1>
            </Link>
            {/* nav items */}
            {
                navItems.map(item => (
                    <Link href={item.path} key={item.name} className='flex items-center space-x-2'>
                        <Image src={item.icon} height={24} width={24} alt={item.name} />
                        <span>{item.name}</span>
                    </Link>
                ))
            }
            <Crown size={24} className='text-yellow-500' />
            <button
                className="cursor-pointer p-2 transition-all duration-500 ease-in-out transform translate-1"
                onClick={toggleDarkMode}
            >
                {isDarkMode ? <Moon /> : <Sun />}
            </button>
        </div>
    );
};

export default NavBar;
