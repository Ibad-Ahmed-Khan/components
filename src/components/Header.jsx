import { useState } from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  Link as ChakraLink,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SimpleGrid
        fontFamily="Protest Riot"
        alignItems="center"
        justifyContent="center"
        color="#000"
        bg="#fff"
        pos="fixed"
        letterSpacing="1px"
        fontWeight="bold"
        w="full"
        p="4"
        zIndex="111"
        templateColumns={{
          base: "1fr 1fr",
          md: "1fr 1fr",
          lg: "1fr 5fr",
          xl: "1fr 5fr",
        }}
        gap="4rem"
      >
        <Box>
          <ChakraLink
            fontFamily="Protest Riot"
            fontWeight="500"
            as={ScrollLink}
            to="DropDown"
            smooth={true}
            duration={500}
            position="relative"
            _hover={{
              textDecoration: "none",
              color: "blue",
            }}
          >
            Ibad Ahmed
          </ChakraLink>
        </Box>
        {/* DESKTOP VIEW */}
        <Flex align="center" justify="center" gap="1rem">
          <ChakraLink
            display={{ base: "none", md: "none", lg: "block", xl: "block" }}
            fontFamily="Protest Riot"
            fontWeight="500"
            as={ScrollLink}
            to="DropDown"
            smooth={true}
            duration={500}
            position="relative"
            _hover={{
              textDecoration: "none",
              _after: {
                width: "100%",
              },
              color: "blue",
            }}
            _after={{
              content: "''",
              width: "0",
              height: "1.5px",
              transition: "width .25s ease-in-out",
              backgroundColor: "blue",
              position: "absolute",
              left: "50%",
              bottom: "0",
              transform: " translate(-50%,0%) ",
            }}
          >
            DropDown
          </ChakraLink>
          <ChakraLink
            display={{ base: "none", md: "none", lg: "block", xl: "block" }}
            fontFamily="Protest Riot"
            fontWeight="500"
            as={ScrollLink}
            to="PopUp"
            smooth={true}
            duration={500}
            position="relative"
            _hover={{
              textDecoration: "none",
              _after: {
                width: "100%",
              },
              color: "blue",
            }}
            _after={{
              content: "''",
              width: "0",
              height: "1.5px",
              transition: "width .25s ease-in-out",
              backgroundColor: "blue",
              position: "absolute",
              left: "50%",
              bottom: "0",
              transform: " translate(-50%,0%) ",
            }}
          >
            PopUp
          </ChakraLink>
          <ChakraLink
            display={{ base: "none", md: "none", lg: "block", xl: "block" }}
            fontFamily="Protest Riot"
            fontWeight="500"
            as={ScrollLink}
            to="SearchBar"
            smooth={true}
            duration={500}
            position="relative"
            _hover={{
              textDecoration: "none",
              _after: {
                width: "100%",
              },
              color: "blue",
            }}
            _after={{
              content: "''",
              width: "0",
              height: "1.5px",
              transition: "width .25s ease-in-out",
              backgroundColor: "blue",
              position: "absolute",
              left: "50%",
              bottom: "0",
              transform: " translate(-50%,0%) ",
            }}
          >
            SearchBar
          </ChakraLink>
          <ChakraLink
            display={{ base: "none", md: "none", lg: "block", xl: "block" }}
            fontFamily="Protest Riot"
            fontWeight="500"
            as={ScrollLink}
            to="Tabs"
            smooth={true}
            duration={500}
            position="relative"
            _hover={{
              textDecoration: "none",
              _after: {
                width: "100%",
              },
              color: "blue",
            }}
            _after={{
              content: "''",
              width: "0",
              height: "1.5px",
              transition: "width .25s ease-in-out",
              backgroundColor: "blue",
              position: "absolute",
              left: "50%",
              bottom: "0",
              transform: " translate(-50%,0%) ",
            }}
          >
            Tabs
          </ChakraLink>
          <ChakraLink
            display={{ base: "none", md: "none", lg: "block", xl: "block" }}
            fontFamily="Protest Riot"
            fontWeight="500"
            as={ScrollLink}
            to="Drawer"
            smooth={true}
            duration={500}
            position="relative"
            _hover={{
              textDecoration: "none",
              _after: {
                width: "100%",
              },
              color: "blue",
            }}
            _after={{
              content: "''",
              width: "0",
              height: "1.5px",
              transition: "width .25s ease-in-out",
              backgroundColor: "blue",
              position: "absolute",
              left: "50%",
              bottom: "0",
              transform: " translate(-50%,0%) ",
            }}
          >
            Drawer
          </ChakraLink>
          <ChakraLink
            display={{ base: "none", md: "none", lg: "block", xl: "block" }}
            fontFamily="Protest Riot"
            fontWeight="500"
            as={ScrollLink}
            to="Password"
            smooth={true}
            duration={500}
            position="relative"
            _hover={{
              textDecoration: "none",
              _after: {
                width: "100%",
              },
              color: "blue",
            }}
            _after={{
              content: "''",
              width: "0",
              height: "1.5px",
              transition: "width .25s ease-in-out",
              backgroundColor: "blue",
              position: "absolute",
              left: "50%",
              bottom: "0",
              transform: " translate(-50%,0%) ",
            }}
          >
            Password
          </ChakraLink>
          <ChakraLink
            display={{ base: "none", md: "none", lg: "block", xl: "block" }}
            fontFamily="Protest Riot"
            fontWeight="500"
            as={ScrollLink}
            to="Button"
            smooth={true}
            duration={500}
            position="relative"
            _hover={{
              textDecoration: "none",
              _after: {
                width: "100%",
              },
              color: "blue",
            }}
            _after={{
              content: "''",
              width: "0",
              height: "1.5px",
              transition: "width .25s ease-in-out",
              backgroundColor: "blue",
              position: "absolute",
              left: "50%",
              bottom: "0",
              transform: " translate(-50%,0%) ",
            }}
          >
            Button
          </ChakraLink>
          <IconButton
            pos="absolute"
            right="2rem"
            variant="outline"
            border=".5px solid "
            _hover={{ color: "blue" }}
            aria-label="Open Drawer"
            icon={<HamburgerIcon />}
            display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}
            onClick={onOpen}
          />
          <ChakraLink
            display={{ base: "none", md: "none", lg: "block", xl: "block" }}
            fontFamily="Protest Riot"
            fontWeight="500"
            as={ScrollLink}
            to="Accordion"
            smooth={true}
            duration={500}
            position="relative"
            _hover={{
              textDecoration: "none",
              _after: {
                width: "100%",
              },
              color: "blue",
            }}
            _after={{
              content: "''",
              width: "0",
              height: "1.5px",
              transition: "width .25s ease-in-out",
              backgroundColor: "blue",
              position: "absolute",
              left: "50%",
              bottom: "0",
              transform: " translate(-50%,0%) ",
            }}
          >
            Accordion
          </ChakraLink>
          <ChakraLink
            display={{ base: "none", md: "none", lg: "block", xl: "block" }}
            fontFamily="Protest Riot"
            fontWeight="500"
            as={ScrollLink}
            to="AdvanceWork"
            smooth={true}
            duration={500}
            position="relative"
            _hover={{
              textDecoration: "none",
              _after: {
                width: "100%",
              },
              color: "blue",
            }}
            _after={{
              content: "''",
              width: "0",
              height: "1.5px",
              transition: "width .25s ease-in-out",
              backgroundColor: "blue",
              position: "absolute",
              left: "50%",
              bottom: "0",
              transform: " translate(-50%,0%) ",
            }}
          >
            AdvanceWork
          </ChakraLink>
        </Flex>
      </SimpleGrid>

      {/* MOBILE VIEW */}

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            color="#fff"
            fontWeight="bolder"
            zIndex="999"
            bg="red"
          />
          <DrawerBody pt="4rem">
            <Flex
              flexDirection="column"
              align="start"
              justify="center"
              gap="1rem"
            >
              <ChakraLink
                fontFamily="Protest Riot"
                fontWeight="500"
                as={ScrollLink}
                to="DropDown"
                smooth={true}
                duration={500}
                position="relative"
                onClick={onClose}
                _hover={{
                  textDecoration: "none",
                  _after: {
                    width: "100%",
                  },
                  color: "blue",
                }}
                _after={{
                  content: "''",
                  width: "0%",
                  height: "100%",
                  transition: "all .25s ease-in-out",
                  backgroundColor: "rgba(0, 0, 255, 0.3)",
                  position: "absolute",
                  left: "0%",
                  top: "0%",
                  transform: " translate(0%,0%) ",
                }}
              >
                DropDown
              </ChakraLink>
              <ChakraLink
                fontFamily="Protest Riot"
                fontWeight="500"
                as={ScrollLink}
                to="PopUp"
                smooth={true}
                duration={500}
                position="relative"
                onClick={onClose}
                _hover={{
                  textDecoration: "none",
                  _after: {
                    width: "100%",
                  },
                  color: "blue",
                }}
                _after={{
                  content: "''",
                  width: "0%",
                  height: "100%",
                  transition: "all .25s ease-in-out",
                  backgroundColor: "rgba(0, 0, 255, 0.3)",
                  position: "absolute",
                  left: "0%",
                  top: "0%",
                  transform: " translate(0%,0%) ",
                }}
              >
                PopUp
              </ChakraLink>
              <ChakraLink
                fontFamily="Protest Riot"
                fontWeight="500"
                as={ScrollLink}
                to="SearchBar"
                smooth={true}
                duration={500}
                position="relative"
                onClick={onClose}
                _hover={{
                  textDecoration: "none",
                  _after: {
                    width: "100%",
                  },
                  color: "blue",
                }}
                _after={{
                  content: "''",
                  width: "0%",
                  height: "100%",
                  transition: "all .25s ease-in-out",
                  backgroundColor: "rgba(0, 0, 255, 0.3)",
                  position: "absolute",
                  left: "0%",
                  top: "0%",
                  transform: " translate(0%,0%) ",
                }}
              >
                SearchBar
              </ChakraLink>
              <ChakraLink
                fontFamily="Protest Riot"
                fontWeight="500"
                as={ScrollLink}
                to="Tabs"
                smooth={true}
                duration={500}
                position="relative"
                onClick={onClose}
                _hover={{
                  textDecoration: "none",
                  _after: {
                    width: "100%",
                  },
                  color: "blue",
                }}
                _after={{
                  content: "''",
                  width: "0%",
                  height: "100%",
                  transition: "all .25s ease-in-out",
                  backgroundColor: "rgba(0, 0, 255, 0.3)",
                  position: "absolute",
                  left: "0%",
                  top: "0%",
                  transform: " translate(0%,0%) ",
                }}
              >
                Tabs
              </ChakraLink>
              <ChakraLink
                fontFamily="Protest Riot"
                fontWeight="500"
                as={ScrollLink}
                to="Drawer"
                smooth={true}
                duration={500}
                position="relative"
                onClick={onClose}
                _hover={{
                  textDecoration: "none",
                  _after: {
                    width: "100%",
                  },
                  color: "blue",
                }}
                _after={{
                  content: "''",
                  width: "0%",
                  height: "100%",
                  transition: "all .25s ease-in-out",
                  backgroundColor: "rgba(0, 0, 255, 0.3)",
                  position: "absolute",
                  left: "0%",
                  top: "0%",
                  transform: " translate(0%,0%) ",
                }}
              >
                Drawer
              </ChakraLink>
              <ChakraLink
                fontFamily="Protest Riot"
                fontWeight="500"
                as={ScrollLink}
                to="Password"
                smooth={true}
                duration={500}
                position="relative"
                onClick={onClose}
                _hover={{
                  textDecoration: "none",
                  _after: {
                    width: "100%",
                  },
                  color: "blue",
                }}
                _after={{
                  content: "''",
                  width: "0%",
                  height: "100%",
                  transition: "all .25s ease-in-out",
                  backgroundColor: "rgba(0, 0, 255, 0.3)",
                  position: "absolute",
                  left: "0%",
                  top: "0%",
                  transform: " translate(0%,0%) ",
                }}
              >
                Password
              </ChakraLink>
              <ChakraLink
                fontFamily="Protest Riot"
                fontWeight="500"
                as={ScrollLink}
                to="Button"
                smooth={true}
                duration={500}
                onClick={onClose}
                position="relative"
                _hover={{
                  textDecoration: "none",
                  _after: {
                    width: "100%",
                  },
                  color: "blue",
                }}
                _after={{
                  content: "''",
                  width: "0%",
                  height: "100%",
                  transition: "all .25s ease-in-out",
                  backgroundColor: "rgba(0, 0, 255, 0.3)",
                  position: "absolute",
                  left: "0%",
                  top: "0%",
                  transform: " translate(0%,0%) ",
                }}
              >
                Button
              </ChakraLink>
              <ChakraLink
                fontFamily="Protest Riot"
                fontWeight="500"
                as={ScrollLink}
                to="Accordion"
                smooth={true}
                duration={500}
                position="relative"
                onClick={onClose}
                _hover={{
                  textDecoration: "none",
                  _after: {
                    width: "100%",
                  },
                  color: "blue",
                }}
                _after={{
                  content: "''",
                  width: "0%",
                  height: "100%",
                  transition: "all .25s ease-in-out",
                  backgroundColor: "rgba(0, 0, 255, 0.3)",
                  position: "absolute",
                  left: "0%",
                  top: "0%",
                  transform: " translate(0%,0%) ",
                }}
              >
                Accordion
              </ChakraLink>
              <ChakraLink
                fontFamily="Protest Riot"
                fontWeight="500"
                as={ScrollLink}
                to="AdvanceWork"
                smooth={true}
                duration={500}
                position="relative"
                onClick={onClose}
                _hover={{
                  textDecoration: "none",
                  _after: {
                    width: "100%",
                  },
                  color: "blue",
                }}
                _after={{
                  content: "''",
                  width: "0%",
                  height: "100%",
                  transition: "all .25s ease-in-out",
                  backgroundColor: "rgba(0, 0, 255, 0.3)",
                  position: "absolute",
                  left: "0%",
                  top: "0%",
                  transform: " translate(0%,0%) ",
                }}
              >
                AdvanceWork
              </ChakraLink>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
