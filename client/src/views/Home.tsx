import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Box, Text } from '@chakra-ui/layout'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../actions'
import { stateType } from '../reducer'
import { Image } from '@chakra-ui/image'
import { CircularProgress } from '@chakra-ui/progress'
import { User } from '../types'
import { Avatar } from '@chakra-ui/avatar'

function Home() {

    const {user,isAuthenticated}=useAuth0()
    
    const userDB=useSelector((state:stateType)=>state.userDB as User)

    const dispatch=useDispatch()

    useEffect(() => {
        if(isAuthenticated && userDB===undefined){
            dispatch(getUser({
                email:user?.email,
                family_name:user?.family_name,
                given_name:user?.given_name,
                name:user?.name,
                nickname:user?.nickname,
                picture:user?.picture,
                sub:user?.sub,
            }))
        }
    }, [isAuthenticated])

    return (
     <Box width="100vw" height="100vh" backgroundColor="teal">
         {userDB ? (
             <Box>
             <Text>{userDB?.firstName}</Text>
             <Avatar src={userDB?.picture} />
             </Box>
         ):<CircularProgress/>}
     </Box>
    )
}

Home.propTypes = {

}

export default Home

