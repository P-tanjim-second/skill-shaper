// components/ImageWithSkeleton.jsx
'use client'
import { useState } from 'react';
import Image from 'next/image';

const ImageWithSkeleton = ({ src, alt, className, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            <div className={`absolute inset-0 z-10 bg-gray-500 transition-opacity duration-500 ${
                isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}>
                <span
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent animate-[shimmer_0.8s_infinite]"
                    style={{ transform: 'translateX(-100%) skewX(-20deg)' }}
                />
            </div>
            <Image
                src={src}
                alt={alt}
                className={className}
                onLoad={() => setIsLoaded(true)}
                {...props}
            />
        </>
    );
};

export default ImageWithSkeleton;