import { useRequiredDownloads } from "@captn/react/use-required-downloads";
import CheckIcon from "@mui/icons-material/Check";
import DownloadIcon from "@mui/icons-material/Download";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";

import { allRequiredDownloads } from "@/data/all-required-downloads";

export function RequiredDownloads() {
	const { download, isCompleted, isDownloading, percent, downloadCount, requiredDownloads } =
		useRequiredDownloads(allRequiredDownloads);

	return (
		!isCompleted && (
			<Box sx={{ px: 1, py: 2 }}>
				<Typography>
					This app requires Stable Diffusion XL (SDXL). Please download it here.
				</Typography>
				<Button
					disabled={isDownloading || isCompleted}
					startDecorator={isCompleted ? <CheckIcon /> : <DownloadIcon />}
					onClick={download}
				>
					<Box sx={{ pb: 1 }}>
						Download ({downloadCount} of {requiredDownloads.length})
					</Box>

					<LinearProgress
						determinate={isDownloading || isCompleted}
						value={isDownloading || isCompleted ? percent * 100 : 0}
						sx={{
							position: "absolute",
							left: 0,
							right: 0,
							bottom: 0,
							"--LinearProgress-radius": "0px",
							"--LinearProgress-thickness": "8px",
						}}
					/>
				</Button>
			</Box>
		)
	);
}
