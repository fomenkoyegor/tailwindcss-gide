import { AppDispatch } from "../store";
import { IUser } from "../../models/IUser";
import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      return await response.json();
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);
