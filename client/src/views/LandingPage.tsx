import { Box, BoxProps, Container, Heading, Stack, StackDivider, Text } from '@chakra-ui/layout'
import { motion } from 'framer-motion'
import React, { ReactElement } from 'react'
import backgroundImage from "../images/dogo1.jpg"
import adopcion from "../images/adopcion.png"
import cruzar from "../images/cruzar.png"
import perdido from "../images/missing.png"
import { Image } from '@chakra-ui/image'
import { FormControl } from '@chakra-ui/form-control'
import { Button } from '@chakra-ui/button'
import { useAuth0 } from '@auth0/auth0-react'

const MotionBox = motion<BoxProps>(Box)

export default function LandingPage(): ReactElement {

    const {loginWithRedirect}=useAuth0()
    return (
        <Box 
        backgroundImage={backgroundImage} 
        width="100%" height="100vh" 
        backgroundRepeat="no-repeat" 
        backgroundSize="cover" 
        backgroundPosition="center"
        display="flex"
        alignItems="center"
        padding="2rem"
        >
         <MotionBox 
          width="50rem"
          border="0px solid gray"
          borderRadius="10px"
          padding="1rem"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          backdropFilter="blur(4px)"
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
         >
            <Heading
            fontSize="6xl"
            color="primary.500"
            margin="auto"
            marginBottom="1rem"
            >
            Bienvenido a Dogo     
            </Heading>
            <Text marginBottom="2rem">
              La plataforma ideal para contactarnos y poder 
              darle la mejor vida a nuestras queridas mascotas.  
            </Text>
            <Text marginBottom="2rem">
                Contactate con otros dueños, da en adopción o adopta 
                animales en tránsito, emití alertas en tu zona cuando 
                no encuentres a tu amigo y mucho más...
            </Text>
            <Stack direction="column" divider={<StackDivider borderColor="grey"/>}>
                <Box display="flex" alignItems="center">
                <Image src={adopcion} boxSize="6rem"/>
                <Text marginLeft="2rem"> Regala / Adopta animales en tránsito</Text>
                </Box>
                <Box display="flex" alignItems="center">
                <Image src={cruzar} boxSize="6rem"/>
                <Text marginLeft="2rem">Encontrá pareja para tu compañero de cuatro patas</Text>
                </Box>
                <Box display="flex" alignItems="center">
                <Image src={perdido} boxSize="6rem"/>
                <Text marginLeft="2rem">Buscá y ayudá a encontrar a los que extrañamos tanto :´( </Text>
                </Box>
            </Stack>
         </MotionBox>
        <MotionBox>
            <Heading>Ingresa con cualquiera de tus cuentas</Heading>
            <Button onClick={()=> loginWithRedirect()}>Ingresa</Button>
        </MotionBox>
        </Box>

    )
}
