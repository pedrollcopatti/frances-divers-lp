import { Flex, Spacer, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "react-scroll";
import button from "../../../assets/jornada/button.svg";

export default function FirstText() {
  const MotionFlex = motion(Flex);
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");

  if (isLargerThan1200) {
    return (
      <Flex width="90%" marginTop="3rem">
        <Stack spacing="12" width="60%">
          <Text fontWeight="bold" fontSize="xl" width="70%">
            Entenda porque você ainda não está conseguindo falar francês e como{" "}
            <Text fontWeight="bold" fontSize="xl" color="blue.500">
              começar a aprender de fato até chegar a fluência.
            </Text>
          </Text>
          <Text fontSize="xl">
            Durante as aulas, você terá a oportunidade de conhecer técnicas que
            te ajudam a aprender de maneira prazerosa. Você vai aprender também
            dicas de pronúncia, dicas de ortografia, dicas de vocabulário que
            vão te ajudar a aprender de maneira simples. E tudo isso com as
            culturas diversas da língua francesa.
          </Text>
          <Text fontWeight="bold" fontSize="xl" color="orange.500" id="form">
            Para participar, inscreva-se abaixo:
          </Text>
        </Stack>
        <Spacer />
        {isLargerThan1200 && (
          <MotionFlex
            cursor="pointer"
            justifyContent="center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Link to="form" smooth offset={-24}>
              <Image alt="button" src={button} />
            </Link>
          </MotionFlex>
        )}
      </Flex>
    );
  }

  return (
    <Stack spacing="12" textAlign="center" align="center" marginTop="3rem">
      <Text fontWeight="bold" fontSize="xl" width="90%">
        Entenda porque você ainda não está conseguindo falar francês e como
        começar a aprender de fato até chegar a fluência.
      </Text>
      <Text fontSize="l" width="90%">
        Durante as aulas, você terá a oportunidade de conhecer técnicas que te
        ajudam a aprender de maneira prazerosa. Você vai aprender também dicas
        de pronúncia, dicas de ortografia, dicas de vocabulário que vão te
        ajudar a aprender de maneira simples. E tudo isso com as culturas
        diversas da língua francesa.
      </Text>
      <Text fontWeight="bold" fontSize="xl" color="orange.500" id="form">
        Para participar, inscreva-se abaixo:
      </Text>
    </Stack>
  );
}
