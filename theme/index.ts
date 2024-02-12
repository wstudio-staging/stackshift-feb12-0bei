import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";
import { Button } from "./components/button";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#dfe9ff",
      100: "#b0c1ff",
      200: "#7e9bff",
      300: "#4b7aff",
      400: "#1a5bff",
      500: "#0049e6",
      600: "#002db4",
      700: "#001782",
      800: "#000851",
      900: "#010021",
      primary: {
        default: "#0045d8",
        foreground: "#296eff",
      },
      secondary: {
        default: "#3576ff",
        foreground: "#d5e3ff",
      },
    },
  },
  components: {
    Button: {
      ...Button,
    },
  },
});

export default theme;
