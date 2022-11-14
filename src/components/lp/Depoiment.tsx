import { Avatar, Flex, Stack, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

type DepoimentProps = {
    path: StaticImageData,
    text: string,
    nome: string,
}

export default function Depoiment({ path, text, nome }: DepoimentProps) {
    return (
        <Stack width="100%" textAlign="center" spacing={4} align="center" shadow="lg" padding={8} borderRadius="xl">
           <Flex borderRadius="full" overflow="hidden" boxSize="5rem">
           <Image width="100%" height="100%" src={path}
            />
           </Flex>
            <Text fontSize="small">{nome}</Text>
            <Text fontSize="small">{text}</Text>
        </Stack>
    )
}