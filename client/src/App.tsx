

import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';

function App() {
  return (
    <Container maxW="lg" centerContent py={24}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to My Landing Page
        </Heading>
        <Text fontSize="xl" color="gray.600" textAlign="center">
          This is a simple and modern landing page built with React and Chakra UI.
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
}

export default App;
