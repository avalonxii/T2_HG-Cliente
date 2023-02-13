import { Text } from '@nextui-org/react'

export default function GetFooter(){
    const text ='Realizado por los alumnos Bryan, Juan y Rafa'
    return (
        <>
            <Text
                css={{color: 'Black'}}
                className="footer-text"
                weight="bold"
            >
                {text}
            </Text>

        </>
    );
}