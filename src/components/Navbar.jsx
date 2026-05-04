'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { signOut, useSession } from '@/lib/auth-client';
import ImageWithSkeleton from './ImageSkeleton';

const defaultPfImage = "https://images.unsplash.com/photo-1740252117013-4fb21771e7ca?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Navbar = () => {
    const { data, isPending, refetch } = useSession();
    const [imgError, setImgError] = useState(false);
    const user = data?.user;


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
                {
                    isPending ? <div className='h-10 rounded-lg w-35 bg-gray-500 relative overflow-hidden'>
                        <span
                            className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/60 to-transparent transition-transform duration-100 animate-[shimmer_0.8s_infinite]"
                            style={{
                                transform: 'skewX(-20deg)',
                            }}
                        />
                    </div> : user ?
                        <>
                            <div className='flex items-center gap-7 text-small'>
                                <div className='flex items-center justify-center gap-2'>
                                    <div className='h-10 w-10 rounded-full relative overflow-hidden'>
                                        <ImageWithSkeleton
                                            src={imgError ? defaultPfImage : user.image}
                                            alt={user.name}
                                            className={'rounded-full bg-gray-500 object-cover'}
                                            onError={() => setImgError(true)}
                                            fill
                                        ></ImageWithSkeleton>
                                    </div>
                                    <div className='flex gap-4 items-center justify-center'>
                                        <p className='font-family-sans'><span className='font-semibold text-tx-secondary text-small'>Welcome,</span> <span className='font-family-display text-body italic capitalize'>{user.name}</span></p>
                                        <ThemeToggle></ThemeToggle>
                                        <button onClick={() =>{
                                            refetch()
                                            signOut()
                                            }} className='px-4  py-1.5 rounded-2xl border-[0.5] border-gray-700 hover:border-accent-gold hover:text-accent-gold cursor-pointer'>Log Out</button>
                                    </div>
                                </div>
                            </div>
                        </> :
                        <div className='flex gap-5'>
                            <ThemeToggle></ThemeToggle>
                            <Link href={'/auth/login'}><button className='px-4  py-1.5 rounded-2xl border-[0.5] border-gray-700 hover:border-accent-gold hover:text-accent-gold cursor-pointer'>Login</button></Link>
                            <Link href={'/auth/register'}><button className="relative overflow-hidden px-4 py-1.5 bg-accent-gold text-black font-medium rounded-md group hover:shadow-glow hover:translate-y-[-0.8px] cursor-pointer">
                                <span
                                    className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/60 to-transparent transition-transform duration-100 group-hover:animate-[shimmer_0.8s]"
                                    style={{
                                        transform: 'skewX(-20deg)',
                                    }}
                                />
                                <span className="relative">Register</span>
                            </button></Link>
                        </div>
                }
            </div>
        </nav>
    );
};

export default Navbar;