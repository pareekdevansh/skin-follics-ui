import React, { useEffect, useState, useRef } from "react";
import { Box, TextField, Chip, Button, Card, Typography, IconButton } from '@mui/material';
import { Clear as ClearIcon } from '@mui/icons-material';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { useNavigate } from 'react-router-dom';
import { trackFilterEvent, trackSearchEvent } from "../../analytics";
import { services } from "./constants";

const Services = () => {

	const ALL = "All";
	const HAIR = "Hair";
	const SKIN = "Skin";
	const ANTI_AGING = "Anti-Aging";
	const imageUrlsByCategory = {
		[ALL]: "assets/background/treatments/all.webp",
		[HAIR]: "assets/background/treatments/hair.webp",
		[SKIN]: "assets/background/treatments/skin.webp",
		[ANTI_AGING]: "assets/background/treatments/anti_aging.webp"
	}

	const [selectedCategory, setSelectedCategory] = useState("");
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredServices, setFilteredServices] = useState(services);
	const navigate = useNavigate();
	const searchTimeout = useRef(null); // Reference to store the timeout for debounce
	const [imageSrc, setImageSrc] = useState(imageUrlsByCategory[ALL]);


	const navigateToService = (serviceName) => {
		navigate(`/service/${serviceName}`);
	};

	const handleFilterChange = (category) => {
		if (category.length > 0) {
			trackFilterEvent(category.toLowerCase().trim());
		}
		setSelectedCategory(category === selectedCategory ? "" : category);
	};

	const handleClearFilter = () => {
		setSelectedCategory("");
	};

	const handleSearchChange = (event) => {
		const query = event.target.value;
		if (query.length > 0) {
			trackSearchEvent(query.toLowerCase().trim());
		}
		setSearchQuery(query);
	};

	const handleClearSearch = () => {
		setSearchQuery("");
	};

	useEffect(() => {
		if (searchTimeout.current) {
			clearTimeout(searchTimeout.current);
		}

		searchTimeout.current = setTimeout(() => {
			setFilteredServices(
				services.filter((service) => {
					const matchesCategory = selectedCategory ? service.category === selectedCategory : true;
					const matchesSearch =
						service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
						service.description.toLowerCase().includes(searchQuery.toLowerCase());
					return matchesCategory && matchesSearch;
				})
			);
		}, 500);

		setImageSrc(imageUrlsByCategory[selectedCategory] || imageUrlsByCategory[ALL]);

		return () => {
			if (searchTimeout.current) {
				clearTimeout(searchTimeout.current);
			}
		};
	}, [searchQuery, selectedCategory]);

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
					maxHeight: "600px", // You can adjust this as per your needs
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

			<Box sx={{ padding: { xs: "16px", sm: "32px" }, backgroundColor: "#fafafa", minHeight: "100vh", overflow: "auto" }}>

				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: "24px",
						flexWrap: "wrap", // optional for responsiveness
						marginBottom: "24px",
					}}
				>
					{/* Filter Chips */}
					<Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
						<Chip
							label="Hair"
							color={selectedCategory === "Hair" ? "primary" : "default"}
							onClick={() => handleFilterChange("Hair")}
							sx={{ cursor: "pointer" }}
						/>
						<Chip
							label="Skin"
							color={selectedCategory === "Skin" ? "primary" : "default"}
							onClick={() => handleFilterChange("Skin")}
							sx={{ cursor: "pointer" }}
						/>
						<Chip
							label="Anti-Aging"
							color={selectedCategory === "Anti-Aging" ? "primary" : "default"}
							onClick={() => handleFilterChange("Anti-Aging")}
							sx={{ cursor: "pointer" }}
						/>
						<IconButton
							onClick={handleClearFilter}
							sx={{ cursor: "pointer" }}
						>
							<ClearAllIcon />
						</IconButton>
					</Box>

					{/* Search Bar */}
					<TextField
						label="Search Treatments"
						variant="outlined"
						value={searchQuery}
						onChange={handleSearchChange}
						sx={{
							maxWidth: "400px",
							width: "100%",
							backgroundColor: "white",
							borderRadius: "8px",
							"& .MuiOutlinedInput-root": {
								borderRadius: "8px",
							},
						}}
						InputProps={{
							endAdornment: (
								<IconButton onClick={handleClearSearch} sx={{ padding: "8px" }}>
									<ClearIcon />
								</IconButton>
							),
						}}
					/>
				</Box>


				{/* Service Cards */}
				<Box sx={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
					{filteredServices.length > 0 ? (
						filteredServices.map((service) => (
							<Card
								key={service.name}
								// onClick={() => navigateToService(service.name)}
								sx={{
									width: { xs: "100%", sm: "45%", md: "30%" },
									padding: "16px",
									display: "flex",
									flexDirection: "column",
									boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
									borderRadius: "8px",
									transition: "transform 0.3s, box-shadow 0.3s",
									// cursor: "pointer",
									"&:hover": {
										transform: "scale(1.05)",
										boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
									},
								}}
							>
								{/* Service Image */}
								{service.treatmentUrl && <Box
									component="img"
									src={service.treatmentUrl}
									alt={service.shortDescription}
									sx={{
										width: "100%",
										height: "200px",
										objectFit: "cover",
										borderTopLeftRadius: "8px",
										borderTopRightRadius: "8px",
									}}
								/>}
								{/* Service Content */}
								<Box sx={{ padding: "16px" }}>
									<Typography variant="h6" sx={{ fontWeight: "bold", color: "text.primary", marginBottom: "8px" }}>
										{service.name}
									</Typography>
									<Typography variant="body2" sx={{ color: "text.secondary" }}>
										{service.description}
									</Typography>
								</Box>
							</Card>
						))
					) : (
						<Typography variant="h6" sx={{ color: "text.secondary", textAlign: "center", width: "100%" }}>
							No services found.
						</Typography>
					)}
				</Box>
			</Box>
		</Box>
	);
};

export default Services;
