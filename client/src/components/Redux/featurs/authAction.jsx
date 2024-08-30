import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import API from "../../../services/API.JSX";

// Define the async thunk for user login
export const userLogin = createAsyncThunk(
  "/login", // action type string
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      // Make the API request
      const { data } = await API.post("/login", { role, email, password });

      // Check if the login was successful and store the token
      if (data.success) {
        localStorage.setItem("token", data.token);
        toast.success(data.message);
        return data; // Returning data to be used by fulfilled state
      } else {
        toast.error(data.message);
        return rejectWithValue(data.message); // Handling failure case
      }
    } catch (error) {
      // Handle errors from the API request
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Define the async thunk for user register

export const userRegister = createAsyncThunk(
  'auth/register', // Updated action type string
  async (
    {
      email,
      password,
      role,
      name,
      hospitalName,
      organizationName,
      website,
      address,
      phone,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("/register", {
        email,
        password,
        role,
        name,
        hospitalName,
        organizationName,
        website,
        address,
        phone,
      });

      if (data.success) {
        console.log(data)
        toast.success(data.message);
        // Return the data so it can be used in the component
        // window.location.replace('/login')
        return data;
      } else {
        toast.error(data.message);
        return rejectWithValue(data.message);
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
