import { Flex } from '@chakra-ui/react';
import React from 'react';
import AuthModal from '../../Modal/Auth/AuthModal';
import AuthButtons from './AuthButtons';

type RighContentProps = {
    
};

const RighContent:React.FC<RighContentProps> = () => {
    
    return (
        <>
        {/* AutModal */}
        <AuthModal />
        <Flex justify='center' align='center'>
            <AuthButtons />
        </Flex>
        </>
    )
}
export default RighContent;