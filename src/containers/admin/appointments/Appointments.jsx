import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Grid, TextField, Box } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './appointment.css';
import {
    ModuleRegistry,
    AllCommunityModule
} from 'ag-grid-community';

ModuleRegistry.registerModules([
    AllCommunityModule,
]);

const bookingsData = [
    { id: 1, fullName: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', treatment: 'Hair Transplant', appointmentDate: '2024-12-20', appointmentTime: '11:00 AM' },
    { id: 2, fullName: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210', treatment: 'Acne Treatment', appointmentDate: '2024-12-22', appointmentTime: '01:00 PM' },
    { id: 3, fullName: 'Mark Taylor', email: 'mark.taylor@example.com', phone: '555-123-4567', treatment: 'PRP Therapy', appointmentDate: '2024-12-19', appointmentTime: '12:00 PM' },
    { id: 4, fullName: 'Sarah Lee', email: 'sarah.lee@example.com', phone: '444-555-6666', treatment: 'Chemical Peel', appointmentDate: '2024-12-18', appointmentTime: '09:30 AM' },
    { id: 5, fullName: 'Michael Jordan', email: 'michael.jordan@example.com', phone: '777-888-9999', treatment: 'Skin Rejuvenation', appointmentDate: '2024-12-21', appointmentTime: '03:00 PM' },
    { id: 6, fullName: 'Emily Roberts', email: 'emily.roberts@example.com', phone: '333-444-5555', treatment: 'Laser Hair Removal', appointmentDate: '2024-12-25', appointmentTime: '10:00 AM' },
    { id: 7, fullName: 'David Harris', email: 'david.harris@example.com', phone: '222-333-4444', treatment: 'Microdermabrasion', appointmentDate: '2024-12-23', appointmentTime: '02:00 PM' },
    { id: 8, fullName: 'Laura Brown', email: 'laura.brown@example.com', phone: '555-666-7777', treatment: 'Botox Treatment', appointmentDate: '2024-12-18', appointmentTime: '04:00 PM' },
    { id: 9, fullName: 'Chris Evans', email: 'chris.evans@example.com', phone: '888-999-0000', treatment: 'Facial Treatment', appointmentDate: '2024-12-19', appointmentTime: '11:30 AM' },
    { id: 10, fullName: 'Olivia King', email: 'olivia.king@example.com', phone: '111-222-3333', treatment: 'Skin Tightening', appointmentDate: '2024-12-22', appointmentTime: '08:00 AM' },
    { id: 11, fullName: 'Isabella Martinez', email: 'isabella.martinez@example.com', phone: '555-444-3333', treatment: 'PRP Therapy', appointmentDate: '2024-12-25', appointmentTime: '05:00 PM' },
    { id: 12, fullName: 'James White', email: 'james.white@example.com', phone: '444-333-2222', treatment: 'Facial Treatment', appointmentDate: '2024-12-20', appointmentTime: '09:00 AM' },
    { id: 13, fullName: 'Olivia Wilson', email: 'olivia.wilson@example.com', phone: '123-123-1234', treatment: 'Laser Hair Removal', appointmentDate: '2024-12-24', appointmentTime: '01:30 PM' },
    { id: 14, fullName: 'Lucas Walker', email: 'lucas.walker@example.com', phone: '555-888-2222', treatment: 'Acne Treatment', appointmentDate: '2024-12-19', appointmentTime: '08:30 AM' },
    { id: 15, fullName: 'Sophia Harris', email: 'sophia.harris@example.com', phone: '333-444-6666', treatment: 'Botox Treatment', appointmentDate: '2024-12-21', appointmentTime: '12:00 PM' },
];
const ManageAppointmentsAdmin = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [lastRefreshTime, setLastRefreshTime] = useState(null);

    const columnDefs = [
        { headerName: 'Full Name', field: 'fullName', sortable: true, filter: 'agTextColumnFilter' },
        { headerName: 'Email', field: 'email', sortable: true, filter: 'agTextColumnFilter' },
        { headerName: 'Phone Number', field: 'phone', sortable: false, filter: 'agTextColumnFilter' },
        { headerName: 'Treatment', field: 'treatment', sortable: true, filter: 'agTextColumnFilter' },
        { headerName: 'Appointment Date', field: 'appointmentDate', sortable: true, filter: 'agDateColumnFilter' },
        { headerName: 'Appointment Time', field: 'appointmentTime', sortable: true, filter: 'agTextColumnFilter' },
        {
            headerName: 'Actions',
            field: 'actions',
            cellRendererFramework: 'actionsCellRenderer', // Referencing the custom component
        },
    ];

    const frameworkComponents = {
        actionsCellRenderer: (params) => (
            <div>
                <Button variant="contained" color="primary" onClick={() => handleEdit(params.data)} sx={{ marginRight: 1, color: "#000" }}>
                    Edit
                </Button>
                <Button variant="outlined" color="secondary" onClick={() => handleDelete(params.data)}>
                    Delete
                </Button>
            </div>
        ),
    };

    const handleEdit = (rowData) => {
        console.log('Edit appointment:', rowData);
        // Logic for editing appointment
    };

    const handleDelete = (rowData) => {
        console.log('Delete appointment:', rowData);
        // Logic for deleting appointment
    };

    const handleGridReady = (params) => {
        params.api.sizeColumnsToFit();
    };

    useEffect(() => {
        setFilteredData(bookingsData);  // Initializing filteredData
    }, []);

    const handleRefreshData = () => {
        setLoading(true);
        setTimeout(() => {
            setFilteredData(bookingsData); // Simulating data load
            setLastRefreshTime(new Date().toLocaleString()); // Update the last refresh time
            setLoading(false);
        }, 1000);
    };

    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = bookingsData.filter((booking) => {
            return (
                booking.fullName.toLowerCase().includes(query) ||
                booking.email.toLowerCase().includes(query) ||
                booking.phone.toLowerCase().includes(query) ||
                booking.treatment.toLowerCase().includes(query) ||
                booking.appointmentDate.toLowerCase().includes(query) ||
                booking.appointmentTime.toLowerCase().includes(query)
            );
        });

        setFilteredData(filtered);
    };

    return (
        <Container maxWidth="xl" sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-start", marginTop: "2rem" }}>
            <Typography variant="h4" align="center" gutterBottom color="primary">
                Admin - View All Bookings
            </Typography>

            <Box sx={{ padding: 2 }}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        {/* Refresh Button */}
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleRefreshData}
                            sx={{
                                width: '100%',
                                height: 48,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: '1rem',
                            }}
                            startIcon={<RefreshIcon />}
                        >
                            Refresh Data
                        </Button>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        {/* Search Bar */}
                        <TextField
                            fullWidth
                            label="Search Bookings"
                            variant="outlined"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            sx={{
                                height: 50,
                                '& .MuiInputBase-root': {
                                    height: '100%',
                                },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                },
                            }}
                        />
                    </Grid>

                    {/* Last Refresh Time */}
                    {lastRefreshTime && (
                        <Grid item xs={12}>
                            <Typography variant="body2" color="textSecondary" align="center">
                                Last refreshed at: {lastRefreshTime}
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </Box>

            <Box sx={{ backgroundColor: '#fff', marginTop: 2 }}>
                <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
                    <AgGridReact
                        columnDefs={columnDefs}
                        rowData={filteredData}
                        pagination={true}
                        paginationPageSize={10}
                        domLayout="autoHeight"
                        onGridReady={handleGridReady}
                        loading={loading}
                    />
                </div>
            </Box>
        </Container>
    );
};

export default ManageAppointmentsAdmin;
