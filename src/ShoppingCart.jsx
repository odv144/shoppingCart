import { Box, Button, Center, Container, Image, Text } from "@chakra-ui/react";
import { NavBar } from "./Components/NavBar";

import { CardMain } from "./Components/CardMain";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { CartBadge } from "./Components/CartBadge";
import { useState } from "react";

export const ShoppingCart = () => {
  const [canPro, setCanPro] = useState(0);

  const onAddCanPro = () => {
    setCanPro(canPro + 1);
  };
  const onDelCanPro = () => {
    setCanPro(canPro - 1);
  };

  return (
    <Box maxH="100vw" minH="80vh">
      <Header />
      <NavBar canPro={canPro} />
      <Box display={"flex"} justifyContent={"center"}>
        <CardMain
          onAddCanPro={onAddCanPro}
          onDelCanPro={onDelCanPro}
          canPro={canPro}
        ></CardMain>
        <CardMain
          onAddCanPro={onAddCanPro}
          onDelCanPro={onDelCanPro}
          canPro={canPro}
        ></CardMain>
        <CardMain
          onAddCanPro={onAddCanPro}
          onDelCanPro={onDelCanPro}
          canPro={canPro}
        ></CardMain>
      </Box>
      <Box 
      bg='radial-gradient(ellipse at center, rgba(0,38,252,1) 0%, rgba(32,60,214,1) 28%, rgba(89,97,147,1) 77%, rgba(115,115,115,1) 100%)'
      maxH="100vw" 
      minH="10vh" 
      display="flex"
      color='white'
      >
        <Footer />
      </Box>
    </Box>
  );
};
