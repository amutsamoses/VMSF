import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/app/store";
import { usersApi } from "../../../redux/usersAPI";
import { logout } from "../../../redux/slices/authSlice";
import { TUser } from "../../../types";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cloudinaryConfig } from "../../../cloudinary/cloudinary.config";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const AccountSettings: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const user = useSelector((state: RootState) => state.auth.user);
  const userId = user ? user.user_id : null;

  const {
    data: userData,
    error: userError,
    isLoading: userIsLoading,
  } = usersApi.useGetUsersQuery(userId);
  const dispatch = useDispatch();

  const [username, setUsername] = useState(user?.full_name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [contactPhone, setContactPhone] = useState(user?.contact_phone || "");
  const [address, setAddress] = useState(user?.address || "");
  const [currentPassword, setCurrentPassword] = useState(user?.password || "");
  const [newPassword, setNewPassword] = useState("");
  const [profilePicPreview, setProfilePicPreview] = useState<string | null>(
    user?.profile_image || null
  );
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [updateUser] = usersApi.useUpdateUserMutation();
  const [deleteUser] = usersApi.useDeleteUserMutation();

  useEffect(() => {
    if (userData && user) {
      setUsername(user.full_name);
      setEmail(user.email);
      setContactPhone(user.contact_phone);
      setAddress(user.address);
      setImageFile(user.Image_url);
      setProfilePicPreview(user.Image_url);
    }
  }, [userData]);
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    let profileImageUrl = user?.profile_image || "";

    if (imageFile) {
      const uploadFormData = new FormData();
      uploadFormData.append("file", imageFile);
      uploadFormData.append("upload_preset", cloudinaryConfig.uploadPreset);

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`,
          uploadFormData
        );
        profileImageUrl = response.data.secure_url;
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        toast.error("Failed to upload profile image");
        return;
      }
    }

    const updatedUser: Partial<TUser> = {
      email,
      full_name: username,
      contact_phone: contactPhone,
      address,
      Image_url: profileImageUrl,
    };

    try {
      if (userId) {
        await updateUser({
          user_id: userId,
          ...updatedUser,
        }).unwrap();
        toast.success("User updated successfully!");
      } else {
        toast.error("User ID is missing.");
      }
    } catch (error) {
      console.error("Failed to update user:", error);
      toast.error("Failed to update user.");
    }
  };

  const handleChangePassword = async () => {
    if (user) {
      const updatedUser: TUser = {
        ...user,
        password: newPassword,
      };
      await updateUser({ ...updatedUser });
    }
  };

  const handleDeleteAccount = async () => {
    if (user) {
      await deleteUser(user.user_id);
      dispatch(logout());
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImageFile(file);
      setProfilePicPreview(URL.createObjectURL(file));
    }
  };

  if (userIsLoading) return <div>Loading...</div>;
  if (userError) return <div>Error loading user data</div>;

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Settings
      </Typography>
      <Card sx={{ mb: 3 }}>
        <Box display="flex" alignItems="center" p={2}>
          <EmailIcon color="primary" fontSize="large" />
          <Typography variant="h5" sx={{ ml: 2 }}>
            Email Notifications
          </Typography>
        </Box>
      </Card>
      <Grid container spacing={3}>
        <Grid item md={5} xl={4}>
          <Card>
            <CardHeader title="Profile Settings" />
            <List component="nav">
              {["Account", "Password", "Delete Account"].map((text, index) => (
                <ListItem
                  button
                  selected={tabValue === index}
                  onClick={() => setTabValue(index)}
                  key={text}
                >
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>
        <Grid item md={7} xl={8}>
          <TabPanel value={tabValue} index={0}>
            <Card>
              <CardHeader title="Account" />
              <CardContent>
                <form onSubmit={handleSave}>
                  <Grid container spacing={3}>
                    <Grid item md={8}>
                      <TextField
                        label="Username"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <TextField
                        label="Email"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <TextField
                        label="Contact Phone"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                      />
                      <TextField
                        label="Address"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </Grid>
                    <Grid item md={4} textAlign="center">
                      {profilePicPreview && (
                        <div className="mt-2">
                          <img
                            src={profilePicPreview}
                            alt="Profile Preview"
                            className="w-24 h-24 rounded-full object-cover"
                            style={{ borderRadius: "50%" }}
                          />
                        </div>
                      )}
                      <Button
                        variant="contained"
                        component="label"
                        sx={{ mt: 2 }}
                      >
                        Upload
                        <input
                          type="file"
                          hidden
                          onChange={handleImageChange}
                        />
                      </Button>
                      <Typography variant="body2">
                        For best results, use an image at least 128px by 128px
                        in .jpg format
                      </Typography>
                    </Grid>
                  </Grid>
                  <Button type="submit" variant="contained" color="primary">
                    Save changes
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Card>
              <CardHeader title="Password" />
              <CardContent>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleChangePassword();
                  }}
                >
                  <TextField
                    label="Current password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                  <TextField
                    label="New password"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <Button type="submit" variant="contained" color="primary">
                    Save changes
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <Card>
              <CardHeader title="Delete Account" />
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  Once you delete your account, there is no going back. Please
                  be certain.
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleDeleteAccount}
                >
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </TabPanel>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccountSettings;
