'use client'
import { useState } from 'react';
import Image from 'next/image';

const DetailsImageSkeleton = ({ src, alt, className, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Skeleton Loader */}
            <div
                className={`absolute inset-0 z-10 bg-gray-500 transition-opacity rounded-2xl overflow-hidden duration-500 pointer-events-none ${
                    isLoaded ? 'opacity-0' : 'opacity-100'
                }`}
                style={{
                    width: '100%',
                    height: '100%',
                }}
            >
                <span
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent animate-[shimmer_0.8s_infinite]"
                    style={{
                        transform: 'translateX(-100%) skewX(-20deg)',
                    }}
                />
            </div>

            {/* Image */}
            <Image
                src={src}
                alt={alt}
                className={`${className} object-cover`}
                onLoad={() => setIsLoaded(true)}
                {...props}
            />
        </div>
    );
};

export default DetailsImageSkeleton;
