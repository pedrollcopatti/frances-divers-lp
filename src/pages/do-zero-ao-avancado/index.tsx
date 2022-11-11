import {
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Link,
  Spacer,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { BiVideoRecording } from "react-icons/bi";
import Nav from "../../components/homepage/jornada/Nav";
import BulletItem from "../../components/lp/BulletItem";
import { bulletProps, extraBulletProps, goTo, verticalBulletProps } from "../../components/lp/constants";
import atendimento from "../../assets/lp/atendimento.svg";
import experiencia from "../../assets/lp/experiencia.svg";
import VerticalBulletItem from "../../components/lp/VerticalBulletItem";
import { Footer } from "../../components/Footer";
import { ImPriceTag, ImWhatsapp } from "react-icons/im";

export default function DoZeroAoAvancado() {
  const HeadingMotion = motion(Heading);
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')

  return (
    <>
      <Head>
        <title>Aprenda Francês - Francês Divers</title>
        <meta
          name="description"
          content="Você que sempre sonhou em falar francês, e por vários motivos ainda não começou, aproveita essa oportunidade agora! Venha fazer parte do nosso curso FALANDO FRANCÊS."
        />
        <meta name="author" content="Frances Divers" />
        <meta name="keywords" content="Next.JS, Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="cache-control" content="public" />
        <meta name="copyright" content="© 2022 Frances Divers" />
        <meta name="generator" content="Next.JS" />
        <meta name="rating" content="general" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        background={"#FDF9EE"}
        direction="column"
        align="center"
        width="100%"
      >
        <Nav idLink={'cta'}/>
        <Stack align="center" spacing="24" marginTop="7rem">
          <Flex direction="column" align="center" width="60%">
            <Heading  textAlign='center' size={["xl", "2xl", "4xl"]}>DO ZERO AO</Heading>
            <Heading  textAlign='center' size={["xl", "2xl", "4xl"]}>AVANÇADO</Heading>
            <Heading textAlign='center'  size={["2xl", "2xl", "4xl"]} textColor='blue.500'>NO FRANCÊS</Heading>
            <Text marginTop={12} textAlign="center" fontSize="xl">
              Um programa completo feito para você falar francês com segurança e
              naturalidade{" "}
              <strong>em até 6 meses (mesmo começando do zero!)</strong>
            </Text>
            <Button marginTop='2rem' colorScheme='whatsapp' size='lg' borderRadius='full' onClick={()=> goTo('https://pay.hotmart.com/S50456798G')  }>
              Quero começar a aprender
            </Button>
          </Flex>
          <Stack direction={isLargerThan1000 ? 'row' : 'column'} spacing={12} align='center' justify='center' width={['80%', '70%','90%']}>
            {bulletProps.map((item) => (
              <BulletItem
                key={item.title}
                Icon={item.Icon}
                text={item.text}
                title={item.title}
              />
            ))}
          </Stack>
        </Stack>
        <Flex width="90%" direction={["column", "column", "row"]} marginTop="7rem" align="center">
          <Stack width={["90%", "80%", "50%"]} textAlign={['center', 'center' ,'initial']} spacing='4'>
            <HeadingMotion
              whileHover={{ color: ["#1B75B1", "#f37e11"] }}
              size="2xl"
            >
              Porque aprender com Francês-Divers?
            </HeadingMotion>
            <Text fontSize="lg">
              Francês-Divers (FD) é um programa completo 100% online, onde você
              irá desenvolver de forma dinâmica, prática e eficiente, o domínio
              nas 4 habilidades do idioma (ler, escrever, ouvir e falar).
            </Text>
          </Stack>
          <Spacer />
          <Stack
          marginTop={['2rem', '2rem', '0']}
            spacing={2}
            paddingY={8}
            shadow="lg"
            width={["80%", "70%", "40%"]}
            align="center"
            justify="center"
          >
            <Text fontSize="xl" fontWeight="bold">
              Do Zero à Fluência:
            </Text>
            <BiVideoRecording color="#f37e11" size={40} />
            <Heading size="lg" textColor="orange.500">
              +100
            </Heading>
            <Heading size="lg" textColor="orange.500">
              videoaulas
            </Heading>
            <Text fontSize="xl" textAlign="center" width="70%">
              que vão te levar do nível básico ao avançado na língua francesa.
            </Text>
          </Stack>
        </Flex>
        <Flex width="90%" direction={['column' , 'row', 'row']} marginTop="5rem" align="center">
          <Flex width="50%" align="center" justify="center">
            <Image src={atendimento} alt="atendimento" />
          </Flex>
          <Stack width={["90%", "50%", "50%"]} spacing={12} textAlign={['center', 'initial', 'initial']}>
            <Heading size='2xl' textColor="orange.500">
              Acompanhamento Personalizado
            </Heading>
            <Text fontSize="large">
              Suporte diário ao longo de toda a sua jornada de aprendizagem com
              <strong>plantão de dúvidas e apoio pedagógico</strong> para você não perder tempo.
            </Text>
          </Stack>
        </Flex>
        <Flex marginTop={['2rem', 0, 0]} width="90%" align="center" direction={['column' , 'row', 'row']}>
          <Stack width={["90%", "50%", "50%"]} spacing={12} textAlign={['center', 'initial', 'initial']}>
            <Heading size='2xl' textColor="blue.500">
              Experiência Imersiva
            </Heading>
            <Text fontSize="large">
              Contato com o francês da vida real através de áudios nativos, musicas e diálogos em francês. Mais do que aprender a língua, <strong> você irá ter uma imersão na cultura francófona.</strong>
            </Text>
          </Stack>
          <Flex width="50%" align="center" justify="center">
            <Image src={experiencia} alt="atendimento" />
          </Flex>
        </Flex>
        <Stack background='orange.500' marginTop="5rem" align="center" spacing='12' paddingBottom='5rem'>
          <Heading marginTop='2rem' width='80%' textAlign='center' size={['xl', '2xl', '2xl']} textColor='white.500'>O que você vai ter no Francês com Francês-Divers</Heading>
          <Stack align='center' spacing='4' >
            {verticalBulletProps.map((item) => (
              <VerticalBulletItem
                key={item.title}
                Icon={item.Icon}
                text={item.text}
                title={item.title}
              />
            ))}
          </Stack>
          <Button colorScheme='whatsapp' size='lg' borderRadius='full'  onClick={()=> goTo('https://pay.hotmart.com/S50456798G')  }>
            Quero começar a aprender
          </Button>
        </Stack>
        <Stack width='90%' marginTop="3rem" align="center" spacing='12'>
          <Heading marginTop='2rem' width={['90%', '80%', '80%']} textAlign='center' size='2xl' textColor='blue.500'>Para Quem é o Curso?</Heading>
          <Text width={['90%', '70%', '60%']} fontSize='xl' textAlign='center'>O curso é voltado para pessoas de todas as idades que estão iniciando do zero ou já tem um nível básico, e agora desejam aprender a falar francês de forma definitiva! E para quem...</Text>
        </Stack>
        <Grid marginTop='5rem' templateColumns={['repeat(1, 4fr)', 'repeat(1, 4fr)', 'repeat(2, 4fr)']} gap={12} width='60%'>
          {extraBulletProps.map((item) => (
            <BulletItem
              key={item.title}
              Icon={item.Icon}
              text={item.text}
              title={item.title}
            />
          ))}
        </Grid>
        <Flex marginTop='2rem' shadow='lg' width={['80%', '75%', '55%']} height='5rem' justifyContent='center' alignItems='center' borderRadius='xl' border='2px solid' borderColor='blue.500'>
          <Text textAlign='center' fontSize={['m', 'xl', '2xl']} color='blue.500' fontWeight='bold'>Para todos que querem aprender FRANCÊS!</Text>
        </Flex>
        <Flex>
        <Stack
              id='cta'
              p="8"
              width="22rem"
              backgroundColor="blue.500"
              borderRadius="xl"
              spacing="8"
              justify="center"
              shadow="2xl"
              align="center"
              marginTop='4rem'            
            >
              <Heading textAlign='center' size="lg" textColor='white'>
                Comece agora mesmo
              </Heading>
              <Divider w="100%" />
              <Stack>
                <Heading
                  fontSize="sm"
                  color="white.900"
                  textDecoration="line-through"
                >
                  R$1497,00
                </Heading>
                <Stack direction="row" align="flex-end">
                  <Heading fontSize="4xl" textColor='green.200'>R$ 997,00</Heading>
                 
                </Stack>
              </Stack>
                <Button
                  w="100%"
                  variant="solid"
                  shadow="lg"
                  onClick={()=> goTo('https://pay.hotmart.com/S50456798G')  }
                >
                  Quero agora!
                </Button>
              <Stack align="center" spacing="4" textAlign="center">
              <Text color='white.500'>Bônus com a compra:</Text>
                <Flex align="center">
                  <ImPriceTag color="#EDF8FA" />
                  <Text ml="4" color="white.50" fontWeight="bold">
                    Valor Promocional
                  </Text>
                </Flex>
                <Text color="white.50">E-book Saiba o que te impede de aprender francês</Text>
                <Text textAlign="center" color="white.50" fontWeight="bold">
                Aulas de conversação com foco na pronúncia
                </Text>
                <Text color="white.50">Lista de filmes franceses para treinar seu francês o</Text>
                <Text color="white.50">
                Playlist super legal e atual para você curtir e aprender francês
                </Text>
              </Stack>
              <Divider w="100%" />
              <Link
                href="https://api.whatsapp.com/send?phone=555511933524845&text=Oi!%20Estou%20com%20d%C3%BAvidas%20sobre%20o%20curso%20iniciante%20em%20franc%C3%AAs.%20Voc%C3%AA%20pode%20me%20ajudar%3F"
                isExternal
                fontSize="12"
                color="white.50"
                fontWeight="normal"
              >
                Entrar em contato
              </Link>
            </Stack>
        </Flex>
        <Stack
          spacing="4"
          width={["100%", "70%", "50%"]}
          align="center"
          marginTop="10rem"
        >
          <Heading color="blue.500">Ainda com dúvidas?</Heading>
          <Text>Entre em contato pelo número:</Text>
          <Text>(11) 93352-4845</Text>
          <Button
            colorScheme="blue"
            borderRadius="full"
            width={["70%", "60%"]}
            _hover={{ color: "white.500", backgroundColor: "green.500" }}
            onClick={() => {
              goTo(
                "https://api.whatsapp.com/send?phone=5511933524845&text=Oi!%20Estou%20com%20d%C3%BAvidas%20sobre%20a%20Jornada%20Minha%20Vez%20de%20Falar%20Franc%C3%AAs.%20Voc%C3%AAs%20podem%20me%20ajudar%3F"
              );
            }}
          >
            <Stack direction="row" align="center">
              <Text>Conversar no WhatsApp</Text>
              <ImWhatsapp />
            </Stack>
          </Button>
        </Stack>
        <Footer/>
      </Flex>
    </>
  );
}
