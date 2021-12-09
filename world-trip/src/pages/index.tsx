import { Flex } from "@chakra-ui/react";
import Header from '../components/Header';
import Highlighted from "../components/Highlighted";
import TravelTypes from "../components/TravelTypes";


export default function Home() {
  return (
   <Flex flexDirection="column" h="100vh">
     <Header />
     <Highlighted />
     <TravelTypes />

   </Flex>
  )
}
