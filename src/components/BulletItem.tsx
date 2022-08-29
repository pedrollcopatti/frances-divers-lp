import { Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

type BulletItemProps = {
            text: string,
            icon: IconType
}
export default function BulletItem(props: BulletItemProps) {

            const MStack = motion(Stack);
            const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

            return (
                        <MStack m='4' whileHover={{ scale: 1.05, y: -5 }} width='auto' textAlign='center' align='center' justify='center'>
                                    <props.icon size={28} color='#EDF8FA' />
                                    <Text maxWidth={32} mt='4' fontSize='16' color='white.500'>{props.text}</Text>
                        </MStack>
            )
}