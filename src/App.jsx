import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from "react";
import Router from "./shared/Router";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  )
}

export default App;
