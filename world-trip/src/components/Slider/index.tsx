import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation,Pagination} from 'swiper';

import 'swiper/css';
// swiper bundle styles
import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider(){
    return(
        <Flex
            
            w="100%"
            maxWidth="1440"
            mx="auto"
            mb={["5", "30"]}
            h={["250px", "450px"]}

        >
            
            <Swiper
                slidesPerView={1}
                navigation
                modules={[Navigation,Pagination]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                style={{ width: "100%", flex:'1' }}
            >
                <SwiperSlide>
                    <Flex
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        bgImage="url(/EuropeContinent.png)"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                        bgPosition="center"
                    >
                        <Link href="/europa">
                            <a>
                                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">Europa</Heading>
                                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl"]}>O continente mais antigo.</Text>
                            </a>
                        </Link>
                    </Flex>
                    

                </SwiperSlide>
                

            </Swiper>
            
        </Flex>
    );
}