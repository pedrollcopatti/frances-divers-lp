import { Divider, Flex, Heading, Stack, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsPatchQuestionFill } from "react-icons/bs";
import { FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { HiSupport } from "react-icons/hi";
import { ImPriceTag } from "react-icons/im";
import BulletItem from "./BulletItem";

export default function Bullets() {
  const MFlex = motion(Flex);
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");

  return (
    <Stack
      shadow="xl"
      backgroundColor="white.50"
      pl="8"
      borderRadius="32"
      mt="32"
      w="90%"
      direction={isLargerThan1200 ? "row" : "column"}
      spacing="4"
    >
      <Stack direction="row" align="center" spacing="8">
        <MFlex
          animate={{ rotate: [0, -15, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <BsPatchQuestionFill size={56} color="#4EB7CD" />
        </MFlex>
        <Heading size="md" w="60%">
          Até quando você irá postergar o início dos seus estudos em francês?
        </Heading>
        {isLargerThan1200 ? <Divider orientation="vertical" h="12" /> : <></>}
      </Stack>
      <Flex
        backgroundColor="orange.500"
        p="12"
        borderRadius="32"
        justify="space-between"
        direction="row"
        align="baseline"
        width="100%"
      >
        <BulletItem
          icon={FaChalkboardTeacher}
          text="Professor nativo de frança"
        />
        <BulletItem icon={FaUsers} text="Turmas de no máx. 5 pessoas" />
        <BulletItem icon={HiSupport} text="Atenção individualizada" />
        <BulletItem icon={ImPriceTag} text="Valor Promocional" />
      </Flex>
    </Stack>
  );
}
