import { Button, Flex, Heading, Spacer, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-scroll";

export default function Nav() {
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
      <Heading size="md" color={isLargerThan1200 ? "orange.400" : "blue.400"}>
        francês divers
      </Heading>
      {isLargerThan1200 && (
        <>
          <Spacer />
          <Link to="form" smooth offset={-24}>
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
