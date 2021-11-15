import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useAuth0 } from '@auth0/auth0-react'
import { Box } from '@chakra-ui/layout'

function Home() {

    const {user,isAuthenticated}=useAuth0()

    useEffect(() => {
        console.log(user)
        return () => {
           
        }
    }, [isAuthenticated])

    return (
     <Box width="100vw" height="100vh" backgroundColor="red"></Box>
    )
}

Home.propTypes = {

}

export default Home

