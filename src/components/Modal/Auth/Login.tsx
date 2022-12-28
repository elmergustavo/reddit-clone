import { Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    })

    const onSubmit = () => {

    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // UPDATE FORM STATE
        setLoginForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }
    
    return (
        <form onSubmit={onSubmit}>
            <Input
            name='email'
            placeholder='email'
            type="email"
            mb={2}
            onChange={onChange}
            />
            <Input 
            name='password'
            placeholder='Password'
            type="password"
            onChange={onChange}
            />
            <Button
            width="100%"
            height="36px"
            mt={2}
            mb={2}
            type='submit'>Log In</Button>
        </form>
    )
}
export default Login;