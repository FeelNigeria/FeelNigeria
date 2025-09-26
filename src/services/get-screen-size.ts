import { useBreakpointValue } from "@chakra-ui/react";

const getScreenSize = () => {
    const screenSize     = useBreakpointValue({
      base: "mobile",
      sm: "small",
      md: "medium",
      lg: "large",
      xl: "extra-large",
    });

    return screenSize
}

export default getScreenSize;
