import Layout from "@/components/layout";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import { APP_ID } from "@/constants";
import { RequiredDownloads } from "@/components/required-downloads";
import { RandomImage } from "@/components/random-image";

export default function Page() {
	return (
		<Layout title="Main Window">
			<Typography>Main Window</Typography>
			<RequiredDownloads />
			<RandomImage />
		</Layout>
	);
}
