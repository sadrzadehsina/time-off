import React from "react";
import { MantineProvider, Container } from "@mantine/core";

function App() {
	return (
		<MantineProvider theme={{ fontFamily: "Saira" }} withGlobalStyles>
			<Container>
				<h1>Time Off</h1>
			</Container>
		</MantineProvider>
	);
}

export default App;
