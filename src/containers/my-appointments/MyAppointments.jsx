import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    CircularProgress,
    Alert
} from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { useParams } from "react-router-dom";
import AppointmentService from "../../services/api/appointmentService";

ModuleRegistry.registerModules([AllCommunityModule]);

const columnDefs = [
    { headerName: "ID", field: "id", width: 70 },
    {
        headerName: "Patient Name",
        valueGetter: (params) => params.data?.userDetails?.name || "N/A",
        width: 150,
    },
    {
        headerName: "Doctor Name",
        valueGetter: (params) => params.data?.doctorDetails?.name || "N/A",
        width: 150,
    },
    {
        headerName: "Treatment Name",
        valueGetter: (params) => params.data?.treatmentDetails?.name || "N/A",
        width: 150,
    },
    {
        headerName: "Category",
        valueGetter: (params) => params.data?.treatmentDetails?.category || "N/A",
        width: 120,
    },
    { headerName: "Appointment Date", field: "appointmentDate", width: 140 },
    { headerName: "Time Slot", field: "appointmentTimeSlot", width: 130 },
    { headerName: "Status", field: "appointmentStatus", width: 120 },
];

function MyAppointments() {
    const { userId } = useParams();
    const [rowData, setRowData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const appointmentService = new AppointmentService();

    useEffect(() => {
        const fetchAppointments = async () => {
            if (!userId || isNaN(userId)) {
                setError("Invalid user ID");
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const response = await appointmentService.getAppointmentsByUserId(Number(userId));
                const data = Array.isArray(response) ? response : response?.data || [];
                setRowData(data);
            } catch (err) {
                console.error("Error fetching appointments:", err);
                setError("Failed to load appointments. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, [userId]);

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                My Appointments
            </Typography>

            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <CircularProgress />
                </Box>
            ) : error ? (
                <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>
            ) : (
                <div className="ag-theme-alpine" style={{ height: "80vh", width: "100%" }}>
                    <AgGridReact
                        rowSelection="multiple"
                        suppressRowClickSelection
                        columnDefs={columnDefs}
                        rowData={rowData}
                        defaultColDef={{
                            resizable: true,
                            sortable: true,
                            filter: true,
                        }}
                        pagination={true}
                        paginationPageSize={10}
                        domLayout="autoHeight"
                    />
                </div>
            )}
        </Box>
    );
}

export default MyAppointments;
