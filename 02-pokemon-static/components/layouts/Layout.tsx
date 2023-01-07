import { useEffect } from "react";

import Head from "next/head";
import { Nunito } from "@next/font/google";

import { useTheme } from "../../state/AppContext";
import { Nav } from "../Nav";

const nunito = Nunito({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
  title?: string | undefined;
};

export const Layout: React.FC<Props> = ({ title, children }) => {
  const [theme] = useTheme();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

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
      <section
        className={`${nunito.className} container mx-auto p-4 pt-8 pb-8`}
      >
        {children}
      </section>
    </>
  );
};
