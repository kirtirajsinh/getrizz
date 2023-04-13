import Nav from "@/components/Nav";
import "@/styles/globals.css";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <RequireAuth />
      <Nav />
      <Component {...pageProps} />;
      <RequireAuth />
    </SessionProvider>
  );
}

function RequireAuth({ children }) {
  const { data: sessionData, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Redirect to login page if session is not loaded yet
  useEffect(() => {
    if (status !== "loading") setIsLoading(false);
  }, [status]);

  if (isLoading) return null;

  // Redirect to login page if user is not authenticated and is trying to access a protected page
  if (!sessionData?.user && router.pathname !== "/") {
    router.push("/");
    return null;
  }

  return children;
}
