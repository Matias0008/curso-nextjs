import Head from "next/head";

import { Navbar } from "@/components/ui";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head></Head>
      <nav>
        <Navbar />
      </nav>
      <main style={{ padding: "16px 24px" }}>{children}</main>
    </>
  );
};
