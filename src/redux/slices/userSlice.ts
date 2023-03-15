import { createSlice } from "@reduxjs/toolkit";
import { User } from "@/interfaces/interfaces";

interface Action {
  payload: User;
  type: string;
}

const initialState: User | {} = {};

export const userSlice = createSlice({
  name: "userSlice",

  initialState,

  reducers: {
    setUser: (
      state,
      { payload: { uniqueName, username, email, age, img } }: Action
    ) => {
      return {
        ...state,
        uniqueName,
        username,
        email,
        img,
        age,
      };
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
