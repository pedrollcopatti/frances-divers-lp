import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

type BulletItemProps = {
  title: string;
  text: string;
  Icon: IconType;
};
export default function VerticalBulletItem({ Icon, text, title }: BulletItemProps) {
  const StackMotion = motion(Stack);
  return (
    <StackMotion
      whileHover={{ x: 10 }}
      direction='row'
      align='center'
      width={["90%", "70%", "60%"]}
      spacing={8}
      padding={8}
      shadow="lg"
      borderRadius="lg"
      borderLeft={"2px"}
      borderColor="white.500"
    >
      <Box>
      <Icon color="#EDF8FA" size={46} />
      </Box>
      <Stack>
      <Heading textColor="white.500" size="md">
        {title}
      </Heading>
      <Text color='white.500'>{text}</Text>
      </Stack>
    </StackMotion>
  );
}
