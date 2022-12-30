import Head from "next/head";
import { Nunito } from "@next/font/google";

import { Container, styled } from "@nextui-org/react";
import { Navbar, Text } from "@nextui-org/react";

import { Nav } from "../Nav";

const nunito = Nunito({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
  title?: string | undefined;
};

export const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Matias Delgado" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon: ${title}`}
        />
        <meta name="keywords" content={`${title}, pokedex, pokemons`} />
      </Head>

      <Nav />

      <Container
        lg
        className={nunito.className}
        css={{
          paddingTop: "$10",
          paddingBottom: "$10",
        }}
      >
        {children}
      </Container>
    </>
  );
};
