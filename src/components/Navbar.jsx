'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { signOut, useSession } from '@/lib/auth-client';
import ImageWithSkeleton from './ImageSkeleton';
import { Menu, X } from 'lucide-react';

const defaultPfImage = "https://images.unsplash.com/photo-1740252117013-4fb21771e7ca?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Navbar = () => {
    const { data, isPending, refetch } = useSession();
    const [imgError, setImgError] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const user = data?.user;

    const linkTag = [
        { name: "Home", path: "/" },
        { name: "Course", path: "/courses" },
        { name: "My profile", path: "/profile" },
    ];
    const pathName = usePathname()
    
    const links = (
        <>
            {linkTag.map((tag, i) => {
                let isActive = pathName === tag.path
                return <li className="relative py-1 cursor-pointer group list-none" key={i}>
                    <Link href={tag.path} onClick={() => setMobileMenuOpen(false)} className='py-1'>
                        <span className={`${isActive ? 'text-accent-gold' : 'text-tx-secondary group-hover:text-tx-primary'} transition-colors duration-300 text-small`}>
                            {tag.name}
                        </span>
                        <span className={`absolute bottom-0 left-1/2 ${isActive ? 'w-full' : 'w-0'} h-0.5 -translate-x-1/2 bg-amber-500 transition-all duration-300 ease-in-out group-hover:w-full`} />
                    </Link>
                </li>
            })}
        </>
    )

    return (
        <nav className='w-full py-3 md:py-5 shadow-sm sticky top-0 backdrop-blur-xl z-9999999'>
            <div className='flex max-w-11/13 mx-auto justify-between items-center relative px-2 md:px-0'>
                <div className={`font-family-mono logo text-lg md:text-title font-bold absolute left-1/2 -translate-x-1/2`}>
                    Skill<span className='text-accent-gold'>Sphere</span>
                </div>

                <div className='hidden md:block'>
                    <ul className='flex justify-between gap-8'>
                        {links}
                    </ul>
                </div>

                <div className='md:hidden'>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className='text-tx-primary hover:text-accent-gold transition-colors'
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <div className='flex items-center gap-2 md:gap-4 ml-auto md:ml-0'>
                    {isPending ? (
                        <div className='h-10 rounded-lg w-32 md:w-35 bg-gray-500 relative overflow-hidden'>
                            <span
                                className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/60 to-transparent transition-transform duration-100 animate-[shimmer_0.8s_infinite]"
                                style={{
                                    transform: 'skewX(-20deg)',
                                }}
                            />
                        </div>
                    ) : user ? (
                        <div className='hidden md:flex items-center gap-4 text-small'>
                            <div className='flex items-center justify-center gap-2'>
                                <div className='h-10 w-10 rounded-full relative overflow-hidden shrink-0'>
                                    <ImageWithSkeleton
                                        src={imgError ? defaultPfImage : user.image}
                                        alt={user.name}
                                        className={'rounded-full bg-gray-500 object-cover'}
                                        onError={() => setImgError(true)}
                                        fill
                                        sizes="40px"
                                    ></ImageWithSkeleton>
                                </div>
                                <div className='flex gap-3 items-center justify-center'>
                                    <p className='font-family-sans hidden lg:block'><span className='font-semibold text-tx-secondary text-small'>Welcome,</span> <span className='font-family-display text-body italic capitalize'>{user.name}</span></p>
                                    <ThemeToggle></ThemeToggle>
                                    <button onClick={() => {
                                        refetch()
                                        signOut()
                                    }} className='px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-small rounded-2xl border-[0.5] border-gray-700 hover:border-accent-gold hover:text-accent-gold cursor-pointer transition-colors'>Log Out</button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='hidden md:flex gap-3 items-center'>
                            <ThemeToggle></ThemeToggle>
                            <Link href={'/auth/login'}><button className='px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-small rounded-2xl border-[0.5] border-gray-700 hover:border-accent-gold hover:text-accent-gold cursor-pointer transition-colors'>Login</button></Link>
                            <Link href={'/auth/register'}><button className="relative overflow-hidden px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-small bg-accent-gold text-black font-medium rounded-md group hover:shadow-glow hover:translate-y-[-0.8px] cursor-pointer transition-all">
                                <span
                                    className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/60 to-transparent transition-transform duration-100 group-hover:animate-[shimmer_0.8s]"
                                    style={{
                                        transform: 'skewX(-20deg)',
                                    }}
                                />
                                <span className="relative">Register</span>
                            </button></Link>
                        </div>
                    )}
                    
                    <div className='md:hidden'>
                        <ThemeToggle></ThemeToggle>
                    </div>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className='md:hidden bg-bg-elevated border-t border-border mt-3'>
                    <div className='px-4 py-4 flex flex-col gap-4'>
                        <ul className='flex flex-col gap-3'>
                            {links}
                        </ul>

                        <div className='border-t border-border pt-4'>
                            {user ? (
                                <div className='flex flex-col gap-3'>
                                    <div className='flex items-center gap-3'>
                                        <div className='h-10 w-10 rounded-full relative overflow-hidden shrink-0'>
                                            <ImageWithSkeleton
                                                src={imgError ? defaultPfImage : user.image}
                                                alt={user.name}
                                                className={'rounded-full bg-gray-500 object-cover'}
                                                onError={() => setImgError(true)}
                                                fill
                                                sizes="40px"
                                            ></ImageWithSkeleton>
                                        </div>
                                        <div>
                                            <p className='font-family-sans text-small'><span className='font-semibold text-tx-secondary'>Welcome,</span></p>
                                            <p className='font-family-display text-body italic capitalize'>{user.name}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => {
                                        refetch()
                                        signOut()
                                        setMobileMenuOpen(false)
                                    }} className='w-full px-4 py-2 rounded-2xl border-[0.5] border-gray-700 hover:border-accent-gold hover:text-accent-gold cursor-pointer transition-colors text-small'>Log Out</button>
                                </div>
                            ) : (
                                <div className='flex flex-col gap-2'>
                                    <Link href={'/auth/login'}><button onClick={() => setMobileMenuOpen(false)} className='w-full px-4 py-2 rounded-2xl border-[0.5] border-gray-700 hover:border-accent-gold hover:text-accent-gold cursor-pointer transition-colors text-small'>Login</button></Link>
                                    <Link href={'/auth/register'}><button onClick={() => setMobileMenuOpen(false)} className="w-full relative overflow-hidden px-4 py-2 bg-accent-gold text-black font-medium rounded-md group hover:shadow-glow cursor-pointer transition-all text-small">
                                        <span
                                            className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/60 to-transparent transition-transform duration-100 group-hover:animate-[shimmer_0.8s]"
                                            style={{
                                                transform: 'skewX(-20deg)',
                                            }}
                                        />
                                        <span className="relative">Register</span>
                                    </button></Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;