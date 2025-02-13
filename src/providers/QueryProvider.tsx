import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type QueryClientProps = {
  children: React.ReactElement;
};

const queryClient = new QueryClient();

export default function QueryProvider(props: QueryClientProps) {
  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
}
