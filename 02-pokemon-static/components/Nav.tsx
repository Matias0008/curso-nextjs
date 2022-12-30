import { Container, useTheme, Text, Spacer } from "@nextui-org/react";
import Image from "next/image";

export const Nav = () => {
  const { theme } = useTheme();
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: theme?.colors.gray50.value,
        }}
      >
        <Container
          lg
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            height: "64px",
          }}
        >
          <Image
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            }
            alt={"hola"}
            width={64}
            height={50}
          ></Image>
          <Text color="white" h2 style={{ margin: 0 }}>
            P
          </Text>
          <Text color="white" h3 style={{ margin: 0 }}>
            okemon App
          </Text>
          <Spacer css={{ flex: 1 }} />
          <Text>Favoritos</Text>
        </Container>
      </div>
    </>
  );
};
