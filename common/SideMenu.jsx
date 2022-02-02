import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input } from "@chakra-ui/react";

export default function SideMenu({isOpen, onClose}) {
    return (
        <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
        >
            <DrawerOverlay sx={{backdropFilter: 'blur(2px)'}}/>
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody p={0}>
                <Button borderRadius={0} w={'full'} justifyContent={'start'} px={'1.5em'} py={'1.5em'}>Home</Button>
            </DrawerBody>

            <DrawerFooter>
                <Button>Logout</Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}