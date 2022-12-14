import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { BiMenu, BiVideoRecording } from "react-icons/bi";
import Nav from "../../components/homepage/jornada/Nav";
import BulletItem from "../../components/lp/BulletItem";
import {
  bulletProps,
  extraBulletProps,
  goTo,
  verticalBulletProps,
} from "../../components/lp/constants";
import atendimento from "../../assets/lp/atendimento.svg";
import experiencia from "../../assets/lp/experiencia.svg";
import VerticalBulletItem from "../../components/lp/VerticalBulletItem";
import { Footer } from "../../components/Footer";
import { ImPriceTag, ImWhatsapp } from "react-icons/im";
import cristian from "../../assets/lp/cristian.png";
import kwami from "../../assets/lp/kwami.jpeg";
import sandra from "../../assets/lp/sandra.jpeg";
import felipe from "../../assets/lp/felipe.jpg";
import YouTube, { YouTubeProps } from "react-youtube";
import YoutubeVideo from "../../components/lp/YoutubeVideo";
import { useTimer } from "react-timer-hook";
import Depoiment from "../../components/lp/Depoiment";
import { Link as LinkPage } from "react-scroll";
import logo from "../../assets/letter_logo.svg";
import { FaHamburger } from "react-icons/fa";

export default function DoZeroAoAvancado() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1623);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const HeadingMotion = motion(Heading);
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp: time });

  return (
    <>
      <Head>
        <title>Aprenda Franc??s - Franc??s Divers</title>
        <meta
          name="description"
          content="Voc?? que sempre sonhou em falar franc??s, e por v??rios motivos ainda n??o come??ou, aproveita essa oportunidade agora! Venha fazer parte do nosso curso FALANDO FRANC??S."
        />
        <meta name="author" content="Frances Divers" />
        <meta name="keywords" content="Next.JS, Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="cache-control" content="public" />
        <meta name="copyright" content="?? 2022 Frances Divers" />
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
        <Flex
          textAlign="center"
          zIndex={999}
          height={16}
          position="fixed"
          backgroundColor="red.400"
          width="100%"
          align="center"
          justify="center"
        >
          <Text
            fontWeight="bold"
            fontSize={["small", "medium", "xl"]}
            color="white.500"
          >
            Essa promo????o acaba em: {days} dias, {hours} horas, {minutes} min,{" "}
            {seconds} seg
          </Text>
        </Flex>
        <Flex justify="center" width="100%" marginTop={12}>
          <Flex
            bg="transparent"
            w="90%"
            h="75px"
            align="center"
            mt="8"
            justify={isLargerThan1000 ? "normal" : "center"}
          >
            <Flex
              align="center"
              justify={isLargerThan1000 ? "start" : "center"}
              width={48}
            >
              <Image width="100%" height="100%" src={logo} />
            </Flex>
            {isLargerThan1000 && (
              <>
                <Spacer />
                <Stack direction="row" spacing={8}>
                  <LinkPage smooth offset={-24} to={"about"}>
                    <Text
                      cursor="pointer"
                      _hover={{ fontWeight: "bold", color: "blue.500" }}
                    >
                      Sobre
                    </Text>
                  </LinkPage>
                  <LinkPage smooth offset={-24} to={"depoiment"}>
                    <Text
                      cursor="pointer"
                      _hover={{ fontWeight: "bold", color: "blue.500" }}
                    >
                      Depoimentos
                    </Text>
                  </LinkPage>
                  <LinkPage smooth offset={-32} to={"teachers"}>
                    <Text
                      cursor="pointer"
                      _hover={{ fontWeight: "bold", color: "blue.500" }}
                    >
                      Professores
                    </Text>
                  </LinkPage>
                </Stack>
                <Spacer />
                <LinkPage to={"cta"} smooth offset={-24}>
                  <Button
                    variant={"outline"}
                    colorScheme="orange"
                    fontFamily="heading"
                    borderRadius="full"
                    width="10rem"
                    _hover={{
                      color: "white.500",
                      backgroundColor: "orange.500",
                    }}
                  >
                    Bora!
                  </Button>
                </LinkPage>
              </>
            )}
            {!isLargerThan1000 && (
              <>
                <Spacer />
                <IconButton
                  onClick={onOpen}
                  variant="outline"
                  colorScheme="orange"
                  bg="trasparent"
                  aria-label="menu"
                  icon={<BiMenu size={24} />}
                />
                <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Navegue sobre a p??gina</DrawerHeader>

                    <DrawerBody>
                      <Stack spacing={8}>
                        <LinkPage
                          onClick={onClose}
                          smooth
                          offset={-64}
                          to={"about"}
                        >
                          <Text
                            cursor="pointer"
                            _hover={{ fontWeight: "bold", color: "blue.500" }}
                          >
                            Sobre
                          </Text>
                        </LinkPage>
                        <LinkPage
                          onClick={onClose}
                          smooth
                          offset={-24}
                          to={"depoiment"}
                        >
                          <Text
                            cursor="pointer"
                            _hover={{ fontWeight: "bold", color: "blue.500" }}
                          >
                            Depoimentos
                          </Text>
                        </LinkPage>
                        <LinkPage
                          onClick={onClose}
                          smooth
                          offset={-32}
                          to={"teachers"}
                        >
                          <Text
                            cursor="pointer"
                            _hover={{ fontWeight: "bold", color: "blue.500" }}
                          >
                            Professores
                          </Text>
                        </LinkPage>
                      </Stack>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </Flex>
        </Flex>
        <Stack align="center" spacing="24" marginTop="7rem">
          <Flex direction="column" align="center" width="60%">
            <Heading textAlign="center" size={["xl", "2xl", "4xl"]}>
              DO ZERO AO
            </Heading>
            <Heading textAlign="center" size={["xl", "2xl", "4xl"]}>
              AVAN??ADO
            </Heading>
            <Heading
              textAlign="center"
              size={["2xl", "2xl", "4xl"]}
              textColor="blue.500"
            >
              NO FRANC??S
            </Heading>
            <Text marginTop={12} textAlign="center" fontSize="xl">
              Um programa completo feito para voc?? falar franc??s com seguran??a e
              naturalidade{" "}
              <strong>em at?? 6 meses (mesmo come??ando do zero!)</strong>
            </Text>
            <Button
              marginTop="2rem"
              colorScheme="whatsapp"
              size="lg"
              borderRadius="full"
              onClick={() => goTo("https://pay.hotmart.com/S50456798G")}
            >
              Quero come??ar a aprender
            </Button>
          </Flex>
          <Stack
            width={["100%", "100%", "100%"]}
            align="center"
            marginTop="5rem"
            height={["15rem", "35rem", "35rem"]}
            spacing={8}
          >
            <Heading>Veja o v??deo abaixo</Heading>
            <YouTube
              style={{
                width: isLargerThan1000 ? "50rem" : "20rem",
                height: isLargerThan1000 ? "30rem" : "10rem",
              }}
              title="Apresenta????o Franc??s-Divers"
              opts={opts}
              videoId="yE4UhbqZBQE"
            />
          </Stack>
          <Stack
            direction={isLargerThan1000 ? "row" : "column"}
            spacing={12}
            align="center"
            justify="center"
            width={["80%", "70%", "90%"]}
          >
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
        <Flex
          id="about"
          width="90%"
          direction={["column", "column", "row"]}
          marginTop="7rem"
          align="center"
        >
          <Stack
            width={["90%", "80%", "50%"]}
            textAlign={["center", "center", "initial"]}
            spacing="4"
          >
            <HeadingMotion
              whileHover={{ color: ["#1B75B1", "#f37e11"] }}
              size="2xl"
            >
              Porque aprender com Franc??s-Divers?
            </HeadingMotion>
            <Text fontSize="lg">
              Franc??s-Divers (FD) ?? um programa completo 100% online, onde voc??
              ir?? desenvolver de forma din??mica, pr??tica e eficiente, o dom??nio
              nas 4 habilidades do idioma (ler, escrever, ouvir e falar).
            </Text>
          </Stack>
          <Spacer />
          <Stack
            marginTop={["2rem", "2rem", "0"]}
            spacing={2}
            paddingY={8}
            shadow="lg"
            width={["80%", "70%", "40%"]}
            align="center"
            justify="center"
          >
            <Text fontSize="xl" fontWeight="bold">
              Do Zero ?? Flu??ncia:
            </Text>
            <BiVideoRecording color="#f37e11" size={40} />
            <Heading size="lg" textColor="orange.500">
              +100
            </Heading>
            <Heading size="lg" textColor="orange.500">
              videoaulas
            </Heading>
            <Text fontSize="xl" textAlign="center" width="70%">
              que v??o te levar do n??vel b??sico ao avan??ado na l??ngua francesa.
            </Text>
          </Stack>
        </Flex>
        <Flex
          width="90%"
          direction={["column", "row", "row"]}
          marginTop="5rem"
          align="center"
        >
          <Flex width="50%" align="center" justify="center">
            <Image src={atendimento} alt="atendimento" />
          </Flex>
          <Stack
            width={["90%", "50%", "50%"]}
            spacing={12}
            textAlign={["center", "initial", "initial"]}
          >
            <Heading size="2xl" textColor="orange.500">
              Acompanhamento Personalizado
            </Heading>
            <Text fontSize="large">
              Suporte di??rio ao longo de toda a sua jornada de aprendizagem com
              <strong>plant??o de d??vidas e apoio pedag??gico</strong> para voc??
              n??o perder tempo.
            </Text>
          </Stack>
        </Flex>
        <Flex
          marginTop={["2rem", 0, 0]}
          width="90%"
          align="center"
          direction={["column", "row", "row"]}
        >
          <Stack
            width={["90%", "50%", "50%"]}
            spacing={12}
            textAlign={["center", "initial", "initial"]}
          >
            <Heading size="2xl" textColor="blue.500">
              Experi??ncia Imersiva
            </Heading>
            <Text fontSize="large">
              Contato com o franc??s da vida real atrav??s de ??udios nativos,
              musicas e di??logos em franc??s. Mais do que aprender a l??ngua,{" "}
              <strong> voc?? ir?? ter uma imers??o na cultura franc??fona.</strong>
            </Text>
          </Stack>
          <Flex width="50%" align="center" justify="center">
            <Image src={experiencia} alt="atendimento" />
          </Flex>
        </Flex>
        <Stack
          background="orange.500"
          marginTop="5rem"
          align="center"
          spacing="12"
          paddingBottom="5rem"
        >
          <Heading
            marginTop="2rem"
            width="80%"
            textAlign="center"
            size={["xl", "2xl", "2xl"]}
            textColor="white.500"
          >
            O que voc?? vai ter no Franc??s com Franc??s-Divers
          </Heading>
          <Stack align="center" spacing="4">
            {verticalBulletProps.map((item) => (
              <VerticalBulletItem
                key={item.title}
                Icon={item.Icon}
                text={item.text}
                title={item.title}
              />
            ))}
          </Stack>
          <Button
            colorScheme="whatsapp"
            size="lg"
            borderRadius="full"
            onClick={() => goTo("https://pay.hotmart.com/S50456798G")}
          >
            Quero come??ar a aprender
          </Button>
        </Stack>
        <Stack width="90%" marginTop="3rem" align="center" spacing="12">
          <Heading
            marginTop="2rem"
            width={["90%", "80%", "80%"]}
            textAlign="center"
            size="2xl"
            textColor="blue.500"
          >
            Para Quem ?? o Curso?
          </Heading>
          <Text width={["90%", "70%", "60%"]} fontSize="xl" textAlign="center">
            O curso ?? voltado para pessoas de todas as idades que est??o
            iniciando do zero ou j?? tem um n??vel b??sico, e agora desejam
            aprender a falar franc??s de forma definitiva! E para quem...
          </Text>
        </Stack>
        <Grid
          marginTop="5rem"
          templateColumns={[
            "repeat(1, 4fr)",
            "repeat(1, 4fr)",
            "repeat(2, 4fr)",
          ]}
          gap={12}
          width="60%"
        >
          {extraBulletProps.map((item) => (
            <BulletItem
              key={item.title}
              Icon={item.Icon}
              text={item.text}
              title={item.title}
            />
          ))}
        </Grid>
        <Flex
          marginTop="2rem"
          shadow="lg"
          width={["80%", "75%", "55%"]}
          height="5rem"
          justifyContent="center"
          alignItems="center"
          borderRadius="xl"
          border="2px solid"
          borderColor="blue.500"
        >
          <Text
            textAlign="center"
            fontSize={["m", "xl", "2xl"]}
            color="blue.500"
            fontWeight="bold"
          >
            Para todos que querem aprender FRANC??S!
          </Text>
        </Flex>
        <Stack
          id="teachers"
          width="90%"
          marginTop="3rem"
          align="center"
          spacing="12"
        >
          <Heading
            marginTop="2rem"
            width={["90%", "80%", "80%"]}
            textAlign="center"
            size="2xl"
            textColor="blue.500"
          >
            Conhe??a os professores
          </Heading>
          <Stack spacing={12} direction={isLargerThan1000 ? "row" : "column"} width={["90%", "70%", "60%"]}>
            <Depoiment path={sandra} nome="Sandra Coeli" text="Longa experi??ncia de pr??tica de ensino e pesquisa na aprendizagem da l??ngua francesa. Mestra e doutora em did??tica do ensino de franc??s pela USP (Universidade de S??o Paulo). Enfoque da pr??tica de ensino na comunica????o para o trabalho, o estudo, viagens e todas as experi??ncias que o franc??s pode proporcionar para todos."/>
            <Depoiment path={kwami} nome="Kwami Fleury" text="?? NATIVO da l??ngua e professor h?? + de 10 anos. Diploma em estudos liter??rios na l??ngua francesa; tamb??m leciona na escola de idiomas HBLS em Bruxelas (B??lgica) e est?? mestrando na ULB (Universidade Livre de Bruxelas)."/>
          </Stack>
          </Stack>
        <Stack
          id="depoiment"
          width="90%"
          marginTop="3rem"
          align="center"
          spacing="12"
        >
          <Heading
            marginTop="2rem"
            width={["90%", "80%", "80%"]}
            textAlign="center"
            size="2xl"
            textColor="blue.500"
          >
            Depoimentos
          </Heading>
          <Text width={["90%", "70%", "60%"]} fontSize="xl" textAlign="center">
            Ou??a o que nossos alunos t??m a dizer sobre o curso:
          </Text>
        </Stack>
        <Grid
          templateColumns={[
            "repeat(1, 4fr)",
            "repeat(2, 4fr)",
            "repeat(4, 4fr)",
          ]}
          gap={12}
        >
          <YoutubeVideo
            nome="Paulinha"
            videoLink="https://streamable.com/e/0olblh"
          />
          <YoutubeVideo
            nome="Casal"
            videoLink="https://streamable.com/e/cm762m"
          />
          <YoutubeVideo
            nome="Talita"
            videoLink="https://streamable.com/e/igpf14"
          />
          <YoutubeVideo
            nome="B??rbara"
            videoLink="https://streamable.com/e/tgouoo"
          />
        </Grid>
        <Stack
          marginTop={12}
          width={["15rem", "20rem", "30rem"]}
          height={["10rem", "10rem", "20rem"]}
          align="center"
        >
          <iframe
            src="https://streamable.com/e/73bp7d"
            frameBorder="0"
            width="100%"
            height="100%"
            allowFullScreen
          ></iframe>
          <Text fontWeight="bold">Raylen</Text>
        </Stack>
        <Stack
          marginTop={12}
          direction={["column", "row", "row"]}
          width={["80%", "70%", "80%", "60%"]}
          spacing={12}
        >
          <Depoiment
            nome="Felipe"
            path={felipe}
            text="Eu me chamo Felipe Fernandes, tenho 30 anos e resolvi estudar franc??s assim que entrei no curso de Filosofia, por quest??es profissionais mesmo. Mas s?? recentemente resolvi estudar com mais afinco, por conta de interesse cultural, e ent??o fui fazer as aulas com o Fleury. Gostei bastante das aulas; s??o diversas e din??micas com bastante conversa????o, ponto que eu precisava investir mais. Apesar de ter sido online, e isso para mim ainda levanta algumas dificuldades, eu me sentia ?? vontade para p??r em pr??tica e explorar o conhecimento que havia adquirido. Em pouco tempo consegui avan??ar mais do que nos anos anteriores e percebi que estava me tornando mais ??ntimo da l??ngua. Pretendo ainda estudar mais a l??ngua francesa, e com certeza ser?? com a galera do Franc??s-Divers."
          />
          <Depoiment
            nome="Cristian"
            path={cristian}
            text="Eu sou Cristian e sou contador. Fui aluno do professor Fleury e foi  um prazer ter aula de franc??s com o professor. Ele ?? um excelente professor que tem muita paci??ncia e carinho ao lecionar. Eu s?? tenho a agradecer por tudo  que aprendi com ele. Muito obrigado por tudo! "
          />
        </Stack>
        <Flex>
          <Stack
            id="cta"
            p="8"
            width="22rem"
            backgroundColor="blue.500"
            borderRadius="xl"
            spacing="8"
            justify="center"
            shadow="2xl"
            align="center"
            marginTop="4rem"
          >
            <Heading textAlign="center" size="lg" textColor="white">
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
                <Heading fontSize="4xl" textColor="green.200">
                  R$ 997,00
                </Heading>
              </Stack>
            </Stack>
            <Button
              w="100%"
              variant="solid"
              shadow="lg"
              onClick={() => goTo("https://pay.hotmart.com/S50456798G")}
            >
              Quero agora!
            </Button>
            <Stack align="center" spacing="4" textAlign="center">
              <Text color="white.500">B??nus com a compra:</Text>
              <Flex align="center">
                <ImPriceTag color="#EDF8FA" />
                <Text ml="4" color="white.50" fontWeight="bold">
                  Valor Promocional
                </Text>
              </Flex>
              <Text color="white.50">
                E-book Saiba o que te impede de aprender franc??s
              </Text>
              <Text textAlign="center" color="white.50" fontWeight="bold">
                Aulas de conversa????o com foco na pron??ncia
              </Text>
              <Text color="white.50">
                Lista de filmes franceses para treinar seu franc??s o
              </Text>
              <Text color="white.50">
                Playlist super legal e atual para voc?? curtir e aprender franc??s
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
          <Heading color="blue.500">Ainda com d??vidas?</Heading>
          <Text>Entre em contato pelo n??mero:</Text>
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
    </>
  );
}
