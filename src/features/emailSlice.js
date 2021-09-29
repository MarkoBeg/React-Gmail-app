import { createSlice } from "@reduxjs/toolkit";

export const emailSlice = createSlice({
  name: "email",
  initialState: {
    sendMessageIsOpen: false,
    openedMail: null,
  },
  reducers: {
    openMail: (state, action) => {
      state.openedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage, openMail } =
  emailSlice.actions;

//kad trebamo pullat nes u druge komponente
export const selectOpenedMail = (state) => state.email.openedMail;
export const selectSendMessageIsOpen = (state) => state.email.sendMessageIsOpen;

export default emailSlice.reducer;
