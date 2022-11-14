import { Box, Button, Flex, Heading, Spacer, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import { Link } from "react-scroll";
import logo from "../../../assets/letter_logo.svg"

type NavProps = {
  idLink: string
}

export default function Nav({idLink}: NavProps) {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");

  function goTo(url: string) {
    window.open(url, "_blank");
  }

  return (
    <Flex
      bg="transparent"
      w="90%"
      h="75px"
      align="center"
      mt="8"
      justify={isLargerThan1200 ? "normal" : "center"}
    >
      <Box width={48} ><Image width="100%" height="100%" src={logo}/></Box>
      {isLargerThan1200 && (
        <>
          <Spacer />
          <Link to={idLink} smooth offset={-24}>
            <Button
              variant={"outline"}
              colorScheme="orange"
              fontFamily="heading"
              borderRadius="full"
              width="10rem"
              _hover={{ color: "white.500", backgroundColor: "orange.500" }}
            >
              Bora!
            </Button>
          </Link>
        </>
      )}
    </Flex>
  );
}
