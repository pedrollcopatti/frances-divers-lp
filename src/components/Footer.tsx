import { Center, IconButton, Link, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTelegram, FaTiktok, FaYoutube } from "react-icons/fa";
import whiteLogo from "../assets/logo_branco.svg";

export function Footer(){
   return(
      <Center
          flexDirection="column"
          mt="32"
          backgroundColor="orange.500"
          w="100%"
          h="50vh"
        >
          <Stack spacing="16">
            <Image alt="logo" width={150} height={150} src={whiteLogo} />

            <Stack direction="row" spacing="4">
              <Link href="https://www.facebook.com/francesdiverss/" isExternal>
                <IconButton
                  aria-label="facebook"
                  colorScheme="none"
                  icon={<FaFacebook />}
                />
              </Link>
              <Link href="https://t.me/francesdivers" isExternal>
                <IconButton
                  aria-label="linkedin"
                  colorScheme="none"
                  icon={<FaTelegram />}
                />
              </Link>
              <Link
                href="https://www.instagram.com/francesdiverssp/"
                isExternal
              >
                <IconButton
                  aria-label="instagram"
                  colorScheme="none"
                  icon={<FaInstagram />}
                />
              </Link>
              <Link
                href="https://www.tiktok.com/@francesdiverssp?is_from_webapp=1&sender_device=pc"
                isExternal
              >
                <IconButton
                  aria-label="linkedin"
                  colorScheme="none"
                  icon={<FaTiktok />}
                />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UC43l0W_SWN6_bGja6J88eKw"
                isExternal
              >
                <IconButton
                  aria-label="linkedin"
                  colorScheme="none"
                  icon={<FaYoutube />}
                />
              </Link>
            </Stack>
          </Stack>
        </Center>
   )
}