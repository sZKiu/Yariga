import { createSlice } from "@reduxjs/toolkit";
import { User, UserwError } from "@/interfaces/interfaces";

interface Action {
  payload: UserwError;
  type: string;
}

const initialState: UserwError | {} = {};

export const userSlice = createSlice({
  name: "userSlice",

  initialState,

  reducers: {
    setUser: (
      state,
      { payload: { uniqueName, username, email, age, image, error } }: Action
    ) => {
      return {
        ...state,
        uniqueName,
        username,
        email,
        image,
        age,
        error,
      };
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
