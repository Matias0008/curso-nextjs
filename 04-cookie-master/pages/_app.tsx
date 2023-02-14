import type { AppContext, AppProps } from "next/app";
import Cookies from "js-cookie";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { Theme } from "@mui/material/styles";

import { darkTheme, lightTheme, customTheme } from "@/themes";
import { useEffect, useState } from "react";

const mapThemes: { [key: string]: Theme } = {
  dark: darkTheme,
  light: lightTheme,
  custom: customTheme,
};

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get("theme") || "light";
    const selectedTheme: Theme = mapThemes[cookieTheme];
    setTheme(selectedTheme);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
