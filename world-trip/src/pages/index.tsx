import { Flex, Heading } from "@chakra-ui/react";
import Divider from "../components/Divider";
import Header from '../components/Header';
import Highlighted from "../components/Highlighted";
import TravelTypes from "../components/TravelTypes";


export default function Home() {
  return (
   <Flex flexDirection="column" h="100vh">
     <Header />
     <Highlighted />
     <TravelTypes />
     <Divider />
     <Heading
      textAlign="center"
      fontWeight="500"
      fontSize={["lg", "3xl", "4xl"]}
      mb={["5", "14"]}
     >
       Vamos nessa ?<br/> Então escolha seu continente</Heading>

   </Flex>
  )
}
