import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
   Text,
   Stack,
   Button,
   Box,
} from '@chakra-ui/react'
import Image from 'next/image'
import { ImWhatsapp } from 'react-icons/im'
import students from '../../../assets/jornada/students.svg'
import { goTo } from '../../../utils'

type ModalProps = {
   onClose: () => void,
   isOpen: boolean,
}

export default function ModalSuccess({ isOpen, onClose }: ModalProps) {
   return (
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} size='xl'>
         <ModalOverlay />
         <ModalContent>
            <ModalHeader>Cadastro realizado</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            </ModalBody>
            <Stack spacing='8' p='12' textAlign='center' align='center'>
               <Box width='70%'>
                  <Image alt='video-class' src={students} />
               </Box>
               <Text color='orange.500' fontWeight='bold' fontSize='2xl'>Que bom receber você na JORNADA MINHA VEZ DE FALAR FRANCÊS!</Text>
               <Text fontSize='lg'>Clique no botão abaixo para <strong>entrar no grupo</strong> e receber a programação completa da jornada. </Text>
               <Button
                  colorScheme="green"
                  borderRadius='full'
                  width='70%'
                  size='lg'
                  _hover={{ color: "white.500", backgroundColor: "orange.500" }}
                  onClick={() => {
                     goTo(
                           "https://app.gruposinteligentes.com/r/minhavezdofr"
                     );
               }}
               >
                  <Stack direction='row' align='center' spacing='4'>
                  <ImWhatsapp />
                     <Text>Entrar no grupo</Text>
                  </Stack>
               </Button>
            </Stack>
         </ModalContent>
      </Modal>
   )
}