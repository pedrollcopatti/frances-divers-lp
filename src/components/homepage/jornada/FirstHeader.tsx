import {
  Box,
  Flex,
  Heading,
  Spacer,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "react-scroll";
import teacherOne from "../../../assets/jornada/teacher_1.png";
import teacherTwo from "../../../assets/jornada/teacher_2.png";
import arrowButton from "../../../assets/jornada/arrow-button.svg";
import { goTo } from "../../../utils";

export default function FirstHeader() {
  const MotionBox = motion(Box);
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");

  if (isLargerThan1200) {
    return (
      <Flex height={["100%", "80%", "70%"]} width="90%">
        <Flex direction="column" alignContent="start">
          <MotionBox
            animate={{ y: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Link to="description" smooth offset={-24}>
              <Image alt="arrow" src={arrowButton} />
            </Link>
          </MotionBox>
          <Heading id="description" marginTop="6rem" size="3xl" width="60%">
            <Heading size="3xl" color="orange.500">
              Participe
            </Heading>{" "}
            da semana de aulas gratuita!
          </Heading>
        </Flex>
        <Spacer />
        <Flex justifyContent="center">
          <Box cursor="pointer">
            <Image
              alt="teacher_1"
              src={teacherOne}
              onClick={() => goTo("http://francesdivers.com.br/")}
            />
          </Box>
          <Flex
            alignItems="end"
            justifyContent="end"
            marginBottom="12"
            cursor="pointer"
          >
            <Image
              alt="teacher_2"
              src={teacherTwo}
              onClick={() => goTo("http://francesdivers.com.br/")}
            />
          </Flex>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex width="100%" direction="column" marginTop="15rem">
      <Stack textAlign="center" spacing="12" align="center">
        <Heading id="description" marginTop="6rem" size="3xl">
          <Heading size="3xl" color="orange.500">
            Participe
          </Heading>
          da semana de aulas gratuita!
        </Heading>
        <Stack
          cursor="pointer"
          direction="row"
          onClick={() => goTo("http://francesdivers.com.br/")}
        >
          <Image alt="teacher_1" src={teacherOne} />
          <Image alt="teacher_2" src={teacherTwo} />
        </Stack>
      </Stack>
    </Flex>
  );
}
