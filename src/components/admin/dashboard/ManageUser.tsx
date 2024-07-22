import { useState, useEffect, SetStateAction } from "react";
import {
  TextField,
  Button,
  Paper,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { usersApi } from "../../../redux/usersAPI";
import { TUser } from "../../../types";
import { ClipLoader } from "react-spinners";

const ManageUsers = () => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<TUser[]>([]);
  const { data: usersData, error, isLoading } = usersApi.useGetUsersQuery();
  const [deleteUser] = usersApi.useDeleteUserMutation();

  useEffect(() => {
    if (usersData) {
      setUsers(usersData);
      setFilteredUsers(usersData);
    }
  }, [usersData]);

  useEffect(() => {
    let updatedUsers = users;
    if (searchQuery) {
      updatedUsers = updatedUsers.filter((user) =>
        user.full_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (roleFilter) {
      updatedUsers = updatedUsers.filter((user) => user.role === roleFilter);
    }
    setFilteredUsers(updatedUsers);
  }, [searchQuery, roleFilter, users]);

  const handleSearchChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchQuery(e.target.value);
  };

  const handleRoleFilterChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setRoleFilter(e.target.value);
  };

  const handleDeleteUser = async (userId: number) => {
    await deleteUser(userId);
    setUsers(users.filter((user) => user.user_id !== userId));
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#f00" size={150} />
      </div>
    );
  if (error) return <div>Error: Error Fetching</div>;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className="p-6 flex flex-col gap-4">
          <h2 className="text-3xl font-bold mb-4">Manage Users</h2>
          <div className="flex gap-4 mb-4">
            <TextField
              label="Search Users"
              variant="outlined"
              value={searchQuery}
              onChange={handleSearchChange}
              className="flex-1"
            />
            <FormControl variant="outlined" className="flex-1">
              <InputLabel>Filter by Role</InputLabel>
              <Select
                value={roleFilter}
                onChange={handleRoleFilterChange}
                label="Filter by Role"
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="user">User</MenuItem>
                {/* Add more roles as needed */}
              </Select>
            </FormControl>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredUsers.map((user) => (
              <div
                key={user.user_id}
                className="p-4 border rounded-lg shadow-md flex flex-col justify-between"
              >
                <div>
                  <p className="text-lg font-semibold">{user.full_name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  <p className="text-sm text-gray-500">{user.contact_phone}</p>
                  <p className="text-sm text-gray-500">{user.address}</p>
                  <p className="text-sm text-gray-500">{user.role}</p>
                </div>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDeleteUser(user.user_id)}
                  className="mt-4"
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ManageUsers;
