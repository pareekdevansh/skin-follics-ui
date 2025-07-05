import React from "react";
import { Box, Typography, Stack, CardContent, IconButton, Tooltip, Grid, useTheme } from "@mui/material";
import { LOCATION_COORDINATES_GOOGLE_MAP } from "../../constants/address";
import ContactItems from "./ContactItems";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SOCIAL_URLS } from "../../constants/social-urls";

const SocialMediaIcons = () => {
	const theme = useTheme();

	const socialLinks = [
		{ icon: <FaFacebook size={32} />, url: SOCIAL_URLS.facebook, name: "Facebook", callToAction: "Follow us on Facebook" },
		{ icon: <FaInstagram size={32} />, url: SOCIAL_URLS.instagram, name: "Instagram", callToAction: "Follow us on Instagram" },
		{ icon: <FaTwitter size={32} />, url: SOCIAL_URLS.twitter, name: "Twitter", callToAction: "Follow us on Twitter" },
		{ icon: <FaLinkedin size={32} />, url: SOCIAL_URLS.linkedin, name: "LinkedIn", callToAction: "Follow us on LinkedIn" },
		{ icon: <FaYoutube size={32} />, url: SOCIAL_URLS.youtube, name: "YouTube", callToAction: "Subscribe us on YouTube" },
	];
	return (
		<Stack direction="column" spacing={3} justifyContent="flex-start" sx={{ alignItems: "flex-start", marginTop: 2 }}>

			<Typography variant="body2" sx={{ textAlign: "left", marginRight: "auto", fontWeight: "bold", color: "#444" }}>
				Connect with Us
			</Typography>
			<Grid container spacing={2} justifyContent="center" sx={{ marginTop: "8px" }}>
				{socialLinks.map(({ icon, url, name, callToAction }) => (
					<Stack item xs={4} sm={2} key={name} sx={{ gap: "8px" }}>
						<Tooltip title={callToAction} arrow>
							<IconButton href={url} target="_blank" rel="noopener noreferrer" sx={{
								marginBottom: "8px",
								color: theme.palette.text.secondary,
								"&:hover": {
									color: theme.palette.primary.main,
								},
							}}>
								{icon}
							</IconButton>
						</Tooltip>
					</Stack>
				))}
			</Grid>
		</Stack>
	);
};

export default function ContactUs() {
	const imageSrc = "assets/background/contact_us.webp";

	return (
		<Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					height: "100%",
					maxHeight: "300px", // You can adjust this as per your needs
					overflow: "hidden",
					margin: "0 auto",
				}}
			>
				<img
					src={imageSrc}
					alt={"Skin Follics Service Image"}
					style={{
						width: "100%",
						height: "auto", // Ensures images scale proportionally
						maxHeight: "100%", // Prevents images from exceeding container size
						objectFit: "contain", // Ensures content is fully visible, no cropping
						objectPosition: "center", // Centers the content
					}}
				/>
			</Box>
			<Box sx={{
				padding: "32px",
				backgroundColor: "#f4f4f4",
				paddingX: "5%",
				minHeight: "65vh",
				height: "100%",
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
				justifyContent: "space-between",
				gap: 4,
			}}>
				<Box sx={{
					flexGrow: 1,
					width: { xs: "100%", md: "50%" },
					backgroundColor: "#ffffff",
					borderRadius: "8px",
					boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
					padding: "24px",
					display: "flex",
					flexDirection: "column",
					height: "90vh",
				}}>
					<Typography variant="h6" sx={{
						fontWeight: "bold",
						fontSize: "1.5rem",
						marginBottom: "16px",
						color: "#333",
					}}>
						Find Us on the Map
					</Typography>
					<Box sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "100%",
						height: "100%",
						flexGrow: 1,
						padding: "16px",
						borderRadius: "8px",
						overflow: "hidden",
						position: "relative",
						boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
					}}>
						<iframe
							title="Map Location"
							src={LOCATION_COORDINATES_GOOGLE_MAP}
							frameBorder="0"
							allowFullScreen
							aria-hidden="false"
							tabIndex="0"
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
								borderRadius: "8px",
							}}
						></iframe>
					</Box>
				</Box>
				<Box sx={{
					flexGrow: 1,
					width: { xs: "100%", md: "50%" },
					backgroundColor: "#ffffff",
					borderRadius: "8px",
					boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
					padding: "24px",
					height: "90vh",

				}}>
					<Typography sx={{
						fontWeight: "bold",
						fontSize: "1.5rem",
						marginBottom: "16px",
						color: "#333",
					}}>
						Contact Us
					</Typography>
					<CardContent>
						<Typography variant="body1" sx={{
							marginBottom: "16px",
							lineHeight: 1.8,
							color: "#555",
						}}>
							We are here to assist you with any inquiries, feedback, or requests you may have.
							Please feel free to reach out to us using the contact details below.
						</Typography>
						<Stack direction="column" spacing={3}>
							<ContactItems />
							<Stack direction="row" spacing={2} alignItems="center">
								<Typography variant="body2" sx={{ color: "#444" }}>
									<b>Hospital Timings:</b>
									<br />
									Monday to Sunday: 11:00 AM - 7:00 PM
									<br />
									<i>Closed on Wednesdays</i>
								</Typography>
							</Stack>
							<Stack direction="column" spacing={3} sx={{ alignItems: "flex-start", justifyContent: "flex-start" }}>
								<SocialMediaIcons />
							</Stack>
						</Stack>
					</CardContent>
				</Box>

			</Box>
		</Box>

	);
}
