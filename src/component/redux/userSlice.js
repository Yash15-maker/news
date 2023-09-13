import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signedIn: null,
  userName: null,
  userEmail: null,
  userImage: null,
  newsText: "All",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.signedIn = action.payload.signedIn;
      state.userImage = action.payload.userImage;
    },
    setnewsText: (state, action) => {
      state.newsText = action.payload.newsText;
    },
    setUserLogout: (state) => {
      state.userName = null;
      state.userEmail = null;
      state.userImage = null;
      state.signedIn = null;
    },
  },
});

export const { setActiveUser, setUserLogout } = userSlice.actions;

export const selectnewsText = (state) => state.user.newsText;
export const selectUserName = (state) => state.user.userName;
export const selectuserImage = (state) => state.user.userImage;
export const selectUserEmail = (state) => state.user.userEmail;
export const selectUserSign = (state) => state.user.signedIn;

export default userSlice.reducer;
