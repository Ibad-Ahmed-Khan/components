import { Box, Button, Flex, Img, Input, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaCat, FaGhost, FaTimes } from "react-icons/fa";

const AdvanceWork = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [userDetail, setUserDetail] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const toggleUserDetail = (item) => {
    setSelectedUser(item);
    setUserDetail(!userDetail);
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => setData(res.data.users));
  }, []);

  return (
    <Flex
      pt="5rem"
      flexDirection="column"
      id="AdvanceWork"
      fontFamily="Protest Riot"
      align="center"
      minH="100vh"
      color="white"
      bg="gray.300"
    >
      <Text fontSize="2xl" cursor="pointer" letterSpacing="2px">
        AdvanceWork
      </Text>
      <VStack
        align="center"
        justify="center"
        w="full"
        h="full"
        fontWeight="200"
        color="#000"
        position="relative"
      >
        <Input
          variant="flushed"
          w="20rem"
          placeholder="Search"
          borderBottom="2px solid #fff"
          type="search"
          value={search}
          onChange={handleSearchChange}
        />
        <Box lineHeight="2rem" color="#000">
          {search.trim() === "" ? (
            <Text></Text>
          ) : (
            <Text transition="all 1s ease-in-out">
              {data.map((item, index) => (
                <Text
                  key={index}
                  display={
                    item.firstName
                      .toLowerCase()
                      .trim()
                      .startsWith(search.trim())
                      ? "block"
                      : "none"
                  }
                  transition="all .3s ease-in-out"
                  p="2"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                >
                  <Flex align="center" justify="space-between" w="20rem">
                    <Text>{item.firstName}</Text>
                    <Button
                      onClick={() => toggleUserDetail(item)}
                      gap="1rem"
                      variant="solid"
                      _hover={{ color: "#fff", bg: "rgba(0, 0, 0, 0.6)" }}
                      transition="all .3s ease-in-out"
                    >
                      Details <Box className="cat" as={FaCat} />
                    </Button>
                  </Flex>
                </Text>
              ))}
            </Text>
          )}
        </Box>
        {userDetail && (
          <Box
            borderRadius="md"
            w="20rem"
            bg="#fff"
            boxShadow="lg"
            p="4"
            position="absolute"
            top="0"
          >
            <Box
              position="absolute"
              top="6px"
              right="6px"
              onClick={() => setUserDetail(false)}
              cursor="pointer"
              as={FaTimes}
              size="1.4rem"
              borderRadius=".3rem"
              color="#fff"
              bg="red"
              p="1"
            />
            <Flex
              textTransform="capitalize"
              flexDirection="column"
              lineHeight="2rem"
              p="2"
            >
              <Img
                src={selectedUser.image}
                alt="User Image"
                objectFit="cover"
                w="4rem"
                h="4rem"
                borderRadius="md"
              />
              <Text>firstName : {selectedUser.firstName}</Text>
              <Text>lastName : {selectedUser.lastName}</Text>
              <Text>age : {selectedUser.age}</Text>
              <Text>email: {selectedUser.email}</Text>
              <Text>phone: {selectedUser.phone}</Text>
              <Text>username: {selectedUser.username}</Text>
              <Text>password: {selectedUser.password}</Text>
              <Text>birthDate: {selectedUser.birthDate}</Text>
              <Text>bloodGroup: {selectedUser.bloodGroup}</Text>
              <Text>height: {selectedUser.height}</Text>
              <Text>weight: {selectedUser.weight}</Text>
              <Text>eyeColor: {selectedUser.eyeColor}</Text>
            </Flex>
          </Box>
        )}
      </VStack>
    </Flex>
  );
};

export default AdvanceWork;
