import {
  Avatar,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import logo from "../assets/letter_logo.svg";
import { Link } from "react-scroll";
import { FaAlignRight, FaHamburger } from "react-icons/fa";

export default function Nav() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  function goTo(url: string) {
    window.open(url, "_blank");
  }

  return (
    <Flex bg="transparent" w="90%" h="75px" align="center" mt="8">
      <Image alt="logo" src={logo} width={125} height={125} />
      <Spacer />
      {isLargerThan800 ? (
        <>
          <Stack direction="row" align="center">
            <Link to="bgImage" smooth offset={-24}>
              <Button
                background="transparent"
                border="1px solid transparent"
                _hover={{ border: "1px solid #1B75B1", color: "#1B75B1" }}
              >
                Professores
              </Button>
            </Link>
            <Link to="sobre" smooth offset={-24}>
              <Button
                background="transparent"
                border="1px solid transparent"
                _hover={{ border: "1px solid #1B75B1", color: "#1B75B1" }}
              >
                Sobre
              </Button>
            </Link>
            <Link to="planos" smooth offset={-24}>
              <Button
                background="transparent"
                border="1px solid transparent"
                _hover={{ border: "1px solid #1B75B1", color: "#1B75B1" }}
              >
                Planos
              </Button>
            </Link>
          </Stack>
          <Spacer />
          <Button
            onClick={() => {
              goTo(
                "https://api.whatsapp.com/send?phone=555511933524845&text=Oi!%20Estou%20com%20d%C3%BAvidas%20sobre%20o%20curso%20iniciante%20em%20franc%C3%AAs.%20Voc%C3%AA%20pode%20me%20ajudar%3F"
              );
            }}
            variant="outline"
            colorScheme="orange"
            _hover={{ color: "white.500", backgroundColor: "orange.500" }}
          >
            Entre em contato
          </Button>
        </>
      ) : (
        <></>
      )}

      <Menu>
        <MenuButton
          ml="4"
          colorScheme="orange"
          as={IconButton}
          icon={<FaAlignRight />}
        ></MenuButton>
        <MenuList>
          <MenuItem
            onClick={() => {
              goTo(
                "https://api.whatsapp.com/send?phone=555511933524845&text=Oi!%20Estou%20com%20d%C3%BAvidas%20sobre%20o%20curso%20iniciante%20em%20franc%C3%AAs.%20Voc%C3%AA%20pode%20me%20ajudar%3F"
              );
            }}
          >
            Entrar em contato
          </MenuItem>
          <Link to="bgImage" smooth offset={-24}>
            <MenuItem>Professores</MenuItem>
          </Link>
          <Link to="sobre" smooth offset={-24}>
            <MenuItem>Sobre</MenuItem>
          </Link>
          <Link to="planos" smooth offset={-24}>
            <MenuItem>Planos</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Flex>
  );
}
