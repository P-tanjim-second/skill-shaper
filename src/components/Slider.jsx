import React from 'react';

const Slider = () => {
    const features = [
        "Learn Anywhere",
        "Certificate Ready",
        "Lifetime Access",
        "Real Projects",
        "200+ Courses",
        "50K+ Students",
        "4.9 Rating",
        "Industry Experts"
    ];
    return (
        <div className='py-5 w-full bg-accent-gold/5 mt-5 mb-10 overflow-hidden '>
            <ul className='flex w-max whitespace-nowrap overflow-hidden gap-20 animate-[slider_50s_linear_infinite]'>
                {features.map((feature, i) => {
                    return <li key={i} className='flex justify-center items-center gap-6 uppercase text-small text-tx-secondary font-medium'><span className='w-2 h-2 bg-accent-gold/80 rounded-full'></span>{feature}</li>
                })}
                {features.map((feature, i) => {
                    return <li key={i} className='flex justify-center items-center gap-6 uppercase text-small text-tx-secondary font-medium'><span className='w-2 h-2 bg-accent-gold/80 rounded-full'></span>{feature}</li>
                })}
            </ul>
        </div>
    );
};

export default Slider;