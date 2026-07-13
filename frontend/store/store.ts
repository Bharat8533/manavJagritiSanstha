import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./slices/adminSlice";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    // भविष्य में आप यहाँ kathaReducer या donationReducer भी जोड़ सकते हैं
  },
});

// TypeScript टाइप्स एक्सपोर्ट करें ताकि ऑटो-कंप्लीशन मिले
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
