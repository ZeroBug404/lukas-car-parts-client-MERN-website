import React from 'react';
import notFound from '../../images/notFound.png'

const NotFound = () => {
    return (
        <div className='text-center'>
            <img height={'100vh'} width={'100%'} src={notFound} alt="" />
        </div>
    );
};

export default NotFound;