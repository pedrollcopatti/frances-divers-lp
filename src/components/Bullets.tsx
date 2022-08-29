import { Divider, Flex, Heading, Stack, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsPatchQuestionFill } from "react-icons/bs";
import { FaCalendarAlt, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { HiSupport } from "react-icons/hi";
import { ImPriceTag } from "react-icons/im";
import BulletItem from "./BulletItem";

export default function Bullets() {
  const MFlex = motion(Flex);
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Stack
      shadow="xl"
      backgroundColor="white.50"
      pl={isLargerThan1200 ? "8" : 0}
      borderRadius="32"
      mt="32"
      w="90%"
      minW="70%"
      direction={isLargerThan1200 ? "row" : "column"}
      spacing={isLargerThan1200 ? "4" : 8}
    >
      <Stack
        direction="row"
        align="center"
        justify={isLargerThan1200 ? "initial" : "center"}
        spacing="12"
      >
        <MFlex
          animate={{ rotate: [0, -15, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaCalendarAlt size={56} color="#1B75B1" />
        </MFlex>
        <Stack w="10rem">
          <Heading size="md">Início das aulas:</Heading>
          <Heading size="lg" color="orange.500">
            XX/XX
          </Heading>
        </Stack>
        {isLargerThan1200 ? <Divider orientation="vertical" h="12" /> : <></>}
      </Stack>
      <Flex
        backgroundColor="orange.500"
        p="12"
        borderRadius="32"
        justify="space-between"
        direction="row"
        align={isLargerThan800 ? "baseline" : "center"}
        width="100%"
      >
        {isLargerThan800 ? (
          <>
            <BulletItem
              icon={FaChalkboardTeacher}
              text="Professores doutores"
            />
            <BulletItem icon={FaUsers} text="Turmas de no máx. 5 pessoas" />
            <BulletItem icon={HiSupport} text="Atenção individualizada" />
            <BulletItem icon={ImPriceTag} text="Valor Promocional" />
          </>
        ) : (
          <>
            <Stack>
              <BulletItem
                icon={FaChalkboardTeacher}
                text="Professores doutores"
              />
              <BulletItem icon={FaUsers} text="Turmas de no máx. 5 pessoas" />
            </Stack>
            <Stack>
              <BulletItem icon={HiSupport} text="Atenção individualizada" />
              <BulletItem icon={ImPriceTag} text="Valor Promocional" />
            </Stack>
          </>
        )}
      </Flex>
    </Stack>
  );
}
