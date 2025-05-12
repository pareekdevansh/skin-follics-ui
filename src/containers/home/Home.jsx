import React from "react";
import "./home.css";
import { Box } from "@mui/material";
import TreatmentsList from "./treatments/TreatmentsSection";
import AboutSection from "./about/AboutSection";
import ContactUsSection from "./contact-us/ContactUsSection";
import Carousel from "../../components/carousel/Carousel";
import GallerySection from "./gallery/GallerySection";
import GoogleReviews from "./google-review/GoogleReviews";

const heroUrls =
	[
		{type : "image", src: "assets/background/home/bg_skin_follics_1.webp", alt: "Image at skin_follics.webp" },
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


				{/* Floating Action Button */}
				{/* <Box sx={{ textAlign: "center", marginTop: "32px" }}>
				<Button
					variant="contained"
					color="primary"
					sx={{
						padding: "10px 20px",
						fontSize: "16px",
						borderRadius: "24px",
					}}
					onClick={() => (window.location.href = "/book-an-appointment")}
				>
					Book An Appointment
				</Button>
			</Box> */}
			</Box>
		</Box>

	);
};

export default Home;
