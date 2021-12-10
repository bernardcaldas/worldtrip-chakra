import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import IconsTravelTypes from "./IconsTravelTypes";

export default function TravelTypes(){
    return (
        <Grid
            templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
            w="100%"
            justifyContent="space-between"
            align="center"
            mt={["10", "32"]}
            mx="auto"
            maxW="1200px"
        >
            <GridItem>
                <IconsTravelTypes icon="cocktail" text="Vida noturna"/>
            </GridItem>
            <GridItem>
                <IconsTravelTypes icon="surf" text="praia"/>
            </GridItem>
            <GridItem>
                <IconsTravelTypes icon="building" text="moderno"/>
            </GridItem>
            <GridItem>
                <IconsTravelTypes icon="museum" text="clássico"/>
            </GridItem>
            <GridItem colSpan={[2,2,2,1]}>
                <IconsTravelTypes icon="earth" text="e mais..."/>
            </GridItem>
        </Grid>
    );
}