import { extendTheme, theme} from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export default extendTheme({
  fonts:{
    heading: 'Pacifico',
    body:"Quicksand"
  },
  colors: {
    primary:theme.colors.teal
  },
})

