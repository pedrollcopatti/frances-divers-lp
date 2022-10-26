import {
  Button,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-scroll";

export default function Nav() {

  function goTo(url: string) {
    window.open(url, "_blank");
  }

  return (
    <Flex bg="transparent" w="90%" h="75px" align="center" mt="8">
      <Heading size='md' color='orange.400'>francês divers</Heading>
      <Spacer />
          <Spacer />
          <Link to="form" smooth offset={-24}>
          <Button
            variant="outline"
            colorScheme="orange"
            fontFamily='heading'
            borderRadius='full'
            width='10rem'
            _hover={{ color: "white.500", backgroundColor: "orange.500" }}
          >
            Bora!
          </Button>
          </Link>
    </Flex>
  );
}
