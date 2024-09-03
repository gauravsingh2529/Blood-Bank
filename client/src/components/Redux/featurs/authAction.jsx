import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import API from "../../../services/API.js";

// Define the async thunk for user login
export const userLogin = createAsyncThunk(
  "auth/login", // action type string
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      // Make the API request
      const { data } = await API.post("/login", { role, email, password });

      // Check if the login was successful and store the token
      if (data.success) {
        localStorage.setItem("token", data.token);
        toast.success(data.message);
        window.location.replace("/");
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
  "auth/register", // Updated action type string
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
        alert("user Registerd suscessfull");
        console.log(data);
        toast.success(data.message);
        // Return the data so it can be used in the component
        window.location.replace("/login");
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

/// Async thunk for fetching current user
export const getCurrentuser = createAsyncThunk(
  "auth/getCurrentuser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/currentUser");
      if (res?.data) {
        return res.data; // Return user data
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
