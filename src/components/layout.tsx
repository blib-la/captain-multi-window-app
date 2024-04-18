import { AppFrame } from "@captn/joy/app-frame";
import { CustomScrollbars } from "@captn/joy/custom-scrollbars";
import { TitleBar } from "@captn/joy/title-bar";
import Typography from "@mui/joy/Typography";
import type { ReactNode } from "react";

import { CatIcon } from "@/components/cat-icon";
import Head from "next/head";

export default function Layout({ children, title }: { children?: ReactNode, title: string }) {
	return (
		<AppFrame
			titleBar={
				<TitleBar color="pink" variant="solid">
					<Typography startDecorator={<CatIcon />}>{title}</Typography>
				</TitleBar>
			}
		>
			<Head>
				<title>{title}</title>
			</Head>
			<CustomScrollbars>{children}</CustomScrollbars>
		</AppFrame>
	);
}
