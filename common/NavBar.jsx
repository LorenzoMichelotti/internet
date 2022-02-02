import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, IconButton, useDisclosure } from "@chakra-ui/react";
import SideMenu from "./SideMenu";

export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <SideMenu isOpen={isOpen} onClose={onClose}></SideMenu>
            <HStack color={'gray.700'} p={2} justifyContent={'space-between'}>
            <IconButton pos={'sticky'} top={'1em'} onClick={onOpen} icon={<HamburgerIcon></HamburgerIcon>}></IconButton>
            <Heading size={'lg'} fontWeight={'semibold'}>Internet place</Heading>
            <IconButton pos={'sticky'} top={'1em'} onClick={onOpen} icon={<AddIcon></AddIcon>}></IconButton>
            </HStack>
        </Box>
    )
}