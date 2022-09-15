import {
  Badge,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Highlight,
  IconButton,
  Link,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Bullets from "../components/Bullets";
import Header from "../components/Header";
import Nav from "../components/Nav";
import whiteLogo from "../assets/logo_branco.svg";
import Image from "next/image";
import book from "../assets/book.png";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";
import { SimpleGrid } from "@chakra-ui/react";
import { MetaPixel } from "../components/MetaPixel";

const Home: NextPage = () => {
  const MButton = motion(Button);
  const MStack = motion(Stack);
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  function goTo(url: string) {
    window.open(url, "_blank");
  }

  return (
    <>
      <Head>
        <title>Aprenda Francês - Francês Divers</title>
        <meta
          name="description"
          content="Você que sempre sonhou em falar francês, e por vários motivos ainda não começou, aproveita essa oportunidade agora! Venha fazer parte do nosso curso FALANDO FRANCÊS."
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
      <Flex direction="column" align="center" width="100%">
        <Nav />
        <Header />
        <Bullets />
        <Stack id="bgImage" width="100%" mt="32" align="center" spacing="20">
          <Stack align="center" justify="center" spacing="16">
            <Heading size="xl" width="75%" textAlign="center">
              Conheça os professores do curso
            </Heading>
            <Stack
              direction={isLargerThan800 ? "row" : "column"}
              justify="center"
              spacing={isLargerThan800 ? 0 : 12}
              align={isLargerThan800 ? "initial" : "center"}
            >
              <Stack
                align="center"
                w={isLargerThan800 ? "35%" : "75%"}
                spacing="4"
              >
                <Flex
                  id="sandra"
                  width="15rem"
                  border="2px solid #EF7C11"
                  height="20rem"
                  justify="center"
                  align="center"
                  overflow="hidden"
                  borderRadius="full"
                  shadow="2xl"
                />
                <Badge colorScheme="orange" variant="solid" fontSize="16">
                  Sandra Coeli
                </Badge>
                <Stack align="center" w={isLargerThan800 ? "65%" : "100%"}>
                  <Text fontSize="sm" textAlign="center">
                    Longa experiência de prática de ensino e pesquisa na
                    aprendizagem da língua francesa.
                  </Text>
                  <Text fontWeight="bold" fontSize="md" textAlign="center">
                    Mestra e doutora em didática do ensino de francês pela USP
                    (Universidade de São Paulo).
                  </Text>
                  <Text fontSize="sm" textAlign="center">
                    Enfoque da prática de ensino na comunicação para o trabalho,
                    o estudo, viagens e todas as experiências que o francês pode
                    proporcionar para todes.
                  </Text>
                </Stack>
              </Stack>
              <Stack
                align="center"
                w={isLargerThan800 ? "35%" : "75%"}
                spacing="4"
              >
                <Flex
                  id="kwami"
                  width="15rem"
                  border="2px solid #EF7C11"
                  height="20rem"
                  justify="center"
                  align="center"
                  overflow="hidden"
                  borderRadius="full"
                  shadow="2xl"
                />
                <Badge colorScheme="orange" variant="solid" fontSize="16">
                  Kwami Fleury
                </Badge>
                <Stack align="center" w={isLargerThan800 ? "65%" : "100%"}>
                  <Text fontWeight="bold" fontSize="md" textAlign="center">
                    É NATIVO da língua e professor há + de 10 anos;
                  </Text>
                  <Text fontSize="sm" textAlign="center">
                    Diploma em estudos literários na língua francesa;
                  </Text>
                  <Text fontSize="sm" textAlign="center">
                    Também leciona na escola de idiomas HBLS em Bruxelas
                    (Bélgica);
                  </Text>
                  <Text fontSize="sm" textAlign="center">
                    Mestrando na ULB (Universidade Livre de Bruxelas).
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              id="sobre"
              align="center"
              spacing="16"
              width={isLargerThan800 ? "60%" : "90%"}
            >
              <Stack mt="8" align="center" width="100%" spacing="4">
                <Heading
                  size="xl"
                  width={isLargerThan1200 ? "75%" : "100%"}
                  textAlign="center"
                >
                  Como vou aprender com o
                </Heading>
                <Heading size="2xl" color="orange.500" textAlign="center">
                  Francês-Divers?
                </Heading>
              </Stack>
              <Text color="black.900" fontSize="18" textAlign="center">
                O Francês-Divers é uma metodologia que tem por objetivo promover
                o ensino-aprendizagem da língua francesa de forma acessível,
                disciplinada e lúdica, por meio de simulações que reproduzem
                situações cotidianas de comunicação.
              </Text>
              <Text color="black.900" fontSize="18" textAlign="center">
                A metodologia abrange também a seleção e organização de
                materiais específicos e a preparação de aulas, com foco nos
                objetivos de aprendizagem de cada aluno.
              </Text>
              <Text
                color="black.900"
                fontSize="18"
                fontWeight="bold"
                textAlign="center"
              >
                Você vai perceber que aprender a língua francesa te possibilita
                desenvolver ainda mais suas habilidades cognitivas,
                potencializar sua capacidade de concentração, ampliar
                oportunidades de estudo e trabalho, e expandir seu repertório
                cultural. Criando uma relação com o francês que você vai levar
                para vida toda.
              </Text>
              <Heading
                size="lg"
                color="blue.500"
                textAlign="center"
                width="80%"
              >
                Não estamos aqui pra te oferecer uma fórmula mágica!
              </Heading>
              <Text color="black.900" fontSize="18" textAlign="center">
                Queremos mostrar para você que a magia está na capacidade que
                nós temos de aprender e que realmente é uma grande descoberta
                aprender e falar francês, e muitas vezes descobrimos essas
                capacidades aprendendo a língua, e nós te guiamos nesse caminho.
              </Text>
              <Heading
                size="xl"
                color="blue.500"
                textAlign="center"
                width="80%"
              >
                O que você vai aprender:
              </Heading>
              <Text color="black.900" fontSize="18" textAlign="center">
                Neste curso você vai aprender a se apresentar formal e
                informalmente, os sons do francês, os grupos verbais e os tempos
                básicos, falar das atividades cotidianas, e tudo isso com muita
                prática comunicativa.
              </Text>
            </Stack>
            <Stack width={isLargerThan800 ? "60%" : "90%"} align="center">
              <Heading
                size="xl"
                color="orange.500"
                textAlign="center"
                width={isLargerThan800 ? "80%" : "100%"}
              >
                Inscreva-se hoje mesmo:
              </Heading>
              <Text color="black.900" fontSize="18" textAlign="center">
                e receba nosso e-book de forma gratuita com{" "}
                <strong>dicas para começar a aprender francês!</strong>
              </Text>
              <Image alt="book" src={book} />
            </Stack>
          </Stack>
          <Stack id="planos" align="center" spacing="24">
            <Heading textAlign="center" width={isLargerThan800 ? "60%" : "90%"}>
              Até quando você irá postergar o início dos seus estudos em
              francês?
            </Heading>
            <Stack align="center">
              <Text fontSize="xl" fontWeight="bold">
                Valor do curso:
              </Text>
              <Text>R$497,00</Text>
            </Stack>
          </Stack>
          <Stack
            mt="20"
            direction={isLargerThan800 ? "row" : "column"}
            spacing="24"
            align="center"
          >
            <Stack
              p="8"
              width="20rem"
              border="2px solid #EF7C11"
              borderRadius="xl"
              spacing="8"
              justify="center"
              align="center"
            >
              <Heading size="md" color="black.500">
                Plano Padrão
              </Heading>
              <Divider w="100%" />
              <Stack>
                <Heading
                  fontSize="sm"
                  color="white.900"
                  textDecoration="line-through"
                >
                  R$497,00
                </Heading>
                <Stack direction="row" align="flex-end">
                  <Heading color="black.100" fontSize="2xl">
                    R$ 170,00
                  </Heading>
                  <Text color="black.50" fontSize="12">
                    / por mês
                  </Text>
                </Stack>
              </Stack>
              <Link
                width="100%"
                textDecor="none"
                isExternal
                href={"https://pay.hotmart.com/C73933231F"}
              >
                <Button
                  w="100%"
                  background="transparent"
                  color="orange.500"
                  border="1px solid #EF7C11"
                  _hover={{ backgroundColor: "orange.500", color: "white.500" }}
                >
                  Quero agora!
                </Button>
              </Link>
              <Stack align="center" spacing="2" textAlign="center">
                <Text color="black.50">Aula com professor nativo</Text>
                <Text color="black.50">Atenção individualizada</Text>
                <Text color="black.50">
                  Confirmação imediata após pagamento
                </Text>
              </Stack>
              <Divider w="100%" />
              <Link
                href="https://api.whatsapp.com/send?phone=555511933524845&text=Oi!%20Estou%20com%20d%C3%BAvidas%20sobre%20o%20curso%20iniciante%20em%20franc%C3%AAs.%20Voc%C3%AA%20pode%20me%20ajudar%3F"
                isExternal
                fontSize="12"
                color="orange.500"
                fontWeight="normal"
              >
                Entrar em contato
              </Link>
            </Stack>

            <MStack
              animate={{
                scale: [1, 1.01, 1],
                backgroundColor: ["#EF7C11", "#1B75B1", "#EF7C11"],
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "anticipate" }}
              p="8"
              width="22rem"
              backgroundColor="blue.500"
              borderRadius="xl"
              spacing="8"
              justify="center"
              shadow="2xl"
              align="center"
            >
              <Heading size="xl" color="white.500">
                Plano Premium
              </Heading>
              <Divider w="100%" />
              <Stack>
                <Heading
                  fontSize="sm"
                  color="white.900"
                  textDecoration="line-through"
                >
                  R$497,00
                </Heading>
                <Stack direction="row" align="flex-end">
                  <Heading fontSize="4xl">R$ 450,00</Heading>
                  <Text color="white.50" fontSize="12">
                    / à vista
                  </Text>
                </Stack>
              </Stack>
              <Link
                width="100%"
                textDecor="none"
                isExternal
                href={"https://pay.hotmart.com/V73934874Y?bid=1661572707879"}
              >
                <MButton
                  w="100%"
                  variant="solid"
                  shadow="lg"
                  whileHover={{
                    backgroundColor: "#EF7C11",
                    color: "#EDF8FA",
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.1 }}
                >
                  Quero agora!
                </MButton>
              </Link>
              <Stack align="center" spacing="4" textAlign="center">
                <Flex align="center">
                  <ImPriceTag color="#EDF8FA" />
                  <Text ml="4" color="white.50" fontWeight="bold">
                    Valor Promocional
                  </Text>
                </Flex>
                <Text color="white.50">Atenção individualizada</Text>
                <Text textAlign="center" color="white.50" fontWeight="bold">
                  E-book disponível na hora da compra!
                </Text>
                <Text color="white.50">Aula com professor nativo</Text>
                <Text color="white.50">
                  Confirmação imediata após o pagamento
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
            </MStack>
          </Stack>
        </Stack>

        <Stack
          textAlign="center"
          id="footer"
          spacing="12"
          p="12"
          mt="24"
          align="center"
        >
          <Heading>Horários do curso</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={16}>
            <Stack align="left">
              <Heading size="lg" color="orange.500">
                Turma 1:
              </Heading>
              <Text>Segunda 10h-11h30</Text>
            </Stack>
            <Stack align="left">
              <Heading size="lg" color="orange.500">
                Turma 2:
              </Heading>
              <Text>Segunda 19h-20h30</Text>
            </Stack>
            <Stack align="left">
              <Heading size="lg" color="orange.500">
                Turma 3:
              </Heading>
              <Text>Quarta 19h-20h30</Text>
            </Stack>
            <Stack align="left">
              <Heading size="lg" color="orange.500">
                Turma 4:
              </Heading>
              <Text>Terça: 13h-14h30</Text>
            </Stack>
            <Stack align="left">
              <Heading size="lg" color="orange.500">
                Turma 5:
              </Heading>
              <Text>Quinta 17h-18h30</Text>
            </Stack>
            <Stack align="left">
              <Heading size="lg" color="orange.500">
                Turma 6:
              </Heading>
              <Text>Sábado 9h às 10h30</Text>
            </Stack>
          </SimpleGrid>
          <Stack align="center">
            <Heading textAlign="center" size="md" color="black.500">
              Modalidade
            </Heading>
            <Text>Online</Text>
          </Stack>
        </Stack>

        <Stack
          textAlign="center"
          id="footer"
          spacing="4"
          p="12"
          mt="12"
          align="center"
        >
          <Heading>Ainda com dúvidas?</Heading>
          <Text fontSize="14">Entre em contato com o número:</Text>
          <Text fontWeight="bold">
            <strong>(11) 93352-4845</strong>
          </Text>
          <Button
            onClick={() => {
              goTo(
                "https://api.whatsapp.com/send?phone=555511933524845&text=Oi!%20Estou%20com%20d%C3%BAvidas%20sobre%20o%20curso%20iniciante%20em%20franc%C3%AAs.%20Voc%C3%AA%20pode%20me%20ajudar%3F"
              );
            }}
            colorScheme="whatsapp"
          >
            <FaWhatsapp />
            <Text ml="2">Conversar no WhatsApp</Text>
          </Button>
        </Stack>
        <Center
          flexDirection="column"
          mt="32"
          backgroundColor="orange.500"
          w="100%"
          h="50vh"
        >
          <Stack spacing="16">
            <Image alt="logo" width={150} height={150} src={whiteLogo} />

            <Stack direction="row" spacing="4">
              <Link href="https://www.facebook.com/francesdiverss/" isExternal>
                <IconButton
                  aria-label="facebook"
                  colorScheme="none"
                  icon={<FaFacebook />}
                />
              </Link>
              <Link href="https://t.me/francesdivers" isExternal>
                <IconButton
                  aria-label="linkedin"
                  colorScheme="none"
                  icon={<FaTelegram />}
                />
              </Link>
              <Link
                href="https://www.instagram.com/francesdiverssp/"
                isExternal
              >
                <IconButton
                  aria-label="instagram"
                  colorScheme="none"
                  icon={<FaInstagram />}
                />
              </Link>
              <Link
                href="https://www.tiktok.com/@francesdiverssp?is_from_webapp=1&sender_device=pc"
                isExternal
              >
                <IconButton
                  aria-label="linkedin"
                  colorScheme="none"
                  icon={<FaTiktok />}
                />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UC43l0W_SWN6_bGja6J88eKw"
                isExternal
              >
                <IconButton
                  aria-label="linkedin"
                  colorScheme="none"
                  icon={<FaYoutube />}
                />
              </Link>
            </Stack>
          </Stack>
        </Center>
      </Flex>
    </>
  );
};

export default Home;
