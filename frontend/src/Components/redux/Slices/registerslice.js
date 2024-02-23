import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const register = createAsyncThunk(
  "registeruser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // If the response is not okay, handle the error
        const errorText = await response.text();
        return rejectWithValue({ message: `HTTP error! Status: ${response.status}. ${errorText}` });
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue({ message: "Failed to process the request." });
    }
  }
);

const registeruser = createSlice({
  name: "register",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user.push(action.payload);
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        // Store a more relevant error message in the state
        state.error = action.payload.message || "Failed to register. Please try again later.";
      });
  },
});

export default registeruser.reducer;
