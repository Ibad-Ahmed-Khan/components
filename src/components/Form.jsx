import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

const Form = ({ toggleModel }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <VStack
      align="center"
      justify="center"
      w="full"
      h="full"
      fontWeight="200"
      color="#000"
    >
      <Flex
        flexDirection="column"
        w="20rem"
        color="#000"
        bg="#fff"
        align="start"
        justify="space-between"
        gap="3rem"
        borderRadius="md"
        p="4"
      >
        <Flex w="full" align="start" justify="space-between">
          <Text
            _hover={{ color: "blue.300", cursor: "pointer" }}
            transition="all .12s ease-in-out"
          >
            Login
          </Text>
          <Box
            border="1px solid #000"
            onClick={toggleModel}
            p="1"
            cursor="pointer"
            borderRadius="sm"
            _hover={{
              ".cross": {
                color: "red",
              },
              border: "1px solid red",
            }}
            transition="all .12s ease-in-out"
          >
            <Box
              className="cross"
              fontWeight="200"
              as={FaTimes}
              color="#000"
              transition="all .12s ease-in-out"
            />
          </Box>
        </Flex>
        <VStack w="full">
          <Input placeholder="your email" />
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="your password"
            />
            <InputRightElement cursor="pointer">
              <Button size="20" onClick={toggleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            w="full"
            _hover={{ color: "#fff", bg: "blue.300", cursor: "pointer" }}
            transition="all .12s ease-in-out"
          >
            Login
          </Button>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default Form;
