import { ChangeEvent, useState } from "react";

import Cookies from "js-cookie";

import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { Layout } from "@/components/layouts";
import { GetServerSideProps } from "next";

interface Props {
  theme: string;
}

const ThemeChangerPage: React.FC<Props> = ({ theme }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;
    setCurrentTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
    Cookies.set("theme", selectedTheme);
  };

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup row value={currentTheme} onChange={onThemeChange}>
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="light"
              />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="Custom"
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default ThemeChangerPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const VALID_THEMES = ["dark", "light", "custom"];
  const { theme = "light" } = ctx.req.cookies;

  return {
    props: {
      theme: VALID_THEMES.includes(theme) ? theme : "custom",
    },
  };
};
