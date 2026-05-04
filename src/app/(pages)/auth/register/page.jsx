import React from 'react';
import LeftPanel from '../components/LeftPanel';
import RegisterPanel from '../components/RegisterPanel';

const Register = () => {
    return (
        <div  className="flex min-h-screen bg-bg-base">
            <LeftPanel></LeftPanel>
            <RegisterPanel></RegisterPanel>
        </div>
    );
};

export default Register;