import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Image from "next/image";
import { CHILD_MESSAGE_FROM_PARENT_KEY } from "@captn/utils/constants";

export default function Page() {
	const [image, setImage] = useState("");
	useEffect(() => {
		const unsubscribe = window.ipc.on(CHILD_MESSAGE_FROM_PARENT_KEY, response => {
			if (response.payload.message) {
				setImage(response.payload.message);
			}
		});
		return () => {
			unsubscribe();
		};
	}, []);
	return (
		<Layout title="Child Window">
			<Typography>Child Window</Typography>
			{image && (
				<Box
					sx={{
						position: "relative",
						width: "100%",
						px: 1,
						py: 1,
					}}
				>
					<Box
						sx={{
							position: "relative",
							width: "100%",
							maxWidth: 1024,
							mx: "auto",
							aspectRatio: 1,
						}}
					>
						<Image src={image} alt="illustration of a cute kitten" layout="fill" />
					</Box>
				</Box>
			)}
		</Layout>
	);
}
