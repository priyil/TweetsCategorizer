import React, { useState } from 'react';

const SignIn = ({data}) => {
    console.log(data)
    const userInfo = () => {
        return data
    }
    return(
            <div>
                <button onClick={userInfo}>Click To Sign In</button>

            </div>
    );
};
            export default SignIn;