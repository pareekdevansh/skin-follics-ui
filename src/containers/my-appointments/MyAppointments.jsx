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
import './my-appointment.css';

ModuleRegistry.registerModules([AllCommunityModule]);

const columnDefs = [
  { headerName: "ID", field: "id", maxWidth: 90 },
  {
    headerName: "Patient Name",
    valueGetter: (params) => params.data?.userDetails?.name || "N/A",
  },
  {
    headerName: "Doctor Name",
    valueGetter: (params) => params.data?.doctorDetails?.name || "N/A",
  },
  {
    headerName: "Treatment Name",
    valueGetter: (params) => params.data?.treatmentDetails?.name || "N/A",
  },
  {
    headerName: "Category",
    valueGetter: (params) => params.data?.treatmentDetails?.category || "N/A",
  },
  { headerName: "Appointment Date", field: "appointmentDate" },
  { headerName: "Time Slot", field: "appointmentTimeSlot" },
  { headerName: "Status", field: "appointmentStatus" },
];

function MyAppointments() {
  // instead getting from params, fetch from redux store or context
  // const userId = useSelector((state) => state.user.id);
  const userId = 1;
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
        <div className="ag-theme-alpine custom-ag-theme" style={{ minHeight: "80vh", width: "100%" }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            rowSelection="multiple"
            suppressRowClickSelection
            pagination={true}
            paginationPageSize={10}
            domLayout="autoHeight"
            getRowClass={(params) =>
              params.node.rowIndex % 2 === 0 ? "zebra-row" : ""
            }
            defaultColDef={{
              resizable: true,
              sortable: true,
              filter: true,
              flex: 1,
              minWidth: 120
            }}
            rowHeight={48}
            animateRows={true}
            popupParent={document.body}
            suppressMenuHide={false}
            suppressColumnVirtualisation={true}
          />
        </div>
      )}
    </Box>
  );
}

export default MyAppointments;
