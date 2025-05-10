import React, { useState, useEffect } from "react";
import {
	Container, Typography, TextField, Button, MenuItem, Select, InputLabel, FormControl, Card, CardContent, CircularProgress,
	Dialog, DialogActions, DialogContent, DialogTitle, Grid
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { format, parse } from "date-fns";
import AppointmentService from "../../services/api/appointmentService";
import TreatmentService from "../../services/api/treatmentService";

const AppointmentBookingForm = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		phone: "",
		treatmentCategory: "",
		treatmentName: "",
		appointmentDate: new Date(),
		appointmentTime: "",
	});

	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [timeSlotModalOpen, setTimeSlotModalOpen] = useState(false);
	const [successDialogOpen, setSuccessDialogOpen] = useState(false);
	const [treatmentsMap, setTreatmentsMap] = useState(new Map());

	const [treatments, setTreatments] = useState([]);
	const [treatmentNames, setTreatmentNames] = useState([]);
	const timeSlots = [
		"11:00 AM", "11:15 AM", "11:30 AM", "11:45 AM",
		"12:00 PM", "12:15 PM", "12:30 PM", "12:45 PM",
		"01:00 PM", "01:15 PM", "01:30 PM", "01:45 PM",
	];


	const availabilityColors = {
		available: "green",
		limited: "orange",
		busy: "red",
		blocked: "gray",
		selected: "blue",
	};

	const appointmentService = new AppointmentService();
	const treatmentService = new TreatmentService();

	const validateForm = () => {
		const newErrors = {};
		if (!formData.fullName) newErrors.fullName = "Full name is required.";
		if (!formData.phone || formData.phone.length !== 10) newErrors.phone = "Phone number must be 10 digits.";
		if (!formData.treatmentCategory) newErrors.treatmentCategory = "Please select a treatment category.";
		if (!formData.appointmentDate) newErrors.appointmentDate = "Date is required.";
		if (!formData.appointmentTime) newErrors.appointmentTime = "Time is required.";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};


	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	useEffect(() => {
		const fetchTreatments = async () => {
			try {
				const response = await treatmentService.getAllTreatments();
				const treatmentsMap = new Map();
				console.log(response);
				const treatments = [];
				Object.keys(response).forEach((category) => {
					treatments.push(category);
					response[category].forEach((treatment) => {
						const { name } = treatment;
						if (!treatmentsMap.has(category)) {
							treatmentsMap.set(category, []);
						}
						treatmentsMap.get(category).push(name);
					});
				});
				setTreatments(treatments);
				console.log('treatment categories: ', treatments);
				setTreatmentsMap(treatmentsMap);
				console.log(treatmentsMap);
			} catch (error) {
				console.error("Failed to fetch treatments:", error);
			}
		};
		fetchTreatments();
	}, []);

	useEffect(() => {
		// using formData's current treatmentCategory to get treatment names
		if (!formData.treatmentCategory) return;
		if (!treatmentsMap.has(formData.treatmentCategory)) return;
		setTreatmentNames(treatmentsMap.get(formData.treatmentCategory));
		console.log('treatment names: ', treatmentNames);
	}, [treatments, formData.treatmentCategory]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validateForm()) {
			setLoading(true);
			try {
				const formattedDate = format(formData.appointmentDate, "MM-dd-yyyy");
				const form = {
					...formData,
					appointmentDate: formattedDate,
				};
				console.log(JSON.stringify(form, null, 2));
				const response = await appointmentService.createAppointment(form);
				if (response && response.status === 200) {
					setSuccessDialogOpen(true);
					setFormData({
						fullName: "",
						phone: "",
						treatmentCategory: "",
						treatmentName: "",
						appointmentDate: new Date(),
						appointmentTime: "",
					});
					// TODO: Navigate to booked treatments page
				}
			} catch (error) {
				console.error("Failed to create appointment:", error);
			} finally {
				setLoading(false);
			}
		}
	};

	const openTimeSlotModal = () => setTimeSlotModalOpen(true);
	const closeTimeSlotModal = () => setTimeSlotModalOpen(false);

	const handleTimeSlotSelection = (slot) => {
		setFormData((prev) => ({ ...prev, appointmentTime: slot }));
		closeTimeSlotModal();
	};

	return (
		<Container maxWidth="sm" sx={{ mt: 4, p: 2 }}>
			<Typography variant="h4" align="center" gutterBottom>
				Book Your Appointment
			</Typography>

			<Card>
				<CardContent>
					<form onSubmit={handleSubmit}>
						<Grid container spacing={2}>
							{/* Full Name */}
							<Grid item xs={12}>
								<TextField
									label="Full Name"
									name="fullName"
									value={formData.fullName}
									onChange={handleInputChange}
									error={!!errors.fullName}
									helperText={errors.fullName}
									fullWidth
								/>
							</Grid>

							{/* Phone */}
							<Grid item xs={12}>
								<TextField
									label="Phone Number"
									name="phone"
									type="tel"
									value={formData.phone}
									onChange={(e) => {
										if (/^\d*$/.test(e.target.value)) handleInputChange(e); // Allow only numbers
									}}
									error={!!errors.phone}
									helperText={errors.phone}
									fullWidth
								/>
							</Grid>

							{/* Treatment Category */}
							<Grid item xs={12}>
								<FormControl fullWidth>
									<InputLabel>Treatment Category</InputLabel>
									<Select
										name="treatmentCategory"
										value={formData.treatmentCategory}
										onChange={handleInputChange}
										error={!!errors.treatmentCategory}
									>
										{treatments.map((treatmentCategory, index) => (
											<MenuItem key={index} value={treatmentCategory}>
												{treatmentCategory}
											</MenuItem>
										))}
									</Select>
								</FormControl>
								{errors.treatment && <Typography color="error">{errors.treatment}</Typography>}
							</Grid>

							{/* Treatment Name */}
							{/* Treatment Category */}
							<Grid item xs={12}>
								<FormControl fullWidth>
									<InputLabel>Treatment Name</InputLabel>
									<Select
										name="treatmentName"
										value={formData.treatmentName}
										onChange={handleInputChange}
										error={!!errors.treatmentName}
									>
										{treatmentNames.map((treatmentName, index) => (
											<MenuItem key={index + 1} value={treatmentName}>
												{treatmentName}
											</MenuItem>
										))}
									</Select>
								</FormControl>
								{errors.treatment && <Typography color="error">{errors.treatment}</Typography>}
							</Grid>


							{/* Date */}
							<Grid item xs={12}>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<DatePicker
										label="Preferred Appointment Date"
										value={formData.appointmentDate}
										onChange={(newValue) => setFormData((prev) => ({ ...prev, appointmentDate: newValue }))}
										renderInput={(params) => (
											<TextField {...params} fullWidth error={!!errors.appointmentDate} helperText={errors.appointmentDate} />
										)}
									/>
								</LocalizationProvider>
							</Grid>

							{/* Appointment Time */}
							<Grid item xs={12}>
								<TextField
									label="Preferred Appointment Time"
									value={formData.appointmentTime}
									onClick={openTimeSlotModal}
									readOnly
									fullWidth
								/>
								{errors.appointmentTime && <Typography color="error">{errors.appointmentTime}</Typography>}
							</Grid>

							{/* Submit */}
							<Grid item xs={12}>
								<Button type="submit" fullWidth variant="contained" disabled={loading}>
									{loading ? <CircularProgress size={24} /> : "Book Appointment"}
								</Button>
							</Grid>
						</Grid>
					</form>
				</CardContent>
			</Card>

			{/* Time Slot Modal */}
			<Dialog open={timeSlotModalOpen} onClose={closeTimeSlotModal}>
				<DialogTitle>Select Appointment Time</DialogTitle>
				<DialogContent>
					<Grid container spacing={2}>
						{timeSlots.map((slot, index) => {
							const availability = index % 5 === 0 ? "busy" : index % 3 === 0 ? "limited" : "available";
							return (
								<Grid item xs={3} key={index}>
									<Button
										fullWidth
										style={{ backgroundColor: availabilityColors[availability], color: "#fff" }}
										onClick={() => handleTimeSlotSelection(slot)}
									>
										{slot}
									</Button>
								</Grid>
							);
						})}
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button onClick={closeTimeSlotModal} color="secondary">
						Cancel
					</Button>
				</DialogActions>
			</Dialog>

			{/* Success Dialog */}
			<Dialog open={successDialogOpen}>
				<DialogTitle>Appointment Booked</DialogTitle>
				<DialogContent>Your appointment has been booked successfully!</DialogContent>
				<DialogActions>
					<Button onClick={() => setSuccessDialogOpen(false)} color="primary">
						OK
					</Button>
				</DialogActions>
			</Dialog>
		</Container>
	);
};

export default AppointmentBookingForm;
