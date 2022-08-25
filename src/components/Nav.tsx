import { Avatar, Button, Flex, Spacer, Stack } from "@chakra-ui/react";
import Image from "next/image";
import logo from '../assets/logo-orange.svg'
export default function Nav() {
            return (
                        <Flex
                                    bg='transparent'
                                    w='90%'
                                    h='75px'
                                    align='center'
                                    mt='8'
                        >
                                    <Image src={logo} width={50} height={50}/>
                                    <Spacer />
                                    <Stack direction='row' align='center'>
                                                <Button background='transparent' border='1px solid transparent'  _hover={{border: '1px solid #4EB7CD', color: '#4EB7CD'}} >Home</Button>
                                                <Button background='transparent' border='1px solid transparent'  _hover={{border: '1px solid #4EB7CD', color: '#4EB7CD'}} >Sobre</Button>
                                                <Button background='transparent' border='1px solid transparent'  _hover={{border: '1px solid #4EB7CD', color: '#4EB7CD'}} >Planos</Button>
                                                <Button background='transparent' border='1px solid transparent'  _hover={{border: '1px solid #4EB7CD', color: '#4EB7CD'}} >Professores</Button>
                                                <Button background='transparent' border='1px solid transparent'  _hover={{border: '1px solid #4EB7CD', color: '#4EB7CD'}} >Contato</Button>
                                    </Stack>
                                    <Spacer />
                                    <Button variant='outline' colorScheme='orange' _hover={{ color: 'white.500', backgroundColor: 'orange.500' }}>Entre em contato</Button>
                        </Flex>
            )
}