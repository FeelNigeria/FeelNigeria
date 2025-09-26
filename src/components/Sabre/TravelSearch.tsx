import { useState } from "react";
import {
  Box,
  Tabs,
  Input,
  InputGroup,
  Checkbox,
  Button,
  VStack,
  HStack,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import Header from "../Header";

const TravelSearch = () => {
  const [location, setLocation] = useState(
    "Abuja, Federal Capital Territory, Nigeria"
  );
  const [dateRange, setDateRange] = useState("May 1 - May 7");
  const [travelers, setTravelers] = useState("2 travelers, 1 room");
  const [addFlight, setAddFlight] = useState(false);
  const [addCar, setAddCar] = useState(false);

  const SearchForm = () => (
    <VStack gap={4} align="stretch">
      {/* Location Input */}
      <InputGroup startElement={<Icon as={FaMapMarkerAlt} color="gray.500" />}>
        <Input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Where to?"
        />
      </InputGroup>

      {/* Date Range */}
      <InputGroup startElement={<Icon as={FaCalendarAlt} color="gray.500" />}>
        <Input value={dateRange} readOnly onInput={() => setDateRange("")} />
      </InputGroup>

      {/* Travelers */}
      <InputGroup startElement={<Icon as={FaUser} color="gray.500" />}>
        <Input value={travelers} onInput={() => setTravelers("")} readOnly />
      </InputGroup>

      {/* Optional Add-ons */}
      <HStack align="flex-start">
        <Stack align="flex-start" flex="1">
          <Checkbox.Root
            checked={addCar}
            onCheckedChange={(e) => setAddCar(!!e.checked)}
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>Add a Car</Checkbox.Label>
          </Checkbox.Root>
        </Stack>
        <Stack align="flex-start" flex="1">
          <Checkbox.Root
            checked={addFlight}
            onCheckedChange={(e) => setAddFlight(!!e.checked)}
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>Add a flight</Checkbox.Label>
          </Checkbox.Root>
        </Stack>
      </HStack>
      {/* Search Button */}
      <Button colorScheme="blue" borderRadius="full" size="lg">
        Search
      </Button>
    </VStack>
  );

  return (
    <>
      <Header child="Book A Tour" linkName="Book Now" />
      <Box
        maxW="md"
        mx="auto"
        mt={8}
        p={4}
        borderRadius="md"
        boxShadow="md"
        bg="white"
      >
        <Tabs.Root defaultValue="flights">
          <Tabs.List>
            <Tabs.Trigger value="stays">Stays</Tabs.Trigger>
            <Tabs.Trigger value="flights">Flights</Tabs.Trigger>
            <Tabs.Trigger value="cars">Cars</Tabs.Trigger>
            <Tabs.Trigger value="packages">Packages</Tabs.Trigger>
            <Tabs.Indicator />
          </Tabs.List>

          <Tabs.Content value="stays">
            <SearchForm />
          </Tabs.Content>
          <Tabs.Content value="flights">
            <SearchForm />
          </Tabs.Content>
          <Tabs.Content value="cars">
            <SearchForm />
          </Tabs.Content>
          <Tabs.Content value="packages">
            <SearchForm />
          </Tabs.Content>
        </Tabs.Root>
      </Box>
    </>
  );
};

export default TravelSearch;
