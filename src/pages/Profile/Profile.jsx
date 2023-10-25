import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='container mx-auto'>
            <div className='flex items-center mt-10 justify-center'>
                <h1 className='text-xl'>Email: {user?.email}</h1>
            </div>
        </div>
    );
};

export default Profile;