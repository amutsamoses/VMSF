import React from "react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactUs: React.FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: 4,
        backgroundColor: "white",
        padding: 4,
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "black", fontFamily: "Kumbh Sans, sans-serif" }}
      >
        Contact Me
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ color: "black", fontFamily: "Kumbh Sans, sans-serif" }}
      >
        Are you planning a trip or need a vehicle for a special occasion? At
        Rental, we're here to help! Our fleet of top-quality rental vehicles is
        ready to meet your needs, whether you're looking for a sleek sedan, a
        spacious SUV, or a reliable van. We pride ourselves on providing
        exceptional customer service and competitive pricing.
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={6}>
          <Box display="flex" alignItems="center" mb={2}>
            <LocationOnIcon
              fontSize="large"
              sx={{ marginRight: 1, color: "black" }}
            />
            <Typography
              variant="body1"
              sx={{ color: "black", fontFamily: "Kumbh Sans, sans-serif" }}
            >
              Nairobi, Kenya
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <PhoneIcon
              fontSize="large"
              sx={{ marginRight: 1, color: "black" }}
            />
            <Typography
              variant="body1"
              sx={{ color: "black", fontFamily: "Kumbh Sans, sans-serif" }}
            >
              +2547 68532443
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <EmailIcon
              fontSize="large"
              sx={{ marginRight: 1, color: "black" }}
            />
            <Typography
              variant="body1"
              sx={{ color: "black", fontFamily: "Kumbh Sans, sans-serif" }}
            >
              draculartepes@gmail.com
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <form>
            <TextField
              fullWidth
              label="Full Name"
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                style: { color: "black", fontFamily: "Kumbh Sans, sans-serif" },
              }}
              InputProps={{
                style: { color: "black", fontFamily: "Kumbh Sans, sans-serif" },
              }}
            />
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                style: { color: "black", fontFamily: "Kumbh Sans, sans-serif" },
              }}
              InputProps={{
                style: { color: "black", fontFamily: "Kumbh Sans, sans-serif" },
              }}
            />
            <TextField
              fullWidth
              label="Contact Phone"
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                style: { color: "black", fontFamily: "Kumbh Sans, sans-serif" },
              }}
              InputProps={{
                style: { color: "black", fontFamily: "Kumbh Sans, sans-serif" },
              }}
            />
            <TextField
              fullWidth
              label="Address"
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                style: { color: "black", fontFamily: "Kumbh Sans, sans-serif" },
              }}
              InputProps={{
                style: { color: "black", fontFamily: "Kumbh Sans, sans-serif" },
              }}
            />
            <TextField
              fullWidth
              label="Message"
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
              InputLabelProps={{
                style: { color: "black", fontFamily: "Kumbh Sans, sans-serif" },
              }}
              InputProps={{
                style: { color: "black", fontFamily: "Kumbh Sans, sans-serif" },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                marginTop: 2,
                fontFamily: "Kumbh Sans, sans-serif",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
