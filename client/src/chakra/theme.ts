import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
	initialColorMode: "light",
	useSystemColorMode: true,
};

// 3. extend the theme
const theme = extendTheme({
	config,
	styles: {
		global: (props: any) => ({
			body: {
				backgroundColor: mode("white", "gray.900")(props),
				color: mode("#222", "gray.100")(props),
				transition: "background-color 0.2s, color 0.2s",
			},
		}),
	},
});

export default theme;