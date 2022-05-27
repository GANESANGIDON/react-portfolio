import { React, Fragment } from "react";
import './assets/css/nav-bar.css';
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Text,
  VStack,
  HStack,
  Show,
  Spacer,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Fragment>
      <HStack p="5px 20px 5px 15px" bgColor="#ee223d">
        {/* side Navbar */}
        <Show breakpoint="(max-width: 767px)">
          <Button
            onClick={onOpen}
            bg="#ee223d"
            variant="ghost"
            fontSize="18px"
            size="sm"
            p="3px"
          >
            <FaBars />
          </Button>
          <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="xs">
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader alignItems="center" bgColor="#ee223d" p="8px 12px" fontWeight="bold">
                My Portfolio
              </DrawerHeader>
              <DrawerBody bgColor='pink.200'>
                <VStack spacing='10px' p='20px 0px'>
                  <Link to="/" className="navLinks">
                    <Text>Home</Text>
                  </Link>
                  <Link to="/studies" className="navLinks">
                    <Text>Studies</Text>
                  </Link>
                  <Link to="/skills" className="navLinks">
                    <Text>Skills</Text>
                  </Link>
                  <Link to="/projects" className="navLinks">
                    <Text>Projects</Text>
                  </Link>
                  <Link to="/certificates" className="navLinks">
                    <Text>Certificates</Text>
                  </Link>
                  <Link to="/contact" className="navLinks">
                    <Text>Contact</Text>
                  </Link>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Show>
        {/* main NavBrand */}
        <Text fontSize="20px" fontWeight="bold">
          My Portfolio
        </Text>
        <Spacer />
        {/* main Navbar menus */}
        <Show breakpoint="(min-width: 768px)">
          <HStack>
            <Link to="/" className="navLinks">
              <Text>Home</Text>
            </Link>
            <Link to="/studies" className="navLinks">
              <Text>Studies</Text>
            </Link>
            <Link to="/skills" className="navLinks">
              <Text>Skills</Text>
            </Link>
            <Link to="/projects" className="navLinks">
              <Text>Projects</Text>
            </Link>
            <Link to="/certificates" className="navLinks">
              <Text>Certificates</Text>
            </Link>
            <Link to="/contact" className="navLinks">
              <Text>Contact</Text>
            </Link>
          </HStack>
        </Show>
      </HStack>
    </Fragment>
  );
}
