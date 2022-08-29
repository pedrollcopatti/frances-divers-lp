import {
  Badge,
  Button,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "react-scroll";
import illustration from "../assets/illustration.svg";

export default function Header() {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");

  const MBadge = motion(Badge);
  return (
    <Stack
      mt="24"
      w="90%"
      h="40vh"
      justify="center" 
      direction={isLargerThan1200 ? "row" : "column"}
      align="center"
    >
      <Stack w={isLargerThan1200 ? "60%" : "100%"}  justify="center"  align={isLargerThan1200 ? "initial" : "center"} spacing="8">
        <MBadge
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          fontSize="1rem"
          colorScheme="orange"
          variant="outline"
          maxWidth="95px"
        >
          NOVIDADE
        </MBadge>
        <Heading textAlign={isLargerThan1200 ? 'initial' : 'center'} color="black.500" size="2xl">
          Aprenda francês em 3 meses com professor nativo!
        </Heading>
        <Text fontSize='lg' color="black.50" textAlign={isLargerThan1200 ? 'initial' : 'center'}>
        Turmas com vagas LIMITADAS abertas.
        </Text>
        <Stack direction="row" spacing="4">
          <Link to="planos" smooth offset={-24}>
            <Button
              height="50px"
              variant="solid"
              background="orange.500"
              color="white"
              _hover={{ backgroundColor: "orange.900" }}
              size={isLargerThan1200 ? 'md' : 'lg'}
            >
              Quero começar
            </Button>
          </Link>
          <Link to="bgImage" smooth offset={-24}>
            <Button height="50px" variant="outline">
              Saiba mais
            </Button>
          </Link>
        </Stack>
      </Stack>
      {isLargerThan1200 ? <Image alt="illustration" width="750px" src={illustration} /> : <></>}
    </Stack>
  );
}
