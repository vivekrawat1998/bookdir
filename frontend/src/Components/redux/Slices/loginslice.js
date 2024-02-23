import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "loginuser", 
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        
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

const loginuser = createSlice({
  name: "login",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => { 
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => { 
        state.loading = false;
        state.user.push(action.payload);
      })
      .addCase(login.rejected, (state, action) => { 
        state.loading = false;
      
        state.error = action.payload.message || "Failed to login. Please try again later.";
      });
  },
});

export default loginuser.reducer;
