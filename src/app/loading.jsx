import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div className='max-h-dvh flex justify-center items-center'>
            <Spinner color='warning' size="xl" />
        </div>
    );
};

export default loading;