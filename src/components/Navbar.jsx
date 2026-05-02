'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const linkTag = [
        { name: "Home", path: "/" },
        { name: "Course", path: "/courses" },
        { name: "My profile", path: "/profile" },
    ];
    const pathName = usePathname()
    const links = <>
        {linkTag.map((tag, i) => {
            let isActive = pathName === tag.path
            return <li className="relative py-1 cursor-pointer group list-none" key={i}>
                <Link href={tag.path} className='py-1'>
                    <span className={`${isActive ? 'text-accent-gold' : 'text-tx-secondary group-hover:text-tx-primary'} transition-colors duration-300 text-small`}>
                        {tag.name}
                    </span>
                    <span className={`absolute bottom-0 left-1/2 ${isActive ? 'w-full' : 'w-0'} h-0.5 -translate-x-1/2 bg-amber-500 transition-all duration-300 ease-in-out group-hover:w-full`} />
                </Link>
            </li>

        })}
    </>
    return (
        <nav className='w-full py-5 shadow-sm sticky top-0 backdrop-blur-xl z-9999999'>
            <div className='flex max-w-11/13 mx-auto justify-between items-center relative'>
                <div>
                    <ul className='flex justify-between gap-8'>
                        {links}
                    </ul>
                </div>

                <div className={`font-family-mono logo absolute to-0% left-1/2 -translate-x-1/2 text-title font-bold`}> Skill<span className='text-accent-gold'>Sphere</span></div>

                <div className='flex items-center gap-7 text-small'>
                    <ThemeToggle></ThemeToggle>
                    <button className='px-4  py-1.5 rounded-2xl border-[0.5] border-gray-700 hover:border-accent-gold hover:text-accent-gold cursor-pointer'>Login</button>
                    <button className="relative overflow-hidden px-4 py-1.5 bg-accent-gold text-black font-medium rounded-md group hover:shadow-glow hover:translate-y-[-0.8px] cursor-pointer">
                        <span
                            className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/60 to-transparent transition-transform duration-100 group-hover:animate-[shimmer_0.8s]"
                            style={{
                                transform: 'skewX(-20deg)',
                            }}
                        />
                        <span className="relative">Register</span>
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;