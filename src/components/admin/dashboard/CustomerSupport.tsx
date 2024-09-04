import React, { useState } from "react";
import {
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { customerSupportApi } from "../../../redux/customerAPI";
import { TCustomerSupport } from "../../../types";
import { toast } from "react-toastify";

const CustomerSupport: React.FC = () => {
  const { data: customerSupports, refetch } =
    customerSupportApi.useGetCustomerSupportQuery();
  const [createCustomerSupport] =
    customerSupportApi.useCreateCustomerSupportMutation();
  const [updateCustomerSupport] =
    customerSupportApi.useUpdateCustomerSupportMutation();
  const [deleteCustomerSupport] =
    customerSupportApi.useDeleteCustomerSupportMutation();

  const [openDialog, setOpenDialog] = useState(false);
  const [currentSupport, setCurrentSupport] = useState<TCustomerSupport | null>(
    null
  );
  const [form, setForm] = useState<Partial<TCustomerSupport>>({
    subject: "",
    description: "",
    status: "",
  });

  const handleOpenDialog = (support: TCustomerSupport | null) => {
    setCurrentSupport(support);
    setForm(
      support ? { ...support } : { subject: "", description: "", status: "" }
    );
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (currentSupport) {
      if (currentSupport && currentSupport.ticket_id) {
        await updateCustomerSupport({
          id: currentSupport.ticket_id,
          updated: form,
        });
      }
    } else {
      await createCustomerSupport(form);
      toast.success("Successful");
    }
    refetch();
    handleCloseDialog();
  };

  const handleDelete = async (id: number) => {
    await deleteCustomerSupport(id);
    refetch();
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Customer Support
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customerSupports?.map((support: TCustomerSupport) => (
            <TableRow key={support.ticket_id}>
              <TableCell>{support.ticket_id}</TableCell>
              <TableCell>{support?.user?.full_name}</TableCell>
              <TableCell>{support.subject}</TableCell>
              <TableCell>{support.description}</TableCell>
              <TableCell>{support.status}</TableCell>
              <TableCell>
                <Button onClick={() => handleOpenDialog(support)}>
                  Update
                </Button>
                <Button onClick={() => handleDelete(support.ticket_id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {currentSupport ? "Update Support" : "Create Support"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {currentSupport
              ? "Update the details of the support ticket."
              : "Create a new support ticket."}
          </DialogContentText>
          <TextField
            margin="dense"
            name="subject"
            label="Subject"
            fullWidth
            value={form.subject}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            fullWidth
            value={form.description}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="status"
            label="Status"
            fullWidth
            value={form.status}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit}>
            {currentSupport ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
      <Typography variant="h4" gutterBottom>
        Customer Inquiries
      </Typography>
      <List>
        {customerSupports?.map((support: TCustomerSupport) => (
          <ListItem key={support.ticket_id}>
            <ListItemText
              primary={support.subject}
              secondary={support.description}
            />
            <Button>Respond</Button>
          </ListItem>
        ))}
      </List>
      <Typography variant="h4" gutterBottom>
        FAQ
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6">How to book a vehicle?</Typography>
        <Typography variant="body1">You can book a vehicle by...</Typography>
        <Typography variant="h6">Payment options?</Typography>
        <Typography variant="body1">We accept payments via...</Typography>
      </Paper>
      <Typography variant="h4" gutterBottom>
        Issue Tracking
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">
          Track and resolve issues here...
        </Typography>
      </Paper>
      <Typography variant="h4" gutterBottom>
        Live Chat Support
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1">Live chat interface here...</Typography>
      </Paper>
    </Box>
  );
};

export default CustomerSupport;
