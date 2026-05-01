import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const linkTag = ['Home', 'Course', 'My profile']
    const links = <>
        {linkTag.map((tag, i) => {
            <Link href={'/'}><li>{tag}</li></Link>
        })}
    </>
    return (
        <nav>
            <div>
                <ul>
                    {links}
                </ul>

                <div className='logo'> skillShaper</div>

                <div>
                    <button>Login</button>
                    <button>Register</button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;