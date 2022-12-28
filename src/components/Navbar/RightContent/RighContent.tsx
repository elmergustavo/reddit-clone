import { Flex } from '@chakra-ui/react';
import React from 'react';
import AuthButtons from './AuthButtons';

type RighContentProps = {
    
};

const RighContent:React.FC<RighContentProps> = () => {
    
    return (
        <>
        {/* AutModal */}
        <Flex justify='center' align='center'>
            <AuthButtons />
        </Flex>
        </>
    )
}
export default RighContent;