import { extendTheme, theme} from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export default extendTheme({
  fonts:{
    primary: 'T',
  },
  colors: {
    primary:theme.colors.green
  },
})

