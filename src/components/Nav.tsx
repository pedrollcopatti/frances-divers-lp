import { Avatar, Button, Flex, Spacer, Stack } from "@chakra-ui/react";
import Image from "next/image";
import logo from '../assets/letter_logo.svg'
import { Link } from 'react-scroll';

export default function Nav() {

            function goTo(url: string){
                        window.open(url, '_blank')            
            }

            return (
                        <Flex
                                    bg='transparent'
                                    w='90%'
                                    h='75px'
                                    align='center'
                                    mt='8'
                        >
                                    <Image alt='logo' src={logo} width={125} height={125} />
                                    <Spacer />
                                    <Stack direction='row' align='center'>
                                                <Link to='bgImage' smooth offset={-24}><Button background='transparent' border='1px solid transparent' _hover={{ border: '1px solid #4EB7CD', color: '#4EB7CD' }} >Sobre</Button></Link>
                                                <Link to='planos' smooth offset={-24}><Button background='transparent' border='1px solid transparent' _hover={{ border: '1px solid #4EB7CD', color: '#4EB7CD' }} >Planos</Button></Link>
                                                <Link to='footer' smooth offset={-24}><Button background='transparent' border='1px solid transparent' _hover={{ border: '1px solid #4EB7CD', color: '#4EB7CD' }} >Contato</Button></Link>
                                    </Stack>
                                    <Spacer />
                                    <Button onClick={() => { goTo('https://api.whatsapp.com/send?phone=555511933524845&text=Oi!%20Estou%20com%20d%C3%BAvidas%20sobre%20o%20curso%20iniciante%20em%20franc%C3%AAs.%20Voc%C3%AA%20pode%20me%20ajudar%3F') }} variant='outline' colorScheme='orange' _hover={{ color: 'white.500', backgroundColor: 'orange.500' }}>Entre em contato</Button>
                        </Flex>
            )
}