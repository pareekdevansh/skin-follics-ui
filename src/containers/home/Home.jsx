import React from "react";
import "./home.css";
import { Box, Button } from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TreatmentsList from "./treatments/TreatmentsSection";
import AboutSection from "./about/AboutSection";
import ContactUsSection from "./contact-us/ContactUsSection";
import Carousel from "../../components/carousel/Carousel";
import GallerySection from "./gallery/GallerySection";
import GoogleReviews from "./google-review/GoogleReviews";
import { useNavigate } from "react-router-dom";

const heroUrls =
	[
		{ type: "image", src: "assets/background/home/bg_skin_follics_1.webp", alt: "Image at skin_follics.webp" },
		{ type: "image", src: "assets/background/home/bg_skin_follics_2.webp", alt: "Image at bg_skin_follics_2" },
		{ type: "image", src: "assets/background/home/bg_skin_follics_3.webp", alt: "Image at bg_skin_follics_3" },
		{ type: "image", src: "assets/background/home/bg_skin_follics_4.webp", alt: "Image at bg_skin_follics_4" },
		{ type: "image", src: "assets/background/home/bg_skin_follics_5.webp", alt: "Image at bg_skin_follics_5" }
	]


// const testimonialsList = [
// 	{
// 		testimonialSampleUrls: [
// 			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbNoLb-0P6lZXYZVXt0rEWoeC-WrRzuxpFbnslzsE7Xj7yXqhXm7kX-vDB-VyeAx6eO4&usqp=CAU",
// 			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbNoLb-0P6lZXYZVXt0rEWoeC-WrRzuxpFbnslzsE7Xj7yXqhXm7kX-vDB-VyeAx6eO4&usqp=CAU",
// 		],
// 		treatmentName: "Acne Treatment",
// 		patientFeedback:
// 			"I had a great experience with this dermatology hospital. The staff is knowledgeable and caring, and the treatments are effective.",
// 		rating: 4,
// 		patientName: "Arya Sharma",
// 	}
// ];


const Home = () => {

	const navigate = useNavigate();

	const navigateToAppointments = () => {
		navigate("/book-an-appointment");
	}

	return (
		<Box>
			<Carousel carouselItems={heroUrls} autoplay={true} autoplayInterval={5000} />

			<Box sx={{ width: "100%", padding: "16px", backgroundColor: "#f4f4f4" }}>

				<TreatmentsList />

				<GoogleReviews />
				{/* <TestimonialsSection /> */}
				<GallerySection />

				<AboutSection />

				<ContactUsSection />

				<Button
					variant="contained"
					color="primary"
					size="large"
					startIcon={<CalendarTodayIcon />}
					onClick={navigateToAppointments}
					sx={{
						fontWeight: 'bold',
						fontSize: '1.5rem',
						padding: '12px 5%',
						borderRadius: '12px',
						textTransform: 'none',
						boxShadow: '0 8px 15px rgba(0, 123, 255, 0.3)',
						transition: 'all 0.3s ease',
						'&:hover': {
							backgroundColor: 'primary.dark',
							boxShadow: '0 8px 20px rgba(0, 123, 255, 0.5)',
							transform: 'translateY(-2px)',
						},
					}}
					aria-label="Book an appointment now"
				>
					Book An Appointment Now
				</Button>

			</Box>
		</Box>

	);
};

export default Home;
