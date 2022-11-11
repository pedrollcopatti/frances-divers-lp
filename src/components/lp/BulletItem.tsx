import { Heading, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

type BulletItemProps = {
  title: string;
  text: string;
  Icon: IconType;
};
export default function BulletItem({ Icon, text, title }: BulletItemProps) {
  const StackMotion = motion(Stack);
  return (
    <StackMotion
      whileHover={{ x: 10, rotate: 5 }}
      width="20rem"
      spacing={4}
      padding={8}
      shadow="lg"
      borderRadius="lg"
      borderLeft={"2px"}
      borderColor="orange.500"
    >
      <Icon color="#f37e11" size={36} />
      <Heading textColor="orange.500" size="md">
        {title}
      </Heading>
      <Text>{text}</Text>
    </StackMotion>
  );
}
