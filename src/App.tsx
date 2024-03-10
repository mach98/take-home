import React from 'react';
import Home from './pages/Home/Home';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
