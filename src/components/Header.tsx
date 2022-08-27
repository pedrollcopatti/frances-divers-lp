import { Badge, Button, Heading, Stack, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Image from "next/image"
import illustration from '../assets/illustration.svg'

export default function Header() {
            const MBadge = motion(Badge);
            return (
                        <Stack mt='24' w='90%' h='40vh' justify='center' direction='row' align='center'>
                                    <Stack w='60%' justify='center' spacing='8' >
                                                <MBadge animate={{scale: [1, 1.1, 1]}} transition={{ repeat: Infinity, duration: 1 }} fontSize='1rem' colorScheme='orange' variant='outline' maxWidth='95px'>NOVIDADE</MBadge>
                                                <Heading color='black.500' size='2xl'>Aprenda francês em 3 meses com professor nativo!</Heading>
                                                <Text color='black.50'>Professor nativo se junta a doutora em francês para dar curso iniciante da língua francesa com turmas EXCLUSIVAS.</Text>
                                                <Stack direction='row' spacing='8'>
                                                            <Button height='50px' variant='solid' background='orange.500' color='white' _hover={{ backgroundColor: 'orange.900' }}>Quero começar</Button>
                                                            <Button height='50px' variant='outline' >Saiba mais</Button>
                                                </Stack>
                                                <Text fontSize='12' color='orange.500'>Últimas vagas para nossas turmas de francês.</Text>

                                    </Stack>
                                    <Image alt='illustration' width='750px' src={illustration} />
                        </Stack>
            )
}