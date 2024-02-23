import { Box, Button, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FaCaretUp, FaTimes } from "react-icons/fa";

const Drawer = () => {
  // for Drawer 1
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  // for Drawer 2
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const toggleIsOpenTwo = () => {
    setIsOpenTwo(!isOpenTwo);
  };

  return (
    <Flex
      pt="5rem"
      flexDirection="column"
      id="Drawer"
      fontFamily="Protest Riot"
      align="center"
      h="100vh"
      color="white"
      bg="gray.300"
      pos="relative"
      left="0%"
      top="0%"
    >
      <Text fontSize="2xl" cursor="pointer" letterSpacing="2px">
        Drawer
      </Text>
      <VStack
        align="center"
        justify="center"
        w="full"
        h="full"
        fontWeight="200"
        color="#000"
      >
        {/* Drawer no 1 */}
        <Flex
          pos="absolute"
          left="0%"
          top="20%"
          w={isOpen ? "40%" : "0%"}
          h="60vh"
          color="#fff"
          bg="blue.300"
          transition="all .4s ease-in-out"
          borderRadius="md"
        >
          <Flex
            flexDirection="column"
            align="end"
            gap="2rem"
            transform={isOpen ? "scale(1,1)" : "scale(0,1)"}
            transformOrigin="left"
            p="4"
            transition="all .4s ease-in-out"
          >
            <Box
              as={FaTimes}
              onClick={toggleIsOpen}
              size="2rem"
              cursor="pointer"
              zIndex="33"
            />
            <Text>
              Hello, I'm a text using Chakra UI. Welcome to this demonstration.
              Chakra UI provides a powerful set of components for building React
              applications.
            </Text>
          </Flex>
        </Flex>
        <Button
          variant="outline"
          border="1px solid #fff"
          fontWeight="200"
          letterSpacing="3px"
          onClick={toggleIsOpen}
          position="relative"
          _hover={{
            textDecoration: "none",
            _after: {
              width: "100%",
            },
            color: "blue",
            border: "1px solid blue",
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
            borderRadius: "md",
          }}
        >
          Click Me
        </Button>
        {/* Drawer no 2 */}
        <Flex
          pos="absolute"
          right="0%"
          top="20%"
          w={isOpenTwo ? "40%" : "0%"}
          h="60vh"
          color="#fff"
          bg="red.300"
          transition="all .4s ease-in-out"
          borderRadius="md"
        >
          <Flex
            flexDirection="column"
            gap="2rem"
            transform={isOpenTwo ? "scale(1,1)" : "scale(0,1)"}
            transformOrigin="left"
            p="4"
            transition="all .4s ease-in-out"
          >
            <Box
              as={FaTimes}
              onClick={toggleIsOpenTwo}
              size="2rem"
              cursor="pointer"
              zIndex="33"
            />
            <Text>
              Hello, I'm a text using Chakra UI. Welcome to this demonstration.
              Chakra UI provides a powerful set of components for building React
              applications.
            </Text>
          </Flex>
        </Flex>
        <Button
          variant="outline"
          border="1px solid #fff"
          fontWeight="200"
          letterSpacing="3px"
          onClick={toggleIsOpenTwo}
          position="relative"
          _hover={{
            textDecoration: "none",
            _after: {
              width: "100%",
            },
            color: "red",
            border: "1px solid red",
          }}
          _after={{
            content: "''",
            width: "0%",
            height: "100%",
            transition: "all .25s ease-in-out",
            backgroundColor: "rgba(255, 0, 0, 0.3)",
            position: "absolute",
            right: "0%",
            top: "0%",
            transform: " translate(0%,0%) ",
            borderRadius: "md",
          }}
        >
          Click Me
        </Button>
      </VStack>
    </Flex>
  );
};

export default Drawer;
