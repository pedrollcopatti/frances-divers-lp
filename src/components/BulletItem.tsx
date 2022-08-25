import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

type BulletItemProps = {
            text: string,
            icon: IconType
}
export default function BulletItem(props: BulletItemProps) {
            
            const MBox = motion(Box);

            return (
                        <MBox whileHover={{scale: 1.05, y: -5}} width='auto'>
                                    <props.icon size={28} color='#EDF8FA'/>
                                    <Text color='black.50' maxWidth={32} mt='4' fontSize='16' color='white.500'>{props.text}</Text>
                        </MBox>
            )
}