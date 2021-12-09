import { Flex, Grid, Image } from "@chakra-ui/react";

export default function Header(){
    return(
        <Flex
          as ="header"
          w="100%"
          bg="white"
          mx="auto"
          h="100"
          align="center"
          justify="center"
          >

              <Grid
                h="100"
                mx="auto"
                w="100%"
                maxWidth="1440"
                alignItems="center"
                templateColumns="repeat(3fr, 1)"
                justifyContent="center"
                >

                    <Image 
                    src="/LogoTravel.svg"
                    alt="logo travel logo"
                    gridColumn="2"
                    />

              </Grid>



        </Flex>
    )
}