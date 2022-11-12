import "tailwindcss/tailwind.css";
import "@/styles/main.css";
import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
