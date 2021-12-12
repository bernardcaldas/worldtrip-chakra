import { ChakraProvider } from '@chakra-ui/react';
import { AppProps} from 'next/app';
import { theme } from '../styles/theme';

import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//import 'swipercomponents/navigation/navigation.scss';
//import 'swiper/components/pagination/pagination.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    
  )
}

export default App
