import { Flex, Stack, Text } from "@chakra-ui/react";
import YouTube, { YouTubeProps } from "react-youtube";

type VideoProps = {
    videoLink: string
    nome: string
}
export default function YoutubeVideo({videoLink, nome}: VideoProps) {
    return (
        <Stack >
        <div style={{width: "15rem", height: "30rem"}}>
            <iframe src={videoLink} frameBorder="0" width="100%" height="100%" allowFullScreen></iframe>
        </div>
        <Text fontWeight="bold">{nome}</Text>
        </Stack>
    )
}