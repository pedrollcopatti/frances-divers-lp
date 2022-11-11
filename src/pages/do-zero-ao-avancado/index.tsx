import {
  Box,
  Flex,
  Grid,
  Heading,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { BiVideoRecording } from "react-icons/bi";
import Nav from "../../components/homepage/jornada/Nav";
import BulletItem from "../../components/lp/BulletItem";
import { bulletProps } from "./constants";
import atendimento from "../../assets/lp/atendimento.svg";
import experiencia from "../../assets/lp/experiencia.svg";

export default function Page() {
  const HeadingMotion = motion(Heading);

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
        <Nav />
        <Stack align="center" spacing="24" marginTop="7rem">
          <Flex direction="column" align="center" width="60%">
            <Heading size="4xl">DO ZERO AO</Heading>
            <Heading size="4xl">AVANÇADO</Heading>
            <Text marginTop={12} textAlign="center" fontSize="xl">
              Um programa completo feito para você falar francês com segurança e
              naturalidade{" "}
              <strong>em até 6 meses (mesmo começando do zero!)</strong>
            </Text>
          </Flex>
          <Stack direction="row" spacing={12}>
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
        <Flex width="90%" direction="row" marginTop="7rem" align="center">
          <Stack width="50%">
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
            spacing={2}
            paddingY={8}
            shadow="lg"
            width="40%"
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
        <Flex width="90%" marginTop="5rem" align="center">
          <Flex width="50%" align="center" justify="center">
            <Image src={atendimento} alt="atendimento" />
          </Flex>
          <Stack width="50%" spacing={8}>
            <Heading textColor="orange.500">
              Acompanhamento Personalizado
            </Heading>
            <Text fontSize="large">
              Suporte diário ao longo de toda a sua jornada de aprendizagem com
              plantão de dúvidas e apoio pedagógico para você não perder tempo.
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
