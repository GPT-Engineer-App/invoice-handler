import { Container, Text, VStack, Box, Input, Select, Button, Table, Thead, Tbody, Tr, Th, Td, IconButton, Flex, Spacer, HStack } from "@chakra-ui/react";
import { FaFilter, FaSort, FaFileImport, FaFileExport, FaEdit, FaTrashAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex mb={4}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold">Project Name</Text>
          <Text>Category</Text>
        </Box>
        <Spacer />
        <Button leftIcon={<FaFileImport />} colorScheme="teal" variant="solid" mr={2}>
          Import
        </Button>
        <Button leftIcon={<FaFileExport />} colorScheme="teal" variant="solid">
          Export
        </Button>
      </Flex>
      <Flex mb={4}>
        <Input placeholder="Search" maxW="300px" mr={2} />
        <Select placeholder="Category" maxW="200px" mr={2}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </Select>
        <Button leftIcon={<FaFilter />} colorScheme="teal" variant="outline" mr={2}>
          Filter
        </Button>
        <Button leftIcon={<FaSort />} colorScheme="teal" variant="outline">
          Sort
        </Button>
      </Flex>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Item</Th>
            <Th>Value ($)</Th>
            <Th>Data</Th>
            <Th>Date</Th>
            <Th>Status</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {[...Array(10)].map((_, index) => (
            <Tr key={index}>
              <Td>Lorem dolore</Td>
              <Td>9,000</Td>
              <Td>Data series</Td>
              <Td>DD/MM/YY</Td>
              <Td>
                <Button size="sm" colorScheme="teal" variant="outline">Status</Button>
              </Td>
              <Td>
                <HStack spacing={2}>
                  <IconButton icon={<FaEdit />} aria-label="Edit" size="sm" />
                  <IconButton icon={<FaTrashAlt />} aria-label="Delete" size="sm" />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Flex mt={4} justifyContent="space-between" alignItems="center">
        <Text>106 results</Text>
        <HStack spacing={2}>
          <Button size="sm">1</Button>
          <Button size="sm">2</Button>
          <Button size="sm">3</Button>
          <Button size="sm">4</Button>
          <Button size="sm">...</Button>
          <Button size="sm">10</Button>
          <Button size="sm">11</Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;