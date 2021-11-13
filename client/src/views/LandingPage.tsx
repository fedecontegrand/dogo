import { Box, BoxProps, Heading, Stack, StackDivider, Text } from '@chakra-ui/layout'
import { motion } from 'framer-motion'
import { ReactElement } from 'react'
import backgroundImage from "../images/dogo1.jpg"
import adopcion from "../images/adopcion.png"
import cruzar from "../images/cruzar.png"
import perdido from "../images/missing.png"
import { Image } from '@chakra-ui/image'

import { Button } from '@chakra-ui/button'
import { useAuth0 } from '@auth0/auth0-react'
import { Fade } from '@chakra-ui/react'

const MotionBox = motion<BoxProps>(Box)

export default function LandingPage(): ReactElement {

    const {loginWithRedirect}=useAuth0()
    return (
        <Box 
        backgroundImage={backgroundImage} 
        width="100vw" height="100vh" 
        backgroundRepeat="no-repeat" 
        backgroundSize="cover" 
        backgroundPosition="center"
        display="flex"
        flexDirection="row-reverse"
        alignItems="center"
        padding="2rem"
        >
         <motion.div animate={{ x: [-500, 0] }}>
         <MotionBox 
          width="50rem"
          border="0px solid gray"
          borderRadius="10px"
          padding="1rem"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          backdropFilter="blur(4px)"
         >
            <Heading
            fontSize="6xl"
            color="primary.500"
            margin="auto"
            marginBottom="2rem"
            >
            Bienvenido a Dogo     
            </Heading>
            <Text marginBottom="2rem" color="white">
              La plataforma ideal para contactarnos y poder 
              darle la mejor vida a nuestras queridas mascotas.  
            </Text>
            <Text marginBottom="2rem" color="white">
                Contactate con otros dueños, da en adopción o adopta 
                animales en tránsito, emití alertas en tu zona cuando 
                no encuentres a tu amigo y mucho más...
            </Text>
            <Stack direction="column" divider={<StackDivider borderColor="grey"/>}>
                <Box display="flex" alignItems="center">
                <Image src={adopcion} boxSize="6rem"/>
                <Text marginLeft="2rem" color="white"> Regala / Adopta animales en tránsito</Text>
                </Box>
                <Box display="flex" alignItems="center">
                <Image src={cruzar} boxSize="6rem"/>
                <Text marginLeft="2rem" color="white">Encontrá pareja para tu compañero de cuatro patas</Text>
                </Box>
                <Box display="flex" alignItems="center">
                <Image src={perdido} boxSize="6rem"/>
                <Text marginLeft="2rem" color="white">Buscá y ayudá a encontrar a los que extrañamos tanto :´( </Text>
                </Box>
            <Button onClick={()=> loginWithRedirect()} backgroundColor="primary.100">Ingresa</Button>
            </Stack>
         </MotionBox>
         </motion.div>
        </Box>
    )
}
