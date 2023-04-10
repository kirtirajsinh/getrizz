import Nav from "@/components/Nav";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Nav />
      <Component {...pageProps} />;
    </SessionProvider>
  );
}
