import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Highlighted(){
    return(
        <Flex
          w="100%"
          bgImage="url('/imageHighlight.jpg')"
          bgSize="cover"
          h={["163","335px"]}
          bgPosition=""
          bgRepeat="no-repeat"
          >
              <Flex
                justify="space-between"
                align="center"
                w="100%"
                mx="auto"
                px={["0","0","0","140"]}
              >
                  <div>
                      <Heading
                        color="gray.100"
                        fontWeight="500"
                        fontSize={["xl","2l","2xl","4xl"]}
                        >
                             5 Continentes, <br/> Infinitas possibilidades
                      </Heading>
                      <Text 
                        mt="5" 
                        fontSize={["1rem", "xl"]} 
                        color="gray.300"
                        >
                            Chegou a hora de tirar do papel a viagem que você<br /> sempre sonhou. 
                        </Text>
                  </div>
                  <Image
                    w="430px"
                    src="/Airplane.svg"
                    alt="plane logo "
                    transform={"translateY(50px)"}
                    
                  />
                  

              </Flex>

        </Flex>
    )
}