import { Box, Heading } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMissingPets } from '../actions'
import { stateType } from '../reducer'

export default function MissingBanner() {

    const allMissingPets=useSelector((state:stateType)=>state.allMissingPets)

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getAllMissingPets())
    },[])
    return (
        <Box>
            <Heading>Se buscan:</Heading>
             <Box display="flex">
                {}
             </Box>
        </Box>
    )
}
