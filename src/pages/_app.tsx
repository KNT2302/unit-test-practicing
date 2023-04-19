import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";

interface ReactQueryContextI {
  children: ReactNode;
}

export const queryClient = new QueryClient();

export const QueryClientContanceProvider = ({
  children,
}: ReactQueryContextI) => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientContanceProvider>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientContanceProvider>
  );
}
