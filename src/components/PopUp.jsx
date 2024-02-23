import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Form from "./Form";

const PopUp = () => {
  const [model, setModel] = useState(false);

  const toggleModel = () => {
    setModel(!model);
    console.log("clicked");
  };

  return (
    <Flex
      pt="5rem"
      flexDirection="column"
      id="PopUp"
      fontFamily="Protest Riot"
      align="center"
      h="100vh"
      color="white"
      bg="gray.300"
    >
      <Text fontSize="2xl" cursor="pointer" letterSpacing="2px">
        PopUp
      </Text>
      <VStack
        align="center"
        justify="center"
        w="full"
        h="full"
        fontWeight="200"
        color="#000"
      >
        <Button
          _hover={{ color: "blue", border: "1px solid blue" }}
          transition="all .25s ease-in-out"
          border="1px solid white"
          variant="outline"
          onClick={toggleModel}
        >
          Pop Me
        </Button>
        {model && (
          <>
            <Box
              pos="fixed"
              left="50%"
              top="50%"
              w="100vw"
              h="100vh"
              transform="translate(-50%,-50%)"
              bg="rgba(0, 0, 0, 0.4)"
              zIndex="99"
            >
              <Form toggleModel={toggleModel} />
            </Box>
          </>
        )}
      </VStack>
    </Flex>
  );
};

export default PopUp;
