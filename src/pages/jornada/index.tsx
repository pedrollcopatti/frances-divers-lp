import { Box, Button, Flex, Heading, Spacer, Stack, Text, useDisclosure } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Nav from "../../components/homepage/jornada/Nav";
import { MetaPixel } from "../../components/homepage/MetaPixel";
import button from '../../assets/jornada/button.svg'
import teacherOne from '../../assets/jornada/teacher_1.png'
import teacherTwo from '../../assets/jornada/teacher_2.png'
import arrowButton from '../../assets/jornada/arrow-button.svg'
import videoClass from '../../assets/jornada/video-class.svg'
import womanPhone from '../../assets/jornada/woman-phone.svg'
import { motion } from "framer-motion";
import InputForm from "../../components/homepage/jornada/InputForm";
import { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { ImWhatsapp } from "react-icons/im";
import { goTo } from "../../utils";
import { Footer } from "../../components/Footer";
import ModalSuccess from "../../components/homepage/jornada/ModalSuccess";
import { Link } from "react-scroll";

export default function Jornada() {
      const MotionBox = motion(Box);
      const MotionFlex = motion(Flex);
      const [nome, setNome] = useState('');
      const [email, setEmail] = useState('');
      const [numero, setNumero] = useState('');
      const { isOpen, onOpen, onClose } = useDisclosure()

      function clearForm() {
            setNome('');
            setEmail('');
            setNumero('');
      }

      function handleSubmit() {
            clearForm();
            onOpen();
      }

      return (
            <>
                  <Head>
                        <title>Jornada - Minha Vez de Falar Francês</title>
                        <meta
                              name="description"
                              content="Entenda porque você ainda não está conseguindo falar francês e como começar a aprender de fato até chegar a fluência."
                        />
                        <MetaPixel />
                        <meta name="author" content="Frances Divers" />
                        <meta name="keywords" content="Next.JS, Typescript" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta httpEquiv="cache-control" content="public" />
                        <meta name="copyright" content="© 2022 Frances Divers" />
                        <meta name="generator" content="Next.JS" />
                        <meta name="rating" content="general" />
                        <link rel="icon" href="/favicon.ico" />
                  </Head>
                  <Flex id='flexFlag' direction="column" align="center" width="100%" background={'#FDF9EE'}>
                        <Nav />
                        <Flex direction='column' width='100%' height='90vh' align='center' justify='center'>
                              <Flex marginTop='8rem' height='30%' width='90%' >
                                    <Flex direction='column' textAlign='center' alignItems='center' justifyContent='center'>
                                          <Text color='blue.500' fontSize='xl'>jornada</Text>
                                          <Heading color='blue.500' size='lg'>MINHA VEZ DE</Heading>
                                          <Heading color='blue.500' size='lg'>FALAR FRANCÊS</Heading>
                                    </Flex>
                                    <Spacer />
                                    <Flex direction='column' justifyContent='center'>
                                          <Flex opacity='0.5'>
                                                <Box textAlign='left'>
                                                      <Text fontWeight='bold' fontSize='xl'>AULAS AO VIVO</Text>
                                                      <Text color='red.500' fontWeight='bold' fontSize='xl'>NO YOUTUBE</Text>
                                                </Box>
                                                <Spacer />
                                                <Box textAlign='right'>
                                                      <Text color='blue.500' fontWeight='bold' fontSize='xl'>07 A 11</Text>
                                                      <Text color='blue.500' fontWeight='bold' fontSize='xl'>DE NOVEMBRO</Text>
                                                </Box>
                                          </Flex>
                                          <Box textAlign='center'>
                                                <Heading size='4xl'>BORA FAZER O</Heading>
                                                <Heading size='4xl'>BIQUINHO DO</Heading>
                                                <Heading size='4xl'>FRANCÊS?</Heading>
                                          </Box>
                                    </Flex>
                                    <Spacer />
                                    <MotionFlex cursor='pointer' justifyContent='center' animate={{ scale: [1, 1.01, 1], rotate: [0, 7, -7, 7, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                                    <Link to="form" smooth offset={-24}><Image alt='button' src={button} /></Link>
                                    </MotionFlex >
                              </Flex>
                              <Flex height='50%' width='90%'>
                                    <Flex direction='column' alignContent='start'>
                                          <MotionBox animate={{ y: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
                                          >
                                                <Link to="description" smooth offset={-24}>
                                                <Image alt='arrow' src={arrowButton} />
                                                </Link>
                                          </MotionBox>
                                          <Heading id='description' marginTop='6rem' size='3xl' width='60%'><Heading size='3xl' color='orange.500'>Participe</Heading> da semana de aulas gratuita!</Heading>
                                    </Flex>
                                    <Spacer />
                                    <Flex justifyContent='center'>
                                          <Box cursor='pointer'>
                                                <Image alt='teacher_1' src={teacherOne} onClick={()=> goTo('http://francesdivers.com.br/')} />
                                          </Box>
                                          <Flex  alignItems='end' justifyContent='end' marginBottom='12'   cursor='pointer'>
                                                <Image alt='teacher_2' src={teacherTwo} onClick={()=> goTo('http://francesdivers.com.br/')} />
                                          </Flex>
                                    </Flex >
                              </Flex>
                        </Flex>
                        <Flex width='90%' marginTop='3rem'>
                              <Stack spacing='12' width='60%'>
                                    <Text fontWeight='bold' fontSize='xl'>Entenda porque você ainda não está conseguindo falar francês e como <Text fontWeight='bold' fontSize='xl' color='blue.500'>começar a aprender de fato até chegar a fluência.</Text></Text>
                                    <Text fontSize='xl'>Durante as aulas, você terá a oportunidade de conhecer técnicas que te ajudam a aprender de maneira prazerosa. Você vai aprender também dicas de pronúncia, dicas de  ortografia, dicas de vocabulário que vão te ajudar a aprender de maneira simples. E tudo isso com as culturas diversas da língua francesa.</Text>
                                    <Text fontWeight='bold' fontSize='xl' color='orange.500'  id='form'>Para participar, inscreva-se abaixo:</Text>
                              </Stack>
                              <Spacer />
                              <MotionFlex cursor='pointer' justifyContent='center' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
                              <Link to="form" smooth offset={-24}><Image alt='button' src={button} /></Link>
                              </MotionFlex >
                        </Flex>
                        <Flex marginTop='3rem' width='90%' align='center'>
                              <Stack spacing='4'>
                                    <InputForm value={nome} type='text' field="nome completo" placeholder="seu nome" setValue={setNome} />
                                    <InputForm value={email} type='email' field="e-mail" placeholder="seuemail@exemplo.com" setValue={setEmail} />
                                    <InputForm value={numero} type='tel' field="número whatsapp" placeholder="(00) 0 0000-0000" setValue={setNumero} />
                                    <Button
                                          colorScheme="orange"
                                          fontFamily='heading'
                                          borderRadius='full'
                                          _hover={{ color: "white.500", backgroundColor: "blue.500" }}
                                          disabled={!nome || !email || !numero}
                                          onClick={handleSubmit}
                                    >
                                          QUERO PARTICIPAR!
                                    </Button>
                              </Stack>
                              <Spacer />
                              <Box>
                                    <Image alt='video-class' src={videoClass} />
                              </Box>
                        </Flex>
                        <Flex marginTop='10rem' width='90%' >
                              <Box width='45%'>
                                    <Image alt='video-class' src={womanPhone} />
                              </Box>
                              <Spacer />
                              <Stack spacing='4' width='60%'>
                                    <Heading color='green.500'>Conteúdos exclusivos todos os dias no grupo fechado VIP!</Heading>
                                    <Text fontSize='lg'>Saiba por que você não consegue aprender e conheça técnicas eficazes para começar a aprender de verdade.</Text>
                                    <Text fontSize='lg'>Conhecimento tirado de anos de experiência dos professores que são também pesquisadores da área da didática do francês.</Text>
                                    <Text fontSize='lg'>Aulas dinâmicas e voltadas à comunicação do dia-a-dia.</Text>
                                    <Button
                                          colorScheme="green"
                                          fontFamily='heading'
                                          borderRadius='full'
                                          width='50%'
                                          onClick={() => {
                                                goTo(
                                                      "https://app.gruposinteligentes.com/r/minhavezdofr"
                                                );
                                          }}
                                    >
                                          <Stack direction='row' spacing='4' align='center'>
                                                <Text fontFamily='heading'>ACESSAR GRUPO VIP</Text>
                                                <HiOutlineArrowRight />
                                          </Stack>
                                    </Button>
                              </Stack>
                        </Flex>
                        <Stack spacing='4' width='50%' align='center' marginTop='10rem'>
                              <Heading color='blue.500'>Ainda com dúvidas?</Heading>
                              <Text>Entre em contato pelo número:</Text>
                              <Text>(11) 93352-4845</Text>
                              <Button
                                    colorScheme="blue"
                                    borderRadius='full'
                                    width='50%'
                                    _hover={{ color: "white.500", backgroundColor: "green.500" }}
                                    onClick={() => {
                                          goTo(
                                                "https://api.whatsapp.com/send?phone=5511933524845&text=Oi!%20Estou%20com%20d%C3%BAvidas%20sobre%20a%20Jornada%20Minha%20Vez%20de%20Falar%20Franc%C3%AAs.%20Voc%C3%AAs%20podem%20me%20ajudar%3F"
                                          )
                                    }}
                              >
                                    <Stack direction='row' align='center'>
                                          <Text>Conversar no WhatsApp</Text>
                                          <ImWhatsapp />
                                    </Stack>
                              </Button>
                        </Stack>
                        <Footer />
                  </Flex>
                  <ModalSuccess isOpen={isOpen} onClose={onClose} />
            </>
      );
}