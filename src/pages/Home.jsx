import { Box } from "@chakra-ui/react";
import { Header } from "../Components/Header";
import { NavBar } from "../Components/NavBar";
import { CardMain } from "../Components/CardMain";
import { Footer } from "../Components/Footer";


export const Home = ({canPro,onAddCanPro,onDelCanPro}) => {
  
  return (
    <Box maxH="100vw" minH="80vh">
      {/* <Header />
      <NavBar canPro={canPro} /> */}
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
      
    </Box>
  );
};
