import { Flex, Image, Text } from "@chakra-ui/react";

interface IconsTravelTypesProps {
    icon: string;
    text: string;
}

export default function IconsTravelTypes({icon, text}: IconsTravelTypesProps) {
    return (
        <Flex
            direction={["row", "column"]}
            align="center"
            justify="center"
        >
            <Image src={`icons/${icon}.svg`} w="85px" h="85px" mb="6"/>
            <Text fontWeight="600" color="gray.700" fontSize={["md", "xl", "2xl"]}>{text}</Text>

        </Flex>
    )
}