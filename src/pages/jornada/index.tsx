import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Nav from "../../components/homepage/jornada/Nav";
import { MetaPixel } from "../../components/homepage/MetaPixel";
import button from "../../assets/jornada/button.svg";
import teacherOne from "../../assets/jornada/teacher_1.png";
import teacherTwo from "../../assets/jornada/teacher_2.png";
import arrowButton from "../../assets/jornada/arrow-button.svg";
import videoClass from "../../assets/jornada/video-class.svg";
import womanPhone from "../../assets/jornada/woman-phone.svg";
import { motion } from "framer-motion";
import InputForm from "../../components/homepage/jornada/InputForm";
import InputMask from "react-input-mask";
import { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { ImWhatsapp } from "react-icons/im";
import { goTo } from "../../utils";
import { Footer } from "../../components/Footer";
import ModalSuccess from "../../components/homepage/jornada/ModalSuccess";
import { Link } from "react-scroll";
import FirstText from "../../components/homepage/jornada/FirstText";
import FirstHeader from "../../components/homepage/jornada/FirstHeader";
import useRegisterUser from "../../hooks/useRegisterUser";

export default function Jornada() {
  const MotionBox = motion(Box);
  const MotionFlex = motion(Flex);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");
  const { registerUser, isLoading } = useRegisterUser();

  function clearForm() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  }

  async function handleSubmit() {
    registerUser({ email, phone, firstName, lastName }, onOpen, clearForm);
  }

  console.log("aodif");

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
      <Flex
        id="flexFlag"
        direction="column"
        align="center"
        width="100%"
        background={"#FDF9EE"}
      >
        <Nav />
        <Flex
          direction="column"
          width="100%"
          height={isLargerThan1200 ? "90vh" : "auto"}
          align="center"
          justify={isLargerThan1200 ? "center" : "initial"}
        >
          <Flex
            direction={isLargerThan1200 ? "row" : "column"}
            marginTop={isLargerThan1200 ? "8rem" : "3rem"}
            height="30%"
            width="90%"
            gridGap={isLargerThan1200 ? "auto" : "4"}
          >
            <Flex
              direction="column"
              textAlign="center"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="blue.500" fontSize="xl">
                jornada
              </Text>
              <Heading color="blue.500" size="lg">
                MINHA VEZ DE
              </Heading>
              <Heading color="blue.500" size="lg">
                FALAR FRANCÊS
              </Heading>
            </Flex>
            <Spacer />
            <Flex
              direction="column"
              justifyContent="center"
              gridGap={isLargerThan1200 ? "auto" : "4"}
            >
              <Flex opacity="0.5">
                <Box textAlign="left">
                  <Text fontWeight="bold" fontSize={["md", "xl"]}>
                    AULAS AO VIVO
                  </Text>
                  <Text
                    color="red.500"
                    fontWeight="bold"
                    fontSize={["md", "xl"]}
                  >
                    NO YOUTUBE
                  </Text>
                </Box>
                <Spacer />
                <Box textAlign="right">
                  <Text
                    color="blue.500"
                    fontWeight="bold"
                    fontSize={["md", "xl"]}
                  >
                    07 A 11
                  </Text>
                  <Text
                    color="blue.500"
                    fontWeight="bold"
                    fontSize={["md", "xl"]}
                  >
                    DE NOVEMBRO
                  </Text>
                </Box>
              </Flex>
              <Box textAlign="center">
                <Heading size={["2xl", "3xl", "4xl"]}>BORA FAZER O</Heading>
                <Heading size={["3xl", "3xl", "4xl"]}>BIQUINHO DO</Heading>
                <Heading size={["3xl", "3xl", "4xl"]}>FRANCÊS?</Heading>
              </Box>
            </Flex>
            {isLargerThan1200 && <Spacer />}
            <Flex align="center">
              {!isLargerThan1200 && (
                <Flex direction="column" alignContent="start" width="10%">
                  <MotionBox
                    animate={{ y: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Link to="description" smooth offset={-24}>
                      <Image alt="arrow" src={arrowButton} />
                    </Link>
                  </MotionBox>
                </Flex>
              )}
              <MotionFlex
                width="80%"
                cursor="pointer"
                justifyContent="center"
                animate={{ scale: [1, 1.01, 1], rotate: [0, 7, -7, 7, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Link to="form" smooth offset={-24}>
                  <Image
                    alt="button"
                    src={button}
                    width={isLargerThan1200 ? undefined : 150}
                    height={isLargerThan1200 ? undefined : 150}
                  />
                </Link>
              </MotionFlex>
            </Flex>
          </Flex>
          <FirstHeader />
        </Flex>
        <FirstText />
        <Flex
          direction={isLargerThan1200 ? "row" : "column"}
          marginTop="3rem"
          width="90%"
          align="center"
        >
          <Stack spacing="4" width={isLargerThan1200 ? "40%" : ["100%", "70%"]}>
            <Stack direction="row" spacing="8" width="100%">
              <InputForm
                value={firstName}
                type="text"
                field="nome"
                placeholder="seu nome"
                setValue={setFirstName}
              />
              <InputForm
                value={lastName}
                type="text"
                field="sobrenome"
                placeholder="seu nome"
                setValue={setLastName}
              />
            </Stack>
            <InputForm
              value={email}
              type="email"
              field="e-mail"
              placeholder="seuemail@exemplo.com"
              setValue={setEmail}
            />
            <Stack>
              <Text fontFamily="heading">Telefone</Text>
              <Input
                as={InputMask}
                mask="(99)9 9999-9999"
                width="100%"
                borderRadius="full"
                _placeholder={{ color: "orange.500" }}
                borderColor="orange.500"
                variant="outline"
                value={phone}
                type="tel"
                placeholder="(00)0 000-000"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Stack>
            <Button
              colorScheme="orange"
              fontFamily="heading"
              isLoading={isLoading}
              width={["100%", "70%", "50%"]}
              borderRadius="full"
              _hover={{ color: "white.500", backgroundColor: "blue.500" }}
              disabled={!firstName || !email}
              onClick={handleSubmit}
            >
              QUERO PARTICIPAR!
            </Button>
          </Stack>
          <Spacer />
          <Box
            marginTop={isLargerThan1200 ? 0 : "5rem"}
            marginLeft={isLargerThan1200 ? "5rem" : 0}
          >
            <Image alt="video-class" src={videoClass} />
          </Box>
        </Flex>
        <Flex
          direction={isLargerThan1200 ? "row" : "column"}
          marginTop="10rem"
          width="90%"
          align="center"
        >
          <Flex
            marginRight={isLargerThan1200 ? "5rem" : 0}
            marginBottom={isLargerThan1200 ? 0 : "3rem"}
            width={isLargerThan1200 ? "45%" : "100%"}
            justify="center"
          >
            <Image alt="video-class" src={womanPhone} />
          </Flex>
          <Spacer />
          <Stack
            textAlign={isLargerThan1200 ? "left" : "center"}
            spacing={isLargerThan1200 ? "4" : "8"}
            width={isLargerThan1200 ? "60%" : "90%"}
            align={isLargerThan1200 ? "normal" : "center"}
          >
            <Heading color="green.500">
              Conteúdos exclusivos todos os dias no grupo fechado VIP!
            </Heading>
            <Text fontSize="lg">
              Saiba por que você não consegue aprender e conheça técnicas
              eficazes para começar a aprender de verdade.
            </Text>
            <Text fontSize="lg">
              Conhecimento tirado de anos de experiência dos professores que são
              também pesquisadores da área da didática do francês.
            </Text>
            <Text fontSize="lg">
              Aulas dinâmicas e voltadas à comunicação do dia-a-dia.
            </Text>
            <Button
              colorScheme="green"
              fontFamily="heading"
              borderRadius="full"
              width={["100%", "70%", "50%"]}
              size="lg"
              onClick={() => {
                goTo("https://app.gruposinteligentes.com/r/minhavezdofr");
              }}
            >
              <Stack direction="row" spacing="4" align="center">
                <Text fontFamily="heading">ACESSAR GRUPO VIP</Text>
                <HiOutlineArrowRight />
              </Stack>
            </Button>
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
        <Footer />
      </Flex>
      <ModalSuccess isOpen={isOpen} onClose={onClose} />
    </>
  );
}
